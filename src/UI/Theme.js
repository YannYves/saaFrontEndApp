import { createMuiTheme } from "@material-ui/core/styles";

const saaPrimary = "#FFB800";
const saaSencondary = "#FFB800";
const titleColor = "#2A357E";
const textColor = "#253858";
const dateColor = "#5c6f84";
const subTitleColor = "#FFB800";
const backgroundColor = "#EEEEEF";

const mainFont =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
const titleFont = "Gillsans";

export default createMuiTheme({
  palette: {
    common: {
      saaSencondary: `${saaSencondary}`,
      saaPrimary: `${subTitleColor}`,
      titleColor: `${titleColor}`,
      textColor: `${textColor}`,
      subTitleColor: `${subTitleColor}`,
      backgroundColor: `${backgroundColor}`,
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
    },
  },
  typography: {
    markdown: {
      fontFamily: `${mainFont}`,
      fontSize: "1rem",
      fontWeight: 420,
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    tab: {
      fontFamily: `${titleFont}`,
      textTransform: "none",
      fontWeight: "600",
      fontSize: "0.9rem",
      color: `${titleColor}`,
    },
    sideBar: {
      fontFamily: `${mainFont}`,
    },

    button: {
      fontFamily: `${mainFont}`,
      textTransform: "none",
      fontWeight: "550",
      padding: "1rem",
      fontSize: "1rem",
      color: `${dateColor}`,
    },
    card: {
      link: {
        fontFamily: `${mainFont}`,
        textTransform: "none",
        fontWeight: "600",
        fontSize: "1rem",
        color: `${titleColor}`,
      },
      text: {
        fontFamily: `${mainFont}`,
        textTransform: "none",
        color: `${textColor}`,
      },
      title: {
        textTransform: "capitalize",
        fontFamily: `${titleFont}`,
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
        fontWeight: "250",
        fontSize: "1.5rem",
        color: `${textColor}`,
        textAlign: "left",
      },
      title: {
        fontFamily: `${titleFont}`,
        fontWeight: "350",
        fontSize: "2rem",
        padding: "2em 24px",
        marginTop: "2rem",
        textAlign: "center",
        textTransform: "capitalize",
        color: `${titleColor}`,
        textDecoration: "underline",
      },
    },
    featured: {
      link: {
        fontFamily: `${mainFont}`,
        textTransform: "none",
        fontWeight: "700",
        fontSize: "1rem",
      },
      text: {
        fontFamily: `${mainFont}`,
        textTransform: "none",
        fontWeight: "450",
        fontSize: "1rem",
      },
      title: {
        color: `${titleColor}`,
        fontFamily: `${titleFont}`,
        textTransform: "none",
        fontWeight: "500",
        fontSize: "3.5rem",
        marginTop: "1.5em",
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
        fontFamily: `${titleFont}`,
        textTransform: "none",
        fontWeight: "500",
        fontSize: "1.5rem",
      },
    },

    footer: {
      description: {
        fontFamily: `${titleFont}`,
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
        fontFamily: `${titleFont}`,
        textTransform: "none",
        fontWeight: "500",
        fontSize: "1.5rem",
      },
    },
  },
});
