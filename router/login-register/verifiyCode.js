const express = require("express");
const session = require("express-session");
const createCode = require("../../until/createCode");
const sessionStore = require("../../until/sessionStore");
const secret = require("../../config/secret");
const codeRouter = express.Router();

codeRouter.use(
	"/",
	session({
		secret, // 对cookie进行签名
		name: "v-code", // cookie名称，默认为connect.sid
		resave: false, // 强制将会话保存回会话容器
		rolling: true,
		// 响应结束时会话将被销毁（删除）。
		unset: "destroy",
		saveUninitialized: true,
		store: sessionStore,
		cookie: {
			// 3分钟
			maxAge: 1000 * 60 * 3,
			secure: false,
		},
	}),
	function (req, res, next) {
		const captcha = createCode();
		req.session.code = captcha.text.toLowerCase();
		res.type("svg");
		res.status(200).send(captcha.data);
	}
);
module.exports = codeRouter;
