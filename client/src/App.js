import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import Box from '@mui/material/Box';
// Pages
import Home from './pages/Home';
import ExpensesPage from './pages/ExpensesPage';

function App() {

    /*useEffect(() => {
        fetch('http://localhost:3034/api/binance-balance') // Utilisez le bon port ici
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }, []);*/

    return (
        <Box
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                flexGrow: 1,
                height: '100%',
                overflow: 'auto',
            }}
        >
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100%',
                    overflow: 'auto',
                }}
            >
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/expenses" element={<ExpensesPage />} exact />
                </Routes>
            </Box>
        </Box>
    );
}

export default App;
