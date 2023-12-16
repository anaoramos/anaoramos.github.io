import React, { useState } from "react";
import {
  createStyles,
  Grid,
  Avatar,
  makeStyles,
  Theme,
  Typography,
  Toolbar,
  IconButton,
  Menu,
  Tooltip,
} from "@material-ui/core";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { ContactItems } from "./ContactItems";
import profilePhoto from "../assets/profile.png";
import "../fonts/fonts.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    icon: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
  })
);

export const NavigationBar = () => {
  const classes = useStyles();
  const [anchorProfileMenu, setAnchorProfileMenu] =
    useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorProfileMenu(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorProfileMenu(null);
  };

  const renderProfileMenu = (
    <Menu
      anchorEl={anchorProfileMenu}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={"primary-search-account-menu"}
      keepMounted
      open={Boolean(anchorProfileMenu)}
      onClose={handleProfileMenuClose}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ padding: 20 }}
      >
        <Avatar
          src={profilePhoto}
          style={{ width: 60, height: 60, marginBottom: 20 }}
        />
        <Typography
          gutterBottom
          variant="h5"
          component="h3"
          style={{ fontFamily: "LobsterRegular" }}
        >
          Ana Ramos
        </Typography>
        <ContactItems />
      </Grid>
    </Menu>
  );

  return (
    <Toolbar>
      <Typography variant="h4" style={{ fontFamily: "LobsterRegular" }}>
        an
      </Typography>
      <div className={classes.grow} />
      <Tooltip title="Profile">
        <IconButton
          aria-label="account of current user"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <PersonOutlineIcon fontSize={"large"} />
        </IconButton>
      </Tooltip>
      {renderProfileMenu}
    </Toolbar>
  );
};
