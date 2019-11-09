import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Nav, Routes } from "./shared";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#50C39C"
    },
    background: "#FAFAFA"
  },
  spacing: 8
});

function App() {
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
