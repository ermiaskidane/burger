import React, { Component } from "react";
import classes from "./BurgerIngredient.css";
import PropTypes from "prop-types";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={classes.BreadBottom} />;
        break;
      case "bread-top":
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1} />
            <div className={classes.Seeds2} />
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={classes.Meat} />;
        break;
      case "cheese":
        ingredient = <div className={classes.Cheese} />;
        break;
      case "bacon":
        ingredient = <div className={classes.Bacon} />;
        break;
      case "salad":
        ingredient = <div className={classes.Salad} />;
        break;
      default:
        ingredient = null;

      // // another alternative
      // const ingredientChoices = {
      //   "bread-bottom": <div className={classes.BreadBottom} />,
      //   "bread-top": (
      //     <div className={classes.BreadTop}>
      //       <div className={classes.Seeds1} />
      //       <div className={classes.Seeds2} />
      //     </div>
      //   ),
      //   meat: <div className={classes.Meat} />,
      //   cheese: <div className={classes.Cheece} />,
      //   bacon: <div className={classes.Bacon} />,
      //   salad: <div className={classes.Salad} />
      // };
    }

    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};
export default BurgerIngredient;
