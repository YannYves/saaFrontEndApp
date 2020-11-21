import React, { useRef, useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Button, Grid, Slide, useScrollTrigger } from "@material-ui/core";
import { ThemeProvider } from "styled-components";

import { Burger, Menu } from "../menuBurger";
import { useOnClickOutside } from "../../utils/hooks";
import FocusLock from "react-focus-lock";

import { theme } from "../../styledComponents/theme";

import { Link } from "react-router-dom";

function HideOnScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  tab: {
    ...theme.typography.tab,
    minWidth: "1rem",
    marginLeft: "25px",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  firstTab: {
    ...theme.typography.tab,
    minWidth: "1rem",
    padding: "1rem",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },

    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-end",
      width: "auto",
    },

    display: "flex",
  },

  secondTab: {
    ...theme.typography.tab,
    minWidth: "1rem",
    marginLeft: "25px",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: "auto",
    },
  },

  containerTabs: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  container: {
    width: "100vw",
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-end",
    },

    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  },
  fullWidth: {
    width: "100vw",
  },
}));

const MenuAppBar = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));

  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (
      window.location.pathname === "/la-vie-du-syndicat" &&
      value !== 1
    ) {
      setValue(1);
    } else if (window.location.pathname === "/le-rucher-ecole" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/news" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/utile" && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === "/petites-annonce" && value !== 0) {
      setValue(5);
    }
  }, [value]);

  return (
    <Grid nowrap className={classes.fullWidth}>
      <React.Fragment>
        <ElevationScroll>
          <HideOnScroll {...props}>
            {/* add hide */}
            <AppBar position="fixed" color="secondary">
              <Toolbar disableGutters>
                <Grid className={classes.menuButton}>
                  <ThemeProvider theme={theme}>
                    <FocusLock disabled={!open}>
                      <Burger
                        open={open}
                        setOpen={setOpen}
                        aria-controls={menuId}
                      />
                      <Menu open={open} setOpen={setOpen} id={menuId} />
                    </FocusLock>
                  </ThemeProvider>
                </Grid>

                <Grid container wrap="nowrap" className={classes.container}>
                  <Button
                    container
                    component={Link}
                    to="/"
                    onClick={() => setValue(0)}
                    disableRipple
                    className={classes.containerTabs}
                  ></Button>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    className={classes.firstTab}
                    indicatorColor="primary"
                  >
                    <Tab
                      className={classes.firstTab}
                      component={Link}
                      to="/"
                      label="Acceuil"
                    />
                    <Tab
                      className={classes.secondTab}
                      component={Link}
                      to="/la-vie-du-syndicat"
                      label="La vie du syndicat"
                    />
                    <Tab
                      className={classes.tab}
                      component={Link}
                      to="/le-rucher-ecole"
                      label="Le rucher ecole"
                    />
                    <Tab
                      className={classes.tab}
                      component={Link}
                      to="/news"
                      label="Actualités"
                    />
                    <Tab
                      className={classes.tab}
                      component={Link}
                      to="/utile"
                      label="Utile"
                    />
                    <Tab
                      className={classes.tab}
                      component={Link}
                      to="/petites-annonce"
                      label="Petites annonces"
                    />
                  </Tabs>
                </Grid>
              </Toolbar>
            </AppBar>
          </HideOnScroll>
        </ElevationScroll>
        <Toolbar />
      </React.Fragment>
    </Grid>
  );
};

export default MenuAppBar;
