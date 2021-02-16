import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { createStyles, Theme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import profilePhoto from "../assets/profile.png";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: 830,
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: 600,
    },
    image: {
      margin: "8px",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    typographyTitle: {
      fontFamily: "monospace",
      fontWeight: "bolder",
      color: "slategrey",
    },
    typographyText: {
      fontFamily: "monospace",
    },
  })
);

const messages = {
  nameTitle: "HI, MY NAME IS",
  name: "Ana Ramos",
  introduction:
    "I'm a biomedical engineer turned full stack developer. \
    I'm a fast learner, adaptable, and self-taught. \
    Although sports aren't my forte, I enjoy nature walks, reading, and music/podcasts. \
    I've lived in Braga, Madrid, and Lisbon, and love exploring new cities as a tourist or local.\
    In my free time, I enjoy building Legos and spending time with my pets. \
    I'm driven, always seeking growth, and strive to make a positive impact.",
};

export const PersonalInfo = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid
        item
        xs={6}
        sm
        container
        style={{ width: "150%" }}
        alignItems="center"
      >
        <Grid item xs container direction="column" spacing={1}>
          <Grid item xs>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <RemoveIcon fontSize="large" style={{ color: "slategrey" }} />
              <Typography
                variant="h5"
                gutterBottom
                className={classes.typographyTitle}
              >
                {messages.nameTitle}
              </Typography>
            </div>
            <Typography
              variant="h1"
              gutterBottom
              className={classes.typographyText}
            >
              {messages.name}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography
              variant="body2"
              gutterBottom
              className={classes.typographyText}
            >
              {messages.introduction}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs
          container
          direction="column"
          spacing={1}
          style={{ width: "auto" }}
        >
          <img className={classes.image} alt="complex" src={profilePhoto} />
        </Grid>
      </Grid>
    </Grid>
  );
};
