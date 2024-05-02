import { Padding } from "@mui/icons-material";
import InputBase from "@mui/material/InputBase";
import { createTheme, styled } from "@mui/material/styles";

// const theme = createTheme({
//   components: {
//     MuiOutlinedInput: {
//       styleOverrides: {
//         root: {
//           "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//             borderColor: "#8d5404", // Couleur de la bordure au focus
//           },
//         },
//       },
//     },

//     MuiInputLabel: {
//       styleOverrides: {
//         root: {
//           "&.Mui-focused": {
//             color: "#8d5404", // Couleur du label au focus
//             fontWeight: "fontWeightMedium",
//           },
//         },
//       },
//     },
//   },
// });

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    width: "10vw",
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      border: 1,
      borderRadius: 4,
      borderColor: "#8d5404",
      boxShadow: "0 0 0 2px #8d5404",
      width: "8vw",
    },
  },
  "& label": {
    color: "#8d5404 !important", // Couleur du label
  },
  "& .MuiSelect-root": {
    "& option": {
      "&:hover": {
        backgroundColor: "#8d5404 !important", // Couleur de fond au survol des options
        color: "white !important", // Couleur du texte au survol des options
        Padding: "0",
      },
    },
  },
}));

export { BootstrapInput };
