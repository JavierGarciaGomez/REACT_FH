import { useState } from "react";

interface AddCategoryProps {
  onAddCategory: (category: string) => void;
}

export const AddCategory: React.FC<AddCategoryProps> = ({ onAddCategory }) => {
  const [inputValue, setinputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setinputValue(event.target.value);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputValue.length < 3) return;
    onAddCategory(inputValue);
    setinputValue("");
  };

  return (
    <form onSubmit={handleSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Search gifs"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};
