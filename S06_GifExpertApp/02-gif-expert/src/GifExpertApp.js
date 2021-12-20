// 69, 70, 71, 72, 73

import { useState, Fragment } from "react";

import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

// 69
export const GifExpertApp = ({
  defaultCategories = ["One Punch", "Samurai X", "Dragon Ball"],
}) => {
  // 70

  const [categories, setcategories] = useState(defaultCategories);

  const addCatHandler = (inputValue) => {
    console.log("input value", inputValue);
    setcategories((categories) => [inputValue, ...categories]);
  };
  console.log("categories", categories, defaultCategories);

  return (
    <Fragment>
      <h2> GiftExpertApp</h2>
      <hr />
      <AddCategory addCatHandler={addCatHandler} />

      <ol>
        {categories.map((category, index) => {
          console.log(category);
          return <GifGrid key={category} category={category}></GifGrid>;
          // return <li key={categorie}>{categorie}</li>;
        })}
      </ol>
    </Fragment>
  );
};

// GifExpertApp.propTypes = {};

// GifExpertApp.defaultProps = {};
export default GifExpertApp;
