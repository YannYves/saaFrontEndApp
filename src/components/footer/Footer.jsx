import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CodeIcon from "@material-ui/icons/Code";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
    width: "100vw",
  },
  font: {
    ...theme.typography.footer.description,
  },
  container: {
    marginTop: "50px",
    marginBottom: "50px",
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://www.linkedin.com/in/yann-dubois-88665992/"
      >
        Yann Dubois
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Social = () => {
  const classes = useStyles();

  const props = [
    { name: "GitHub", icon: GitHubIcon, link: "https://github.com/YannYves" },
    {
      name: "LinkedIn",
      icon: LinkedInIcon,
      link: "https://www.linkedin.com/in/yann-dubois-88665992/",
    },
    { name: "GitLab", icon: CodeIcon, link: "https://gitlab.com/YannYves" },
  ];
  return (
    <Grid container justify="space-around" className={classes.container}>
      {props.map((network) => (
        <Grid
          xs={4}
          container
          spacing={6}
          alignItems="center"
          direction="row"
          justify="center"
        >
          <Grid item>
            <Grid
              container
              alignItems="center"
              direction="row"
              justify="center"
              spacing={3}
            >
              <Grid item>
                <Link href={network.link}>
                  <network.icon />
                </Link>
              </Grid>
              <Grid item>
                <Link color="inherit" href={network.link}>
                  <Grid item>{network.name}</Grid>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default function Footer(props) {
  const classes = useStyles();
  const title = "Made with <3 by Yann Dubois";

  return (
    <Grid className={classes.footer}>
      <Container>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          className={classes.font}
        >
          {title}
        </Typography>
        <Social className={classes.container} />
        <Copyright />
      </Container>
    </Grid>
  );
}
