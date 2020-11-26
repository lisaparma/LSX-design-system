import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./defaultTheme";

function LSXThemeProvider({
  theme,
  children
}) {
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme | defaultTheme
  }, children);
}

export default LSXThemeProvider;