import { createMuiTheme } from "@material-ui/core/styles";

const saaPrimary = "#F2B705";
const saaSencondary = "#D97904";
const titleColor = "#eeeeee";
const textColor = "#253858";
const menuColor = "#191919";
const dateColor = "#5c6f84";

const mainFont =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

export default createMuiTheme({
  palette: {
    common: {
      saaSencondary: `${saaSencondary}`,
      saaPrimary: `${saaPrimary}`,
      titleColor: `${titleColor}`,
      textColor: `${textColor}`,
    },
    primary: {
      main: `${saaSencondary}`,
    },
    secondary: {
      main: `${saaPrimary}`,
    },
    date: {
      color: `${dateColor}`,
      fontWeight: "500",
      fontSize: "1rem",
      fontStyle: "italic",
    },
  },
  typography: {
    markdown: {
      fontFamily: `${mainFont}`,
    },
    tab: {
      fontFamily: `${mainFont}`,
      textTransform: "none",
      fontWeight: "400",
      fontSize: "0.8rem",
      color: `${menuColor}`,
    },
    sideBar: {
      fontFamily: `${mainFont}`,
    },

    button: {
      fontFamily: `${mainFont}`,
      textTransform: "none",
      fontWeight: "450",
      fontSize: "1rem",
      color: "#DFE1E5",
    },
    card: {
      link: {
        fontFamily: `${mainFont}`,
        textTransform: "none",
        fontWeight: "500",
        fontSize: "1rem",
        color: `${textColor}`,
      },
      text: {
        fontFamily: `${mainFont}`,
        textTransform: "none",
        fontWeight: "450",
        fontSize: "1rem",
        color: `${textColor}`,
      },
      title: {
        fontFamily: `${mainFont}`,
        textTransform: "none",
        fontWeight: "400",
        fontSize: "1.5rem",
      },
    },
    postPage: {
      text: {
        fontFamily: `${mainFont}`,
        textTransform: "none",
        fontWeight: "300",
        fontSize: "1rem",
        color: `${textColor}`,
      },
      title: {
        fontFamily: `${mainFont}`,
        textTransform: "none",
        fontWeight: "400",
        fontSize: "2rem",
        color: `${textColor}`,
      },
    },
    carousel: {
      text: {
        fontFamily: `${mainFont}`,
        textTransform: "none",
        fontWeight: "450",
        fontSize: "1.5rem",
        color: `${textColor}`,
      },
      title: {
        fontFamily: `${mainFont}`,
        textTransform: "none",
        fontWeight: "400",
        fontSize: "2rem",
        color: `${textColor}`,
      },
    },

    featured: {
      link: {
        fontFamily: `${mainFont}`,
        textTransform: "none",
        fontWeight: "800",
        fontSize: "1rem",
      },
      text: {
        fontFamily: `${mainFont}`,
        textTransform: "none",
        fontWeight: "450",
        fontSize: "1rem",
      },
      title: {
        fontFamily: `${mainFont}`,
        textTransform: "none",
        fontWeight: "400",
        fontSize: "1.5rem",
      },
    },

    banner: {
      description: {
        fontFamily: `${mainFont}`,
        textTransform: "none",
        fontWeight: "800",
        fontSize: "1rem",
      },
      text: {
        fontFamily: `${mainFont}`,
        textTransform: "none",
        fontWeight: "450",
        fontSize: "1rem",
      },
      title: {
        fontFamily: `${mainFont}`,
        textTransform: "none",
        fontWeight: "500",
        fontSize: "1.5rem",
      },
    },

    footer: {
      description: {
        fontFamily: `${mainFont}`,
        textTransform: "none",
        fontWeight: "450",
        fontSize: "1rem",
        color: `${textColor}`,
      },
      text: {
        fontFamily: `${mainFont}`,
        textTransform: "none",
        fontWeight: "450",
        fontSize: "1rem",
        color: `${textColor}`,
      },
      title: {
        fontFamily: `${mainFont}`,
        textTransform: "none",
        fontWeight: "500",
        fontSize: "1.5rem",
      },
    },
  },
});
