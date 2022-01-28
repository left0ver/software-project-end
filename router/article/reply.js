const express = require("express");
const { selectReply, selectMaxId, insertReply } = require("../../sql");
const { queryReply, queryMaxId, queryInsertReply } = require("../../query");
const replyRouter = express.Router();

replyRouter.get("/", (req, res, next) => {
	const { commentId } = req.query;
	queryReply(selectReply, commentId, (err, result) => {
		if (err) {
			console.log(err);
		}
		res.json(result);
	});
});

replyRouter.post("/", express.json());
//插入一条回复记录
replyRouter.post("/", (req, res, next) => {
	const { commentId, replyUserId, username, replyContent } = req.body;
	queryMaxId(selectMaxId, "reply", "replyId", (err, result) => {
		if (err) {
			console.log(err);
		}
		let replyId;

		if (result.length) {
			replyId = result[0].replyId + 1;
		} else {
			replyId = 1;
		}
		queryInsertReply(
			insertReply,
			replyId,
			commentId,
			replyUserId,
			username,
			replyContent,
			err => {
				if (err) {
					console.log(err);
				} else {
					res.json({
						replyId,
						commentId,
						replyUserId,
						username,
						replyContent,
					});
				}
			}
		);
	});
});
module.exports = replyRouter;
