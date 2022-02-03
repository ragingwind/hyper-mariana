// Inspried Sublime Text 4 Mariana Theme
// https://github.com/twolfson/sublime-files/blob/master/Packages/Color%20Scheme%20-%20Default/Mariana.sublime-color-scheme

const foregroundColor = '#CCCCCC';
const backgroundColor = '#333333';
const black = '#000000';
const black = '#FFFFFF';
const red = '#CC0033';
const green = '#99CC99';
const yellow = '#FF9933';
const blue = '#6699CC';
const magenta = '#996699';
const cyan = '#339999';

exports.decorateConfig = config => Object.assign({}, config, {
	backgroundColor,
	foregroundColor,
	borderColor: '#646B73',
	cursorColor: '#A85F0C',
	cursorAccentColor: backgroundColor,
	selectionColor: 'rgba(78, 84, 89, 0.2)',
	colors: {
		black,
		red,
		green,
		yellow,
		blue,
		magenta,
		cyan,
		white:
		lightBlack: black,
		lightRed: red,
		lightGreen: green,
		lightYellow: yellow,
		lightBlue: blue,
		lightMagenta: magenta,
		lightCyan: cyan,
		lightWhite: foregroundColor
	},
	css: `
		/* Hide title when only one tab */
		.tabs_title {
			display: none !important;
		}

		/* Add a highlight line below the active tab */
		.tab_tab::before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 1px;
			background-color: rgba(255, 106, 193, 0.4);
			transform: scaleX(0);
			will-change: transform;
		}
		.tab_tab.tab_active::before {
			transform: scaleX(1);
			transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
		}

		/* Fade the title of inactive tabs and the content of inactive panes */
		.tab_text,
		.term_term {
			opacity: 0.6;
			will-change: opacity;
		}
		.tab_active .tab_text,
		.term_active .term_term {
			opacity: 1;
			transition: opacity 0.12s ease-in-out;
		}

		/* Allow custom css / overrides */
		${config.css}
	`
});
