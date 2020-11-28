import LSXThemeProvider from "../src/components/provider/LSXThemeProvider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <LSXThemeProvider>
      <Story />
    </LSXThemeProvider>
  ),
];