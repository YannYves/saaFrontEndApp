import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  description: {
    ...theme.typography.sideBar,
    color: theme.palette.secondary.main,
  },
  item: {
    margin: "16px auto",
    maxWidth: "345px",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
    },
  },
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item className={classes.item}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          {post.Linktitle}
        </Typography>
        <Typography className={classes.description}>
          {post.description}
        </Typography>
      </Paper>
    </Grid>
  );
}
