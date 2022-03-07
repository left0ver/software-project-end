#!/usr/bin/env node
const express = require("express");
const app = express();
const loginRouter = require("./router/login-register/login");
const registerRouter = require("./router/login-register/register");
const articleRouter = require("./router/article/article");
const likeRouter = require("./router/article/like");
const commentRouter = require("./router/article/comment");
const replyRouter = require("./router/article/reply");
const connection = require("./connection");
//验证码路由
const codeRouter = require("./router/login-register/verifiyCode");

connection.connect(function (err) {
	if (err) {
		console.log(err);
	} else {
		console.log("连接数据库成功");
	}
});
app.use(function (req, res, next) {
	//设置允许跨域的域名，*代表允许任意域名跨域
	res.header("Access-Control-Allow-Origin", "http://localhost:8080");
	//允许的header类型
	res.header("Access-Control-Allow-Headers", "content-type");
	//跨域允许的请求方式
	res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
	res.header("Access-Control-Allow-Credentials", true);

	next();
});

app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/article", articleRouter);
app.use("/article/like", likeRouter);
app.use("/article/comment", commentRouter);
app.use("/article/reply", replyRouter);
app.use("/code", codeRouter);
//development
app.listen(8000, "127.0.0.1");

// production
// app.listen(8000, "0.0.0.0");
