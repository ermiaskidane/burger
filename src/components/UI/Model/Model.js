// import React from "react";

// import classes from "./Model.css";

// const model = props => <div className={classes.Modal} style={{transform: props.show ? "translateY(0)": "translateY(-100vh), opacity: props.show ? "1" : "0" }}>{props.children}</div>

// export default model;

import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Model.css";

const model = props => (
  <React.Fragment>
    <Backdrop show={props.show} clicked={props.modelClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
    >
      {props.children}
    </div>
  </React.Fragment>
);

export default model;
                                                             
                                                          
