import { createTheme } from "@mui/material";
import { green, orange, purple, blue } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        }
    },
    spacing: 10,
});

export default theme;