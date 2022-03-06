const session = require("express-session");
const connection = require("../connection");
const MySQLStore = require("express-mysql-session")(session);
const sessionStore = new MySQLStore(
	{
		createDatabaseTable: true,
		endConnectionOnClose: true,
		clearExpired: true,
		checkExpirationInterval: 900000,
		schema: {
			tableName: "sessions",
			columnNames: {
				session_id: "session_id",
				expires: "expires",
				data: "data",
			},
		},
	},
	connection
);

module.exports = sessionStore;
