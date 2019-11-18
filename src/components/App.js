import React, { useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Nav, Routes,Footer } from "./shared";
import darkTheme from "themes/dark";
import lightTheme from "themes/light";
import LitteraProvider from "react-littera";

function App() {
  const [language, setLanguage] = useState("en_US");

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
      <LitteraProvider language={language} setLanguage={setLanguage}>
    <div>
        <ThemeProvider theme={theme}>
          <Nav />
          <Routes />
          <Footer/>
        </ThemeProvider>
    </div>
      </LitteraProvider>
  );
}

export default App;
