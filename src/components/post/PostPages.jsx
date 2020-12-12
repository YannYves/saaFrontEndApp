import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams, Link } from "react-router-dom";
import { API_URL } from "../../config";

import Skeleton from "@material-ui/lab/Skeleton";
import { Grid, Box, Button, Toolbar, CardMedia } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import PostContentLoader from "../loader/PosstContentLoader";
import checkImagesMainFeaturedPost from "../../validators/checkImages";

import Typography from "@material-ui/core/Typography";
import usToFrenchDate from "../../utils/date";

function Post({ api, link }) {
  const { id } = useParams();
  const [postState, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log("postState", postState);

  const useStyles = makeStyles((theme) => ({
    grid: {
      padding: "16px",
    },
    content: {
      padding: "24px",
      marginTop: "24px",
    },
    titleContainer: {
      width: "100vw",
    },
    title: {
      ...theme.typography.postPage.title,
      padding: "24px",
      marginTop: "24px",
      textAlign: "center",
    },
    media: {
      width: "auto",
      maxWidth: "80vw",
    },
    button: {
      ...theme.typography.button,
    },
    date: {
      ...theme.palette.date,
      paddingTop: "16px",
      paddingBottom: "16px",
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    fetchPost();
    // eslint-disable-next-line
  }, []);

  const fetchPost = async () => {
    const data = await api(id);
    setPost(data);
    setIsLoading(false);
  };

  return (
    <Grid container className={classes.grid}>
      <Grid xs={12} item>
        <Toolbar />
        <Grid
          spacing={3}
          container
          justify="center"
          className={classes.container}
        >
          <Grid item xs={12}>
            <Link to={link}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                size="medium"
                startIcon={<ArrowBackIosIcon />}
              >
                Retour
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={4} justify="center">
              <Grid item md={12} className={classes.titleContainer}>
                <Typography variant="h2" className={classes.title}>
                  {isLoading ? <PostContentLoader /> : postState.title}
                </Typography>
              </Grid>

              <Grid item md={12}>
                {isLoading ? (
                  <Box>
                    <Skeleton variant="rect" width="100%" heigh={400} />
                  </Box>
                ) : (
                  <Grid
                    container
                    alignItems="center"
                    justify="center"
                    spacing={2}
                    xs={12}
                    maxWidth="lg"
                  >
                    <CardMedia
                      className={classes.media}
                      component="img"
                      alt="a post"
                      image={API_URL + checkImagesMainFeaturedPost(postState)}
                      title="a post"
                    />
                  </Grid>
                )}
              </Grid>
            </Grid>
            <Grid
              container
              justify="center"
              spacing={4}
              md={12}
              className={classes.content}
            >
              <Grid item>
                <Typography>
                  {isLoading ? (
                    <Box>
                      <Skeleton variant="text" />
                      <Skeleton variant="text" />
                      <Skeleton variant="text" />
                    </Box>
                  ) : (
                    postState.content
                  )}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Post;
