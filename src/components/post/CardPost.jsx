import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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
  },
  title: {
    ...theme.typography.card.title,
    color: theme.palette.common.titleColor,
    textDecoration: "underline",
    marginBottom: "0.5rem",
  },
  root: {
    maxWidth: 345,
    margin: "0 auto",
    paddingBottom: "0rem",
  },
  date: {
    paddingBottom: "0.5rem",
  },
  media: {
    height: 140,
  },
  item: {
    padding: "16px",
  },
}));

export default function CardPost({ post, link }) {
  const frenchDate = usToFrenchDate(post.date);
  const classes = useStyles();
  let imageUrl;
  post.image.length !== 0
    ? (imageUrl = checkImagesMainFeaturedPost(post))
    : (imageUrl = "");

  return (
    <Grid item className={classes.item} spacing={4}>
      <Card className={classes.root} disableRipple>
        <CardMedia
          className={classes.media}
          image={`${imageUrl}`}
          title={post.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            className={classes.title}
            component="h2"
          >
            {post.title ? post.title : ""}
          </Typography>
          <Typography
            className={classes.date}
            component="p"
            variant="body2"
            color="textSecondary"
          >
            {frenchDate}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.text}
            component="p"
          >
            {post.content ? post.content.slice(0, 50) + "..." : ""}
          </Typography>
        </CardContent>
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
