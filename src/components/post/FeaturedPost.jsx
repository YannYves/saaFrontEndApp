import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import usToFrenchDate from "../../utils/date";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
    height: 140,
  },
  link: {
    ...theme.typography.featured.link,
    color: theme.palette.secondary.main,
  },
  text: {
    ...theme.typography.featured.text,
    color: theme.palette.primary.main,
  },
  title: {
    ...theme.typography.featured.title,
    color: theme.palette.primary.main,
  },
  date: {
    ...theme.palette.date,
    paddingTop: "16px",
  },
  root: {
    maxWidth: 345,
    margin: "0 auto",
  },
  media: {
    height: 140,
  },
}));

export default function FeaturedPost({ post }) {
  const frenchDate = usToFrenchDate(post.date);
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6}>
      <Card>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.title}
          >
            {post.title ? post.title : ""}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            {post.description ? post.description : ""}
          </Typography>
          <Typography variant="h5" className={classes.date}>
            {frenchDate ? frenchDate : ""}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
