import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it, test, vi } from "vitest";
import { SearchPage } from ".";
import * as ReactRouterDOM from "react-router-dom";

const mockedUseNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const mod: typeof ReactRouterDOM = await vi.importActual("react-router-dom");
  return {
    ...mod,
    useNavigate: () => mockedUseNavigate,
  };
});

describe("tests on <SearchPage/> component", () => {
  test("should match snapshot", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  it("renders search form and initial message", () => {
    render(
      <MemoryRouter initialEntries={["/search?q="]}>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </MemoryRouter>
    );

    // Check if the search input and button are present
    expect(screen.getByPlaceholderText("Search a hero")).toBeTruthy();
    expect(screen.getByText("Search", { selector: "h1" })).toBeTruthy();

    // Check if the initial "Search a hero" message is displayed
    expect(screen.getByText("Search a hero", { exact: false })).toBeTruthy();
  });

  it("renders error message when no heroes found", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=NonExistentHero"]}>
        <SearchPage />
      </MemoryRouter>
    );

    expect(screen.getByText("No hero with", { exact: false })).toBeTruthy();
  });

  it("renders hero cards when heroes are found", () => {
    // Mock getHeroesByName to return some heroes

    render(
      <MemoryRouter initialEntries={["/search?q=Bat"]}>
        <SearchPage />
      </MemoryRouter>
    );

    // Check if the HeroCard components are rendered
    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe("Bat");
    const img = screen.getByRole("img") as HTMLImageElement;
    expect(img.src).toContain("/assets/heros/dc-batman.jpg");
    const alert = screen.getByLabelText("alert-danger");
    expect(alert.style.display).toBe("none");
  });

  it("navigates to the correct URL on search submit", () => {
    render(
      <MemoryRouter initialEntries={["/search?q="]}>
        <SearchPage />
      </MemoryRouter>
    );

    // Type a search query and submit the form
    const input = screen.getByRole("textbox");

    expect(screen.getByText("Search", { selector: "h1" })).toBeTruthy();
    fireEvent.change(input, {
      target: { name: "searchText", value: "superman" },
    });

    const form = screen.getByRole("form");
    fireEvent.submit(form);
    screen.debug();

    expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${"superman"}`);

    // Check if it navigates to the correct URL
  });
});
