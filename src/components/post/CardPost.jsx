import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { API_URL } from "../../config";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import usToFrenchDate from "../../utils/date";
import checkImagesMainFeaturedPost from "../../validators/checkImages";

const useStyles = makeStyles((theme) => ({
  link: {
    ...theme.typography.card.link,
    color: theme.palette.secondary.main,
  },
  text: {
    ...theme.typography.card.text,
    color: theme.palette.primary.main,
  },
  title: {
    ...theme.typography.card.title,
    color: theme.palette.primary.main,
  },
  root: {
    maxWidth: 345,
    margin: "0 auto",
  },
  date: {
    ...theme.palette.date,
    paddingTop: "16px",
    paddingBottom: "16px",
  },
  media: {
    height: 140,
  },
}));

export default function CardPost({ post, link }) {
  const frenchDate = usToFrenchDate(post.date);

  const classes = useStyles();
  const imageUrl = checkImagesMainFeaturedPost(post);

  return (
    <Grid item xs={12} sm={4} lg={3}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={`${imageUrl}`} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              className={classes.title}
              component="h2"
            >
              {post.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.text}
              component="p"
            >
              {post.content.slice(0, 50) + "..."}
            </Typography>
            <Typography variant="h5" className={classes.date}>
              {frenchDate}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/${link}/${post.id}`}>
            <Button size="small" className={classes.link}>
              En savoir plus
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}
