const express = require("express");
const { insertUser, selectMaxId, selectUsername } = require("../../sql");
const { queryInsertUser, queryMaxId, queryUsername } = require("../../query");
const registerRouter = express.Router();

registerRouter.use("/", express.json());

//查询用户名是否存在
registerRouter.get("/", (req, res, next) => {
	const { username } = req.query;
	queryUsername(selectUsername, username, (err, results) => {
		const [result] = results;
		//不为空，则是用户名已存在
		if (result) {
			res.json({
				code: 0,
				message: "username has already been registered",
			});
		} else {
			res.json({ code: 1, message: "username is available" });
		}
	});
});

//用户注册
registerRouter.post("/", (req, res, next) => {
	const { username, email, password, sex } = req.body;
	queryMaxId(selectMaxId, "user", "uid", (err, results) => {
		const maxUid = results[0].uid;
		queryInsertUser(insertUser, maxUid + 1, username, email, password, sex);
		res.json({ code: 1, message: "register success" });
	});
});

module.exports = registerRouter;
