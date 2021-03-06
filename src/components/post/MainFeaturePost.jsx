import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import checkImagesMainFeaturedPost from "../../validators/checkImages";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: 350,
    [theme.breakpoints.down("xs")]: {
      height: 250,
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },

  description: {
    ...theme.typography.banner.description,
    color: theme.palette.secondary.main,
  },
  text: {
    ...theme.typography.banner.text,
    color: theme.palette.primary.main,
  },
  title: {
    ...theme.typography.banner.title,
    color: theme.palette.primary.main,
  },
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  let imageUrl;
  let backgroundImage;

  if (post.image.length !== 0) {
    imageUrl = checkImagesMainFeaturedPost(post);
    backgroundImage = `url(${imageUrl})`;
  } else {
    backgroundImage = "none";
  }

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{
        backgroundImage,
      }}
    >
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
              className={classes.title}
            >
              {post.title ? post.title : post.titre}
            </Typography>
            <Typography
              variant="h5"
              color="inherit"
              paragraph
              className={classes.description}
            >
              {post.description ? post.description : ""}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
