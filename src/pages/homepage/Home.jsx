import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Container, Divider } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Skeleton from "@material-ui/lab/Skeleton";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import FeaturedPost from "../../components/post/FeaturedPost";
import CardPost from "../../components/post/CardPost";
import Sidebar from "../../components/sidebar/Sidebar";
import Article from "../../components/article/Article";
import PostAPI from "../../services/PostAPI";
import Footer from "../../components/footer/Footer";
import Carousel from "../../components/carousel/Carousel";
import BackgroundImageParallax from "../../components/background-image-parallax/Background-image-parallax";
import Fade from "react-reveal/Fade";

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
  const [mainFeaturedPost, setMainFeaturedPost] = useState([]);
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [sidebar, setSidebar] = useState([]);
  const [articles, setArticles] = useState([]);
  const [carouselContent, setCarouselContent] = useState([]);

  const findAllMainFeaturedPost = async () => {
    const data = await PostAPI.findAllMainFeaturedPost();
    setMainFeaturedPost(data);
    setIsLoading(false);
  };

  const findAllFeaturedPost = async () => {
    const data = await PostAPI.findAllFeaturedPost();
    setFeaturedPosts(data);
    setIsLoading(false);
  };

  const findAllPost = async () => {
    const data = await PostAPI.findAllPost();
    setPosts(data);
    setIsLoading(false);
  };

  const findAllRegularArticles = async () => {
    const data = await PostAPI.findAllRegularArticles();
    setArticles(data);
    setIsLoading(false);
  };

  const findAllSideBar = async () => {
    const data = await PostAPI.findAllSideBar();
    setSidebar(data);
    setIsLoading(false);
  };

  const fetchCarousel = async () => {
    const data = await PostAPI.fetchCarousel();
    setCarouselContent(data);
    setIsLoading(false);
  };

  useEffect(() => {
    findAllMainFeaturedPost();
    findAllFeaturedPost();
    findAllPost();
    findAllRegularArticles();
    findAllSideBar();
    fetchCarousel();
    console.log(
      "I'm looking for a job as a React / Node.js developer! If you 're interested please contact me at : https://www.linkedin.com/in/yann-dubois-88665992/ "
    );
  }, []);

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Toolbar id="back-to-top-anchor" />
        <main>
          {isLoading ? (
            <React.Fragment>
              <Skeleton height={150} width="100%">
                <div style={{ marginBottom: "2rem" }} />
              </Skeleton>
            </React.Fragment>
          ) : (
            mainFeaturedPost.map((image) => (
              <BackgroundImageParallax image={image} />
            ))
          )}

          <Grid spacing={4}>
            {isLoading ? (
              <Grid container>
                <Box width="55ww" margin={2}>
                  <Skeleton variant="rect" width={210} height={118} />
                  <Skeleton width={60} />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </Box>
              </Grid>
            ) : (
              featuredPosts.map((post) => (
                <Fade bottom>
                  <FeaturedPost key={post.title} post={post} />
                </Fade>
              ))
            )}
          </Grid>

          <Grid container spacing={4}>
            {isLoading ? (
              <Box width="55ww" margin={2}>
                <Skeleton variant="rect" width={210} height={118} />
                <Skeleton width={60} />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </Box>
            ) : (
              posts.map((post) => (
                <Grid item margin={2} xs={12} sm={6} lg={4}>
                  <Fade bottom>
                    <CardPost post={post} key={post.id} link="post" />
                  </Fade>
                </Grid>
              ))
            )}
            {isLoading ? (
              <Box width="55w" margin={2}>
                <Skeleton variant="rect" width={210} height={118} />
                <Skeleton width={60} />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </Box>
            ) : (
              sidebar.map((post) => (
                <Grid item margin={2} xs={12} sm={6} lg={4}>
                  <Fade bottom>
                    <Sidebar post={post} key={post.id} />
                  </Fade>
                </Grid>
              ))
            )}
            <Divider light width="100%" margin={4} />
            {isLoading ? (
              <Box width="100vw" margin={2}>
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
              carouselContent.map((data) => (
                <Grid item xs={12}>
                  <Fade bottom>
                    <Carousel data={data} />
                  </Fade>
                </Grid>
              ))
            )}
          </Grid>

          <Grid container spacing={5} className={classes.mainGrid}>
            {isLoading ? (
              <Box width="100vw" margin={2}>
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
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
        <Footer />
      </Container>
    </React.Fragment>
  );
}
