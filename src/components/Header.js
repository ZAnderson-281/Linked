import React from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  Avatar,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import img from "../imgs/profile.jpg";

const styles = makeStyles((theme) => ({
  nav: {
    backgroundColor: "#fafafa",
    position: "fixed",
  },
  title: {
    color: "#696969",
    flexGrow: 1,
  },
}));
function Header() {
  const classes = styles();

  return (
    <header>
      <AppBar className={classes.nav}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Link
          </Typography>
          <IconButton>
            <Avatar src={img}></Avatar>
          </IconButton>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;
