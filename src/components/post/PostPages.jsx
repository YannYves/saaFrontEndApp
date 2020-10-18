import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useParams, Link } from "react-router-dom";
import { API_URL } from "../../config";

import Skeleton from "@material-ui/lab/Skeleton";
import { Grid, Box, Button, Toolbar } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import PostContentLoader from "../loader/PosstContentLoader";

import Typography from "@material-ui/core/Typography";
import PostAPI from "../../services/PostAPI";

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
  },
}));

function Post() {
  const classes = useStyles();
  const { id } = useParams();
  const [postState, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPost();
    // eslint-disable-next-line
  }, []);

  const fetchPost = async () => {
    const data = await PostAPI.findOnePost(id);
    setPost(data);
    setIsLoading(false);
  };

  return (
    <Grid>
      <Toolbar />
      <Grid spacing={3} container justify="center" className={classes.container} >
        <Grid item xs={10}>
          <Link to="/">
            <Button variant="contained" color="primary">
              <ArrowBackIosIcon margin={3} />
              <Typography>Retour</Typography>
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Grid container spacing={2} justify="center">
            <Grid item md={12}>
              <Typography variant="h2">
                {isLoading ? <PostContentLoader /> : postState.title}
              </Typography>
            </Grid>

            <Grid item md={12}>
              {isLoading ? (
                <Box>
                  <Skeleton variant="rect" width="100%" heigh={400} />
                </Box>
              ) : (
                <Box className="img">
                  <img
                    src={API_URL + postState.image[0].formats.small.url}
                    alt="blabla"
                  />
                </Box>
              )}
            </Grid>
          </Grid>

          <Grid container justify="center" spacing={2} md={12}>
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
  );
}

export default Post;
