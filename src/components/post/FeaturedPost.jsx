import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid, Divider } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  grid: {
    backgroundColor: "#eeeeee",
    borderRadius: "5px",
    margin: "16px",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
    height: 140,
  },

  text: {
    ...theme.typography.featured.text,
    color: theme.palette.common.subTitleColor,
    fontWeight: "380",
    fontSize: "1.875rem",
    marginBottom: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.3em",
    },
  },
  title: {
    ...theme.typography.featured.title,
    textTransform: "capitalize",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2em",
    },
  },
}));

export default function FeaturedPost({ post }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.grid}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.title}
        >
          {/* quick fix typo in resource collection api */}
          {post.title ? post.title : post.titre}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="h4"
          gutterBottom
          className={classes.text}
        >
          {post.description ? post.description : ""}
        </Typography>
      </CardContent>
      <Divider light />
    </Grid>
  );
}
