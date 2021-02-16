import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import checkImagesMainFeaturedPost from "../../validators/checkImages";

export default function BackgroundImageParallax(image) {
  let backgroundImage;
  if (image.image.length !== 0) {
    backgroundImage = checkImagesMainFeaturedPost(image.image);
  } else {
    backgroundImage = "none";
  }

  const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
      position: "relative",
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundImage: "url(https://source.unsplash.com/random)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    overlay: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: "rgba(0,0,0,.3)",
    },
    mainFeaturedPostContent: {
      position: "relative",
      padding: theme.spacing(3),
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(6),
        paddingRight: 0,
      },
    },
  }));

  const classes = useStyles();

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={backgroundImage}
          alt={image.image.title}
        />
      }
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {image.image.title ? image.image.title : image.image.titre}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {image.image.description}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

BackgroundImageParallax.propTypes = {
  post: PropTypes.object,
};
