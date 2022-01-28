const express = require("express");
const connection = require("../../connection");
const multer = require("multer");
const { selectUser } = require("../../sql");
const { queryUser } = require("../../query");

const loginRouter = express.Router();
loginRouter.use("/", express.urlencoded());
loginRouter.use("/", express.json());
loginRouter.post("/", (req, res, next) => {
	const { username, password } = req.body;
	queryUser(selectUser, username, password, (err, results) => {
		if (err) {
			console.log(err);
			return;
		}
		const [result] = results;

		if (result) {
			res.status(200);
			res.json({ ...result, code: 1, message: "success" });
		} else {
			res.json({ code: 0, message: "fail" });
		}
	});
});

module.exports = loginRouter;
