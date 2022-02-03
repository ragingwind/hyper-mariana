// Inspried Sublime Text 4 Mariana Theme
// https://github.com/twolfson/sublime-files/blob/master/Packages/Color%20Scheme%20-%20Default/Mariana.sublime-color-scheme

const black = "#000000";
const blue = "#6699cc";
const blue2 = "#4e5a65";
const blue3 = "#343d46";
const blue4 = "#647382";
const green = "#99c794";
const grey = "#333333";
const yellow = "#f9ae58";
const pink = "#c695c6";
const red = "#ec5f66";
const white = "#ffffff";
const white2 = "#f7f7f7";
const white3 = "#d8dee9";
const white3rgba = "rgb(216 222 233 0.1)";

exports.decorateConfig = (config) => {
	console.log('config', config);
	return {
		...config,
		backgroundColor: blue3,
		foregroundColor: white3,
		borderColor: white3,
		cursorColor: yellow,
		cursorAccentColor: yellow,
		selectionColor: blue2,
		colors: {
			black,
			red,
			green,
			yellow,
			blue,
			magenta: pink,
			cyan: green,
			white,
			lightBlack: white3rgba,
			lightRed: red,
			lightGreen: green,
			lightYellow: yellow,
			lightBlue: blue,
			lightMagenta: pink,
			lightCyan: green,
			lightWhite: white,
		}
	}
}
