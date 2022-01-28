const connection = require("./connection");
const queryUser = (sql, username, password, callback) => {
	return connection.query(sql(username, password), callback);
};
const queryUsername = (sql, username, callback) => {
	return connection.query(sql(username), callback);
};
const queryInsertUser = (
	sql,
	uid,
	username,
	email,
	password,
	sex,
	callback
) => {
	return connection.query(sql(uid, username, email, password, sex), callback);
};
const queryMaxId = (sql, table, filed, callback) => {
	return connection.query(sql(table, filed), callback);
};

//Article
const queryAllArticle = (sql, callback) => {
	return connection.query(sql(), callback);
};
//查询某一条文章的信息
const queryArticle = (sql, articleId, callback) => {
	return connection.query(sql(articleId), callback);
};

//更新文章中某个字段的数据
const queryUpdateArticle = (
	sql,
	articleId,
	updateValue,
	updateFiled,
	callback
) => {
	return connection.query(sql(articleId, updateValue, updateFiled), callback);
};

const queryInsertArticle = (
	sql,
	articleId,
	title,
	articleContent,
	like,
	collection,
	callback
) => {
	return connection.query(
		sql(articleId, title, articleContent, like, collection),
		callback
	);
};

//查询某一条like中的数据
const queryLike = (sql, articleId, uid, callback) => {
	return connection.query(sql(articleId, uid), callback);
};
//插入一条like的记录
const queryInsertLike = (
	sql,
	articleId,
	uid,
	isFavorite,
	isCollection,
	callback
) => {
	return connection.query(
		sql(articleId, uid, isFavorite, isCollection),
		callback
	);
};
//更新一条like的记录
const queryUpdateLike = (
	sql,
	articleId,
	uid,
	updateValue,
	updateFiled,
	callback
) => {
	return connection.query(
		sql(articleId, uid, updateValue, updateFiled),
		callback
	);
};

//comment
const queryComment = (sql, articleId, callback) => {
	return connection.query(sql(articleId), callback);
};

const queryInsertComment = (
	sql,
	commentId,
	commentUserId,
	username,
	articleId,
	commentContent,
	callback
) => {
	return connection.query(
		sql(commentId, commentUserId, username, articleId, commentContent),
		callback
	);
};
//reply
const queryReply = (sql, commentId, callback) => {
	return connection.query(sql(commentId), callback);
};

const queryInsertReply = (
	sql,
	replyId,
	commentId,
	replyUserId,
	username,
	replyContent,
	callback
) => {
	return connection.query(
		sql(replyId, commentId, replyUserId, username, replyContent),
		callback
	);
};

module.exports = {
	queryUser,
	queryInsertUser,
	queryMaxId,
	queryUsername,
	queryAllArticle,
	queryArticle,
	queryUpdateArticle,
	queryInsertArticle,
	queryLike,
	queryInsertLike,
	queryUpdateLike,
	queryComment,
	queryInsertComment,
	queryReply,
	queryInsertReply,
};
