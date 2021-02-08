import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams, Link } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";
import {
  Grid,
  Box,
  Button,
  Toolbar,
  CardMedia,
  Divider,
} from "@material-ui/core";
import PostContentLoader from "../loader/PosstContentLoader";

import checkImagesMainFeaturedPost from "../../validators/checkImages";
import Typography from "@material-ui/core/Typography";
import usToFrenchDate from "../../utils/date";
import Markdown from "../markdown/Markdown";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

function Post({ api, link }) {
  const { id } = useParams();
  const [postState, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
    grid: {
      padding: "16px",
    },
    backToTop: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    content: {
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {
        marginTop: "0.5rem",
      },
      [theme.breakpoints.up("md")]: {
        marginTop: "3em",
      },
    },
    titleContainer: {},
    title: {
      marginBottom: "2rem",
      ...theme.typography.featured.title,
      textTransform: "capitalize",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2.5em",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "2em",
      },
    },
    media: {
      width: "auto",
      padding: "1em 2em",
      maxWidth: "40vw",
      borderRadius: "8%",
      [theme.breakpoints.down("sm")]: {
        maxWidth: "60vw",
        padding: "1em 2em",
        marginTop: "1em",
        borderRadius: "12%",
      },
      [theme.breakpoints.down("xs")]: {
        maxWidth: "80vw",
        padding: "0.5em 2em",
        borderRadius: "14%",
      },
    },
    button: {},
    textButton: {
      color: theme.palette.common.titleColor,
      fontWeight: 500,
    },
    date: {
      textAlign: "center",
      ...theme.palette.date,
      padding: theme.spacing(2),
      fontSize: "1.3rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
        padding: theme.spacing(1),
      },
    },
    markdown: {
      ...theme.typography.body1,
      padding: theme.spacing(3, 0),
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
    <Grid
      container
      alignItem="center"
      direction="row"
      justify="center"
      className={classes.grid}
    >
      <Grid xs={12} md={8} item>
        <Toolbar id="back-to-top-anchor" />
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
                variant="outlined"
                color="secondary"
                size="small"
                startIcon={<ArrowBackIosIcon />}
              >
                <Typography className={classes.textButton}>Retour</Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={4} justify="center">
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
                      maxWidth="lg"
                      alt="a post"
                      image={
                        postState.image.length !== 0
                          ? checkImagesMainFeaturedPost(postState)
                          : ""
                      }
                      title="a post"
                    />
                  </Grid>
                )}
                <Grid
                  container
                  alignItem="center"
                  justify="center"
                  xs={12}
                  className={classes.titleContainer}
                >
                  <Typography
                    xs={12}
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.title}
                  >
                    {isLoading ? (
                      <PostContentLoader />
                    ) : postState.title ? (
                      postState.title
                    ) : (
                      ""
                    )}
                  </Typography>
                  <Grid item xs={12} className={classes.titleContainer}>
                    <Typography variant="h2" className={classes.date}>
                      {isLoading ? (
                        <PostContentLoader />
                      ) : usToFrenchDate(postState.date) ? (
                        usToFrenchDate(postState.date)
                      ) : (
                        ""
                      )}
                    </Typography>
                  </Grid>
                </Grid>
                <Divider variant="middle" />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={4}
              alignItems="center"
              direction="row"
              justify="center"
              className={classes.content}
            >
              <Grid item xs={11} sm={10} spacing={5}>
                <Typography>
                  {isLoading ? (
                    <Box>
                      <Skeleton variant="text" />
                      <Skeleton variant="text" />
                      <Skeleton variant="text" />
                    </Box>
                  ) : postState.content ? (
                    <Markdown
                      className={classes.markdown}
                      key={postState.content.substring(0, 40)}
                    >
                      {postState.content}
                    </Markdown>
                  ) : (
                    ""
                  )}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Grid>
  );
}

export default Post;
