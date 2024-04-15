import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
//Theme
import { CssBaseline, ThemeProvider } from "@mui/material";
import GlobalStyle from "./theme/globalStyle";
import { darkTheme } from "./theme/allThemes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <GlobalStyle />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>
);
