import { render, fireEvent, screen } from "@testing-library/react";
import { GifExpertApp } from "../GifExpertApp";
import { describe, expect, it } from "vitest";

describe("GifExpertApp", () => {
  it("renders the GifExpertApp component", () => {
    render(<GifExpertApp />);
    expect(screen.getByText("GifExpertApp")).toBeTruthy();
  });

  it("adds a new category when the 'AddCategory' component is used", () => {
    const { getByRole } = render(<GifExpertApp />);

    // Find the input element and change its value
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "New Category" } });

    // Find the button and click it
    const button = getByRole("button");
    fireEvent.click(button);
    screen.debug();

    // Check if the new category is added to the component
    expect(screen.getByText("New Category")).toBeTruthy();
  });

  it("displays a notification when trying to add an existing category", () => {
    const { getByRole } = render(<GifExpertApp />);

    // Find the input element and change its value to an existing category
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "Puppy" } });

    // Find the button and click it
    const button = getByRole("button");
    fireEvent.click(button);

    // Check if the notification is displayed
    expect(screen.getByText('Category "Puppy" already exists.')).toBeTruthy();
  });
});
