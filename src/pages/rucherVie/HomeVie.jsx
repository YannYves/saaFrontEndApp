import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Grid, Box, Container, Divider } from "@material-ui/core";

import Toolbar from "@material-ui/core/Toolbar";
import Skeleton from "@material-ui/lab/Skeleton";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import CardPost from "../../components/post/CardPost";
import Article from "../../components/article/Article";
import PostAPI from "../../services/PostAPI";
import Footer from "../../components/footer/Footer";
import Carousel from "../../components/carousel/Carousel";
import BackgroundImageParallax from "../../components/background-image-parallax/Background-image-parallax";
import Fade from "react-reveal/Fade";
import Wave from "../../components/wave/Wave";

function ScrollTop(props) {
  const { children } = props;
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
        role='presentation'
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
  const [mainFeaturedPost, setMainFeaturedPost] = useState([]);
  const [posts, setPosts] = useState([]);
  const [articles, setArticles] = useState([]);
  const [carouselContent, setCarouselContent] = useState([]);

  const fetchMainFeaturedPostVie = async () => {
    const data = await PostAPI.fetchMainFeaturedPostVie();
    setMainFeaturedPost(data);
    setIsLoading(false);
  };

  const fetchAllPostVie = async () => {
    const data = await PostAPI.fetchAllPostVie();
    setPosts(data);
    setIsLoading(false);
  };

  const fetchAllRegularArticlesVie = async () => {
    const data = await PostAPI.fetchAllRegularArticlesVie();
    setArticles(data);
    setIsLoading(false);
  };

  const fetchCarouselVie = async () => {
    const data = await PostAPI.fetchCarouselVie();
    setCarouselContent(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMainFeaturedPostVie();
    fetchAllPostVie();
    fetchAllRegularArticlesVie();
    fetchCarouselVie();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Toolbar id='back-to-top-anchor' />
        <main>
          {isLoading ? (
            <React.Fragment>
              <Skeleton height={150} width='100%'>
                <div style={{ marginBottom: "2rem" }} />
              </Skeleton>
            </React.Fragment>
          ) : (
            mainFeaturedPost.map((image, i) => (
              <BackgroundImageParallax image={image} key={i} />
            ))
          )}

          <Grid container spacing={4}>
            {isLoading ? (
              <Box width='65vw' margin={2}>
                <Skeleton variant='rect' width={210} height={118} />
                <Skeleton width={60} />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </Box>
            ) : (
              posts.map((post, i) => (
                <Grid item margin={2} xs={12} sm={6} lg={4}>
                  <Fade bottom>
                    <CardPost
                      post={post}
                      key={i}
                      link='la-vie-du-syndicat/post'
                    />
                  </Fade>
                </Grid>
              ))
            )}
            <Divider light width='100%' margin={4} />
            {isLoading ? (
              <Box width='100vw' margin={2}>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </Box>
            ) : (
              carouselContent.map((data, i) => (
                <Grid item xs={12}>
                  <Fade bottom>
                    <Carousel data={data} key={i} />
                  </Fade>
                </Grid>
              ))
            )}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            {isLoading ? (
              <Box width='100vw' margin={2}>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </Box>
            ) : (
              <Article posts={articles} />
            )}
          </Grid>
        </main>
      </Container>
      <ScrollTop {...props}>
        <Fab color='secondary' size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <Footer />
    </React.Fragment>
  );
}
