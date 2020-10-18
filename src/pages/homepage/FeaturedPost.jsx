import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardMedia";

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
  root: {
    maxWidth: 345,
    margin: "0 auto",
  },
  media: {
    height: 140,
  },
}));

export default function FeaturedPost({ post }) {
  console.log("FeaturedPost -> post", post)
  const classes = useStyles();
  
  return (
    <Grid item xs={12} md={6}>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
              {post.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" >
              {post.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        </CardActions>
      </Card>
    </Grid>
  );
}
