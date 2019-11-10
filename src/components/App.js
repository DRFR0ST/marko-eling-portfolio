import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Nav, Routes } from "./shared";
import Devel from './Devel';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#50C39C"
    },
    background: "#fff",
    border: "#d5d5d5",
    text: {
      main: "#555555"
    }
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
      {process.env.REACT_APP_MODE !== "prod" && <Devel />}
    </div>
  );
}

export default App;
