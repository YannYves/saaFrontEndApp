import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Markdown from "./Markdown";

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { posts } = props;

  return (
    <Grid item xs={12}>
      {posts.map((post) => (
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            {post.title}
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
