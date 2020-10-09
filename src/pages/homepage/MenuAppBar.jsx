import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button, Grid, Slide, useScrollTrigger } from "@material-ui/core";

import { Burger, Menu } from "../../components/menuBurger";
import { useOnClickOutside } from "../../utils/hooks";
import FocusLock from "react-focus-lock";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styledComponents/theme";

function HideOnScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolBar: {
    minHeight: "70px",
  },

  item: {
    textTransform: "capitalize",
  },
  itemContainer: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  title: {
    textTransform: "capitalize",
    [theme.breakpoints.down("md")]: {
      textAlign: "right",
    },
  },
  titleContainer: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-end",
    },
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-start",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const MenuAppBar = (props) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));
  const classes = useStyles();

  // TODO Refacto => This component one time in app.js

  return (
    <Grid nowrap className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className={classes.toolBar}>
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
            <Grid container wrap="nowrap" className={classes.titleContainer}>
              <Button color="inherit" href="/" item>
                <Typography variant="h6" noWrap className={classes.title} item>
                  Le syndicat apicole artésien
                </Typography>
              </Button>
            </Grid>

            <Grid
              justify="flex-end"
              container
              wrap="nowrap"
              className={classes.itemContainer}
            >
              <Button color="inherit" href="/la-vie-du-syndicat" item>
                <Typography className={classes.item} variant="h6" noWrap>
                  La vie du syndicat
                </Typography>
              </Button>
              <Button color="inherit" href="/le-rucher-école" item>
                <Typography className={classes.item} variant="h6" noWrap>
                  Le rucher école
                </Typography>
              </Button>
              <Button color="inherit" href="/news" item>
                <Typography className={classes.item} variant="h6" noWrap>
                  Actualités
                </Typography>
              </Button>
              <Button color="inherit" href="/utile" item>
                <Typography className={classes.item} variant="h6" noWrap>
                  Utile
                </Typography>
              </Button>
              <Button color="inherit" href="/petites-annonces" item>
                <Typography className={classes.item} variant="h6" noWrap>
                  petites annonces
                </Typography>
              </Button>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Grid>
  );
};

export default MenuAppBar;
