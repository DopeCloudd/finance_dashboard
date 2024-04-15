import { createTheme } from "@mui/material";
import { lime, purple } from '@mui/material/colors';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#EAEDED',
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FDFEFE',
        },
        secondary: purple,
    },
});