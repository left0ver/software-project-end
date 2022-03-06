const express = require("express");
const cookieParser = require("cookie-parser");
const { selectUser } = require("../../sql");
const { queryUser } = require("../../query");
const sessionStore = require("../../until/sessionStore");
const secret = require("../../config/secret");
const loginRouter = express.Router();
loginRouter.use("/", express.urlencoded());
loginRouter.use("/", express.json());
loginRouter.use(cookieParser());

loginRouter.post("/code", function (req, res, next) {
	//解密得到sessionID
	const signedSession = cookieParser.signedCookie(
		req.cookies["v-code"],
		secret
	);
	//判断验证码是否过期
	if (signedSession === undefined) {
		return res.json({ code: 0, message: "验证码已过期" });
	}
	const { verifyCode } = req.body;
	sessionStore.get(signedSession, (err, session) => {
		if (err !== null) return console.log(err);
		//没有错误且验证码正确
		if (session.code === verifyCode.toLowerCase()) {
			return res.json({ code: 1, message: "code is correct" });
		}
		return res.json({ code: 0, message: "验证码错误" });
	});
});

loginRouter.post("/", (req, res, next) => {
	const { username, password } = req.body;
	queryUser(selectUser, username, password, (err, results) => {
		if (err) {
			return console.log(err);
		}
		const [result] = results;
		if (result) {
			res.status(200);
			return res.json({
				...result,
				code: 1,
				message: "登录成功",
			});
		}
		return res.json({ code: 0, message: "用户名或密码错误" });
	});
});

module.exports = loginRouter;
