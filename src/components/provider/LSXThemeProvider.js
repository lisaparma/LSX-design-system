import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme }  from "./defaultTheme";

function LSXThemeProvider({ theme = defaultTheme, children }) {
	return (
		<ThemeProvider theme={theme} style={{ "font-family": defaultTheme.text.fontFamily}}>
			{children}
		</ThemeProvider>
	)
}

export default LSXThemeProvider;