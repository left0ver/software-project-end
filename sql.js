//登录的时候查询用户名和密码
const selectUser = (username, password) => {
	return `select * from user where username = '${username}' and password = '${password}'`;
};
const selectUsername = username => {
	return `select * from user where username = '${username}'`;
};
const insertUser = (uid, username, email, password, sex) => {
	return `insert into user values ('${uid}','${username}','${email}','${password}','${sex}')`;
};
const selectMaxId = (table, filed) => {
	return `select ${filed} from ${table} where ${filed} in (select max(${filed}) from ${table})`;
};

//Article
const selectAllArticle = () => {
	return `select * from article `;
};
//查询某一条文章的信息
const selectArticle = articleId => {
	return `select * from article where articleId='${articleId}'`;
};

//更新文章的某一个字段的信息
const updateArticle = (articleId, updateValue, updateFiled) => {
	// let updateFiled=updateFiled
	return `update article set \`${updateFiled}\` ='${updateValue}' where articleId= '${articleId}'`;
};

const insertArticle = (articleId, title, articleContent, like, collection) => {
	return `insert into article values('${articleId}', '${title}', '${articleContent}','${like}','${collection}')`;
};
//like
//查询某一条like中的数据
const selectLike = (articleId, uid) => {
	return (
		//这里like这个表名好像是系统的关键字，所以这里要用``
		"select * from `like` where articleId=" + articleId + " and uid=" + uid
	);
};
const insertLike = (articleId, uid, isFavorite, isCollection) => {
	return (
		"insert into `like` values (" +
		`'${articleId}','${uid}','${isFavorite}','${isCollection}')`
	);
};

//更新like中的信息
const updateLike = (articleId, uid, updateValue, updateFiled) => {
	return `update \`like\` set ${updateFiled} ='${updateValue}' where articleId= '${articleId}' and uid= '${uid}'`;
};

//comment
const selectComment = articleId => {
	return `select * from comment where articleId = '${articleId}'`;
};

//插入一条评论
const insertComment = (
	commentId,
	commentUserId,
	username,
	articleId,
	commentContent
) => {
	return `insert into comment values ('${commentId}', '${commentUserId}','${username}','${articleId}','${commentContent}')`;
};
//reply

const selectReply = commentId => {
	return `select * from reply where commentId = '${commentId}'`;
};

const insertReply = (
	replyId,
	commentId,
	replyUserId,
	username,
	replyContent
) => {
	return `insert into reply values ('${replyId}', '${commentId}','${replyUserId}','${username}','${replyContent}')`;
};

module.exports = {
	selectUser,
	insertUser,
	selectMaxId,
	selectUsername,
	selectAllArticle,
	selectArticle,
	updateArticle,
	insertArticle,
	selectLike,
	insertLike,
	updateLike,
	selectComment,
	insertComment,
	selectReply,
	insertReply,
};
