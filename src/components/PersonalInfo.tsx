import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createStyles, Theme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
      margin: theme.spacing(2),
      textAlign: "center",
    },
    typographyText: {
      fontFamily: "RecoletaRegular",
      padding: theme.spacing(10),
    },
  })
);

const messages = {
  introduction:
    "Hi, I'm Ana - a biomedical engineer turned software developer. \
    My journey is marked by continuous learning, adaptability, and a passion for crafting solutions that resonate with user needs.",
};

export const PersonalInfo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.typographyText}>
        {messages.introduction}
      </Typography>
    </div>
  );
};
