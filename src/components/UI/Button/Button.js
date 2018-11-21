import React from "react";
import classes from "./Button.css";
const button = props => (
  <button
    className={[classes.Button, classes[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;

//############ ANOTHER WAY TO DEAL WITH DAYNAMIC CSS ############
//############ THE ABOVE METHOD IS MORE PREFERABLE   ############
// import React from "react";
// import classes from "./Button.css";

// const Button = (props) => {
//   return (
//     <button
//       style={props.colorBlack ? {color: 'black'} : null}
//       className={[classes.Button, classes[props.btnType]].join(' ')}
//       onClick={props.clicked}>
//       {props.children}
//     </button>
//   );
// };

// export default Button;

// // this is in OrderSummery
// <Button btnType="Danger" colorBlack clicked={props.cancel}>CANCEL</Button>
//       <Button btnType="Success" clicked={props.continue}>CONTINUE</Button>
