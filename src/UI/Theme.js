import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

const mainFont = "HelveticaNeue";

export default createMuiTheme({
  palette: {
    common: {
      arcBlue: `${arcBlue}`,
      arcOrange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    markdown: {
      fontFamily: `${mainFont}`,
    },
    tab: {
      fontFamily: `${mainFont}`,
      textTransform: "none",
      fontWeight: "600",
      fontSize: "1.1rem",
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
