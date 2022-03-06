const { createClient } = require("redis");
const client = createClient({ url: "redis://localhost:8899" });
client.on("error", err => console.log("redis Error :", err));
client.connect().then(res => console.log(res));
function getCode(key) {
	if (key) {
		client.get(key, (err, data) => {
			if (err !== null) {
				console.log(data);
			}
		});
	}
}
function setCode(key, value, expire = 1000 * 60 * 60 * 24) {
	return new Promise((resolve, reject) => {
		client.set(key, value, (err, replay) => {
			if (err) {
				reject(err + "set key fail");
			}
			client.expire(key, expire);
			console.log(replay);
			resolve("success");
		});
	});
}
module.exports = { getCode, setCode };
