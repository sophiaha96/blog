import { createMuiTheme } from "@material-ui/core/styles";

export const COLORS = {
  PINK: '#e57373',
  LIGHT_PINK: '#ffcdd2',
  FLORAL_WHITE: '#fffde7',
  PAPER: '#424242',
  BACKGROUND: '#212121',
}

const theme = createMuiTheme({
  palette: {
    background: {
      default: COLORS.BACKGROUND
    },
    primary: {
      main: COLORS.PINK,
    },
    secondary: {
      main: COLORS.FLORAL_WHITE
    },
  },
  
  typography: {
    fontFamily: 'Italiana',
    h3: {
      color: COLORS.FLORAL_WHITE,
      fontWeight: 'bold',
    },
    h6: {
      color: COLORS.FLORAL_WHITE,
      fontWeight: 'bolder',
    },
    body1: {
      color: COLORS.FLORAL_WHITE,
      fontSize: 18,
    },
    body2: {
      color: COLORS.PINK,
      fontSize: 18,
      fontWeight: 'bolder',
    },
    caption: {
      color: COLORS.FLORAL_WHITE,
      fontSize: 15,
      fontWeight: 'bold',
      textTransform: 'lowercase'
    }
  },

  overrides: {
    MuiButton: {
      outlined: {borderRadius: 0}
    }
  }
});

export default theme