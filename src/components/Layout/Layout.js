import React from "react";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = props => (
  <React.Fragment>
    {/* <div> Toolbar, SideDrawer, Backdrop</div> */}
    <Toolbar />
    <SideDrawer />
    <main className={classes.Content}>{props.children}</main>
  </React.Fragment>
);

export default layout;
