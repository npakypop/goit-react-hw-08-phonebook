import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#021526',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#BF3F92',
      contrastText: '#ffffff',
    },
  },
  shape: {
    borderRadius: 5,
  },
});

export default theme;
