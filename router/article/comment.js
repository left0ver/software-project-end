const express = require("express");
const { selectComment, selectMaxId, insertComment } = require("../../sql");
const { queryComment, queryMaxId, queryInsertComment } = require("../../query");

const commentRouter = express.Router();
commentRouter.get("/", (req, res, next) => {
	const { articleId } = req.query;

	queryComment(selectComment, articleId, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json(result);
		}
	});
});
commentRouter.post("/", express.json());
commentRouter.post("/", (req, res, next) => {
	const { commentUserId, username, articleId, commentContent } = req.body;
	queryMaxId(selectMaxId, "comment", "commentId", (err, result) => {
		if (err) {
			console.log(err);
		}
		let commentId;
		if (result.length) {
			commentId = result[0].commentId + 1;
		} else {
			commentId = 1;
		}

		queryInsertComment(
			insertComment,
			commentId,
			commentUserId,
			username,
			articleId,
			commentContent,
			(err, result) => {
				if (err) {
					console.log(err);
					res.json({ code: 0, message: "insert fail" });
				} else {
					res.json({
						commentId,
						commentUserId,
						username,
						articleId,
						commentContent,
					});
				}
			}
		);
	});
});

module.exports = commentRouter;
