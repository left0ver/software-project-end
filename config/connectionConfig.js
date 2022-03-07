const database = require("./database");
//development
const connectionConfig = {
	host: "localhost",
	user: "root",
	password: "zwc666666",
	database,
};
//production
// const connectionConfig = {
// 	host: "0.0.0.0",
// 	user: "zwc",
// 	password: "zwc666666",
// 	database,
// };
module.exports = connectionConfig;
