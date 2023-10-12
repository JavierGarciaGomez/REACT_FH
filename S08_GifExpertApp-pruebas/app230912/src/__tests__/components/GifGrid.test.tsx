import { render, screen } from "@testing-library/react";
import { Mock, describe, expect, test, vi } from "vitest";
import { GifGrid } from "../../components";
import { useFetchGifs } from "../../hooks/useFetchGifs";

vi.mock("../../hooks/useFetchGifs");

describe("Tests on GifGrid", () => {
  const category = "Morgana";
  test("It should show the loading initialy", () => {
    (useFetchGifs as Mock).mockReturnValue({ gifs: [], loading: true });
    render(<GifGrid category={category} />);

    expect(true).toBeTruthy();
    expect(screen.getByText("Loading..."));
    expect(screen.getByText(category));
  });

  test("It should show items when images are loaded with useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "https://localhost/saitama.jpg",
      },
      {
        id: "123",
        title: "Saitama",
        url: "https://localhost/saitama.jpg",
      },
    ];

    (useFetchGifs as Mock).mockReturnValue({
      gifs: gifs,
      loading: false,
    });
    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
