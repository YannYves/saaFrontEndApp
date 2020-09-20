import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const MenuAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Le syndicat apicole artésien
          </Typography>
          <Button color="inherit" href="/la-vie-du-syndicat">
            La vie du syndicat
          </Button>
          <Button color="inherit" href="/la-ruher-école">
            Le rucher école
          </Button>
          <Button color="inherit" href="/actualités">
            Actualités
          </Button>
          <Button color="inherit" href="/utile">
            Utile
          </Button>
          <Button color="inherit" href="/petites-annonces">
            petites annonces
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MenuAppBar;
