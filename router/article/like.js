const express = require("express");
const likeRouter = express.Router();
const { selectLike, insertLike, updateLike } = require("../../sql");
const { queryLike, queryInsertLike, queryUpdateLike } = require("../../query");
//根据，文章id和用户id查询某一条数据

likeRouter.get("/", (req, res, next) => {
	const { articleId, uid } = req.query;
	queryLike(selectLike, articleId, uid, (err, result) => {
		if (err) {
			console.log(err);
		}
		res.json(result[0]);
	});
});
likeRouter.post("/", express.json());
likeRouter.post("/", (req, res, next) => {
	const { articleId, uid, isFavorite, isCollection } = req.body;
	queryInsertLike(
		insertLike,
		articleId,
		uid,
		isFavorite,
		isCollection,
		err => {
			if (err) {
				console.log(err);
				res.json({ code: 0, message: "insert fail" });
			} else {
				res.json({ code: 1, message: "insert success" });
			}
		}
	);
});

//更新
likeRouter.put("/", express.json());
likeRouter.put("/", (req, res, next) => {
	const { articleId, uid, updateValue, updateFiled } = req.body;
	queryUpdateLike(
		updateLike,
		articleId,
		uid,
		updateValue,
		updateFiled,
		(err, result) => {
			if (err) {
				console.log(err);
				res.json({ code: 0, message: "update fail" });
			} else {
				res.json({ code: 1, message: "update success" });
			}
		}
	);
});
module.exports = likeRouter;
