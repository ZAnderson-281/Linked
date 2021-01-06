import React from "react";
import {
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  nav: {
    height: "7rem",
    backgroundColor: "#fafafa",
    overflowY: "visible",
  },
}));

function BottomNav() {
  const classes = useStyles();
  return (
    <>
      <BottomNavigation className={classes.nav} position="absolute">
        <BottomNavigationAction
          icon={<i className="fas fa-home" style={{ fontSize: "14pt" }}></i>}
          label="Home"
          showLabel={true}
        />
        <BottomNavigationAction
          icon={<i className="fas fa-plus" style={{ fontSize: "14pt" }}></i>}
          label="Post"
          showLabel={true}
        />
        <BottomNavigationAction
          icon={<i className="fas fa-bell" style={{ fontSize: "14pt" }}></i>}
          label="Alerts"
          showLabel={true}
        />
      </BottomNavigation>
    </>
  );
}

export default BottomNav;
