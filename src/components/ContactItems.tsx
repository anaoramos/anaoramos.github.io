import React from "react";
import { createStyles, makeStyles, Theme, IconButton } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

interface SocialIconButtonProps {
  icon: React.ElementType;
  link: string;
  size: "medium" | "small" | undefined;
}

const SocialIconButton: React.FC<SocialIconButtonProps> = ({
  icon: Icon,
  link,
  size,
}) => (
  <IconButton target="_blank" href={link} size={size}>
    <Icon />
  </IconButton>
);

export const ContactItems: React.FC = () => {
  const classes = useStyles();

  const socialMediaLinks = {
    linkedin: "https://www.linkedin.com/in/anaforamos",
    github: "https://www.github.com/anaoramos",
    email: "mailto:anaforamos@gmail.com",
  };

  return (
    <div className={classes.paper}>
      <SocialIconButton
        icon={LinkedInIcon}
        link={socialMediaLinks.linkedin}
        size="small"
      />
      <SocialIconButton
        icon={GitHubIcon}
        link={socialMediaLinks.github}
        size="small"
      />
      <SocialIconButton
        icon={EmailIcon}
        link={socialMediaLinks.email}
        size="small"
      />
    </div>
  );
};
