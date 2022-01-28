const express = require("express");
const {
	selectAllArticle,
	selectArticle,
	updateArticle,
	insertArticle,
	selectMaxId,
} = require("../../sql");
const {
	queryAllArticle,
	queryArticle,
	queryUpdateArticle,
	queryInsertArticle,
	queryMaxId,
} = require("../../query");
const articleRouter = express.Router();

//添加文章信息
articleRouter.post("/", express.json(), (req, res, next) => {
	queryMaxId(selectMaxId, "article", "articleId", (err, result) => {
		if (err) {
			console.log(err);
		} else {
			let articleId;
			if (result.length) {
				articleId = result[0].articleId + 1;
			} else {
				articleId = 1;
			}

			const { title, articleContent, like, collection } = req.body;
			queryInsertArticle(
				insertArticle,
				articleId,
				title,
				articleContent,
				like,
				collection,
				(err, result) => {
					if (err) {
						console.log(err);
					} else {
						if (result) {
							res.json({
								code: 1,
								message: "post success",
							});
						}
					}
				}
			);
		}
	});
});

//请求文章的信息
articleRouter.get("/", (req, res, next) => {
	//有参数的时候，就是查询某一条文章信息
	const { articleId } = req.query;
	//如果是undefined,即查询所有文章信息
	if (!articleId) {
		queryAllArticle(selectAllArticle, (err, result) => {
			if (err) {
				console.log(err);
			} else {
				res.json(result);
			}
		});
	} else {
		//查询单个文章的信息
		queryArticle(selectArticle, articleId, (err, result) => {
			if (err) {
				console.log(err);
			} else {
				res.json(result[0]);
			}
		});
	}
});
articleRouter.put("/", express.json());
articleRouter.put("/", (req, res, next) => {
	const { articleId, updateValue, updateFiled } = req.body;
	queryUpdateArticle(
		updateArticle,
		articleId,
		updateValue,
		updateFiled,
		(err, result) => {
			if (err) {
				console.log(err);
			} else {
				res.json({ code: 1, message: "update success" });
			}
		}
	);
});

module.exports = articleRouter;
