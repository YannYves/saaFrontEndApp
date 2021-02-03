import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  grid: {},
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
    fontSize: "1.875rem",
  },
  title: {
    ...theme.typography.featured.title,
    color: theme.palette.primary.main,
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
    </Grid>
  );
}
