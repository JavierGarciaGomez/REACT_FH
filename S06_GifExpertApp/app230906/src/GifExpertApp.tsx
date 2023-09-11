import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  console.log("RENDERIN GIFT EXPERT");
  const [categories, setcategories] = useState(["Puppy"]);
  const [notification, setNotification] = useState(""); // Notification message state

  // setcategories((currentCategories) => [...currentCategories, category]);

  const onAddCategory = (category: string) => {
    if (categories.includes(category)) {
      setNotification(`Category "${category}" already exists.`);
      return;
    }
    setcategories((currentCategories) => [...currentCategories, category]);
  };

  console.log({ categories });
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onAddCategory={onAddCategory} />

      {notification && <p>{notification}</p>}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
