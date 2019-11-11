import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Nav, Routes } from "./shared";
import darkTheme from "themes/dark";
import lightTheme from "themes/light";

function App() {
  const themeProps = React.useMemo(
    () =>
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? darkTheme
        : lightTheme,
    []
  );

  const theme = createMuiTheme(themeProps);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Nav />
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
