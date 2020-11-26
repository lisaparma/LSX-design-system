import { ThemeProvider } from "styled-components";
import { defaultTheme }  from "./defaultTheme";

function LSXThemeProvider({ theme, children }) {
	return (
		<ThemeProvider theme={theme | defaultTheme}>
			{children}
		</ThemeProvider>
	)
}

export default LSXThemeProvider;