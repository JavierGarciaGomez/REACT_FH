// 69, 70, 71, 72, 73

import { useState, Fragment } from "react";

import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

// 69
export const GifExpertApp = ({defaultCategories = []}) => {
  // 70

  const [categories, setCategories] = useState(defaultCategories);

  // const handleAdd = (event) => {
  //   setcategories((categories) => [...categories, "new serie"]);
  // };

  return (
    <Fragment>
      <h2> GiftExpertApp</h2>
      {/* 72, paso función como property */}
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {categories.map((category, index) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </Fragment>
  );
};

// GifExpertApp.propTypes = {};

// GifExpertApp.defaultProps = {};
export default GifExpertApp;
