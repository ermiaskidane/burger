import React from "react";

import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  //  all we are doing here is change into array
  // populate as mush as the elements value and map them then place them in the markup of
  // burgerIngredient component
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient keys={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      // console.log(arr);
      // console.log(el);
      return arr.concat(el);
    }, []);

  // ALTERNATIVE TO THE REDUCE METHOD WE CAN USE THE flatmap
  // let transformedIngredients = Object.keys(props.ingredients).flatMap(igKey => {
  //   return [...Array(props.ingredients[igKey])].map((_, index) => (
  //     <BurgerIngredient key={igKey + index} type={igKey} />
  //   ));
  // });

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding Ingredients!</p>;
  }

  console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {/* <BurgerIngredient type="salad" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="bacon" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="salad" /> */}
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
