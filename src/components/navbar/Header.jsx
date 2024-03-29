import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Link as LinkRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarTitleFont: {
    ...theme.typography.card.title,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Link
          component={LinkRouter}
          to='/'
          variant='body2'
          color='inherit'
          align='center'
          className={classes.toolbarTitle}
        >
          <Typography
            component='h2'
            variant='h5'
            noWrap
            className={classes.toolbarTitleFont}
          >
            {title}
          </Typography>
        </Link>
      </Toolbar>
      <Toolbar
        component='nav'
        variant='dense'
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Link
            component={LinkRouter}
            color='inherit'
            noWrap
            key={section.title}
            variant='body1'
            to={`/${section.slug}`}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
