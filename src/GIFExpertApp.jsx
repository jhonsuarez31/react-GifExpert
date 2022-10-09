import { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export const GIFExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([ newCategory, ...categories]);
  };
  return (
    <>
      <h1>GIFExpertApp</h1>
      {/*Input*/}

      <AddCategory
        //setCategories={setCategories}
        onNewCategory={(e) => onAddCategory(e)}
      />
      {/*Listo de item*/}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/*Gif Item*/}
    </>
  );
};
