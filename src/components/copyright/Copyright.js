import React from "react";
import { Grid, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Copyright() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Typography variant="body2" color="textSecondary" align="center">
          Icons made by
        </Typography>
        <Link
          variant="body2"
          color="textSecondary"
          align="center"
          href="https://www.flaticon.com/authors/dinosoftlabs"
          onClick={preventDefault}
        >
          <Typography> DinosoftLabs </Typography>
        </Link>
      </Grid>
    </Grid>
  );
}
