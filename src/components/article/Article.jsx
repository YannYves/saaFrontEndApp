import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Markdown from "../markdown/Markdown";
import usToFrenchDate from "../../utils/date";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  date: {
    ...theme.palette.date,
    paddingTop: "16px",
    paddingBottom: "16px",
  },
}));

export default function Main(props) {
  console.log(props);
  const classes = useStyles();
  const { posts } = props;
  console.log("Main -> posts", posts);

  return (
    <Grid item xs={12}>
      {posts.map((post) => (
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="h5" className={classes.date}>
            {usToFrenchDate(post.date)}
          </Typography>
          <Markdown className={classes.markdown}>{post.content}</Markdown>
          <Divider />
        </React.Fragment>
      ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
};
