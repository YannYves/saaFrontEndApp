import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Grid, Box, Container } from "@material-ui/core";
import { GitHubIcon, FacebookIcon, TwitterIcon } from "@material-ui/icons";
import Skeleton from "@material-ui/lab/Skeleton";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Toolbar from "@material-ui/core/Toolbar";

import MainFeaturedPost from "./MainFeaturePost";
import FeaturedPost from "./FeaturedPost";
import CardPost from "./CardPost";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import MainPost from "./MainPost";
import PostAPI from "../../services/PostAPI";

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={classes.backToTop}
      >
        {children}
      </div>
    </Zoom>
  );
}

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  backToTop: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function Blog(props) {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [sidebar, setSidebar] = useState([]);
  const [mainFeaturedPost, setMainFeaturedPost] = useState([]);
  const [mainPost, setMainPost] = useState([]);

  const fetchAllPosts = async () => {
    const data = await PostAPI.findAllPost();
    setPosts(data);
    setIsLoading(false);
  };

  const fetchFeaturedPosts = async () => {
    const data = await PostAPI.findAllFeaturedPost();
    setFeaturedPosts(data);
    setIsLoading(false);
  };

  const fetchMainFeaturedPost = async () => {
    const data = await PostAPI.findAllMainFeaturedPost();
    setMainFeaturedPost(data);
    setIsLoading(false);
  };

  const fetchSidebar = async () => {
    const data = await PostAPI.findAllSideBar();
    setSidebar(data);
    setIsLoading(false);
  };

  const fetchMainPost = async () => {
    const data = await PostAPI.findAllMainPost();
    setMainPost(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAllPosts();
    fetchFeaturedPosts();
    fetchMainFeaturedPost();
    fetchSidebar();
    fetchMainPost();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Toolbar id="back-to-top-anchor" />
        <main>
          {isLoading ? (
            <Box>
              <Skeleton variant="rect" width={210} height={118} />
              <Skeleton width={60} />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </Box>
          ) : (
            mainFeaturedPost.map((post) => (
              <MainFeaturedPost post={post} key={post.title} />
            ))
          )}

          <Grid container spacing={4}>
            {isLoading ? (
              <Box>
                <Skeleton variant="rect" width={210} height={118} />
                <Skeleton width={60} />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </Box>
            ) : (
              featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))
            )}
          </Grid>
          <Grid container spacing={4}>
            {isLoading ? (
              <Box>
                <Skeleton variant="rect" width={210} height={118} />
                <Skeleton width={60} />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </Box>
            ) : (
              posts.map((post) => <CardPost post={post} key={post.id} />)
            )}
            {isLoading ? (
              <Box>
                <Skeleton variant="rect" width={210} height={118} />
                <Skeleton width={60} />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </Box>
            ) : (
              sidebar.map((post) => <Sidebar post={post} key={post.id} />)
            )}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            {isLoading ? (
              <Box>
                <Skeleton variant="rect" width={210} height={118} />
                <Skeleton width={60} />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </Box>
            ) : (
              <MainPost posts={mainPost} />
            )}
          </Grid>
        </main>
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
}
