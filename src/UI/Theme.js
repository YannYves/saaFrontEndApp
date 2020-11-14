import { createMuiTheme } from "@material-ui/core/styles";

const saaPrimary = "#F2B705";
const saaSencondary = "#D97904";
const titleColor = "#eeeeee";
const textColor = "#ffffff";

const mainFont = "HelveticaNeue";

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
  },
  typography: {
    markdown: {
      fontFamily: `${mainFont}`,
    },
    tab: {
      fontFamily: `${mainFont}`,
      textTransform: "none",
      fontWeight: "500",
      fontSize: "0.8rem",
    },
    sideBar: {
      fontFamily: `${mainFont}`,
    },

    card: {
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
        fontWeight: "500",
        fontSize: "1.5rem",
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
        fontWeight: "500",
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
  },
});
