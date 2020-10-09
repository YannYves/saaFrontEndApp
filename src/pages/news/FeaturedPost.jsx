import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardMedia";
import { Link, Button } from "@material-ui/core";

import { API_URL_FEATURED_POST } from "../../config";

const useStyles = makeStyles({
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
});

export default function FeaturedPost({ post }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6}>
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={
              post.image !== null
                ? API_URL_FEATURED_POST + post.image[0].formats.medium.url
                : "..."
            }
            title="Contemplative Reptile"
          />

          {/* {
            TODO: fix image featured post 
          } */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {post.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.content}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/post/${post.id}`}>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}
