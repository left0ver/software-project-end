const svgCaptcha = require("svg-captcha");
function createCode() {
	return svgCaptcha.create({
		size: 4,
		ignoreChars: "oO0l1iI",
		noise: 1,
		color: true,
		backgroundColor: "#cc9966",
	});
}
module.exports = createCode;
