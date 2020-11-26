// Manager App
import { create } from "@storybook/theming";
import { addons } from '@storybook/addons';

const myTheme = create({
	base: 'light',
	brandTitle: 'LSX Design System',
	brandUrl: 'https://github.com/lisaparma',
	appBg: "#AED6F1",
	appBorderColor: "#2E86C1",
	appBorderRadius: "10px",
	textColor: "#154360",
	fontBase: '"Open Sans", sans-serif',
	fontCode: 'monospace',
});

addons.setConfig( {
		theme: myTheme,
		showNav: true,
		isToolshown: true,
		showPanel: true,
		panelPosition: 'right'
});