import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import { Grid, Box, Paper, Container } from "@material-ui/core";
import PostContentLoader from "../loader/PosstContentLoader";
import Typography from "@material-ui/core/Typography";
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import "./Carousel.css";
import usToFrenchDate from "../../utils/date";
import carouselHelper from "../../utils/carouselHelper";

function Carousel({ data }) {
  const [isLoading, setIsLoading] = useState(true);
  const carouselImages = carouselHelper(data);

  const useStyles = makeStyles((theme) => ({
    date: {
      ...theme.palette.date,
      padding: "0 0 1rem 1rem  ",
    },
    content: {
      ...theme.typography.carousel.text,
      padding: "0 0rem 1rem 1rem ",
      marginTop: "4rem",
    },
    titleContainer: {
      width: "100vw",
    },
    title: {
      ...theme.typography.carousel.title,
      textTransform: "capitalize",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2rem",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.5rem",
      },
    },
    media: {
      width: "auto",
      maxWidth: "100%",
      marginTop: theme.spacing(3),
    },
    grid: {
      padding: "8px",
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    fetchPost();
    // eslint-disable-next-line
  }, []);

  const fetchPost = async () => {
    setIsLoading(false);
  };

  return (
    <Container maxWidth="lg" className={classes.grid}>
      <Grid container className={classes.grid} justify="center" maxWidth="lg">
        <Paper className={classes.media}>
          <Grid xs={12} item>
            <Grid
              spacing={3}
              container
              justify="center"
              className={classes.container}
            >
              <Grid item xs={12}>
                <Grid container spacing={4} justify="center">
                  <Grid item md={12} className={classes.titleContainer}>
                    <Typography variant="h2" className={classes.title}>
                      {isLoading ? <PostContentLoader /> : data.title}
                    </Typography>
                  </Grid>
                  <Grid container md={12} justify="center">
                    {isLoading ? (
                      <Box>
                        <Skeleton variant="rect" width="100%" heigh={400} />
                      </Box>
                    ) : (
                      <Grid
                        container
                        justify="center"
                        spacing={2}
                        maxWidth="lg"
                        xs={10}
                        className={classes.media}
                      >
                        <ImageGallery
                          stopPropagation={true}
                          showFullscreenButton={false}
                          showPlayButton={false}
                          items={carouselImages}
                          originalAlt={data.title}
                        />
                      </Grid>
                    )}
                  </Grid>
                </Grid>
                <Grid container spacing={1} md={12} className={classes.content}>
                  <Grid item>
                    {isLoading ? (
                      <Box>
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                      </Box>
                    ) : (
                      <Box>
                        <Typography className={classes.content}>
                          {data.content}
                        </Typography>
                      </Box>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h5" className={classes.date}>
                      {usToFrenchDate(data.date)
                        ? usToFrenchDate(data.date)
                        : ""}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Container>
  );
}

export default Carousel;
