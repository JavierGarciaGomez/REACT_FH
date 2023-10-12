import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../components";

describe("GifGrid ", () => {
  const title = "Saitama";
  const url = "https://one-punch.com/saitama.jpg";
  const id = "anId";

  test("It should match the snapshot", () => {
    const { container } = render(
      <GifGridItem id={id} title={title} url={url} />
    );
    expect(container).toMatchSnapshot();
  });

  test("It should show the img with the url and alt", () => {
    render(<GifGridItem id={id} title={title} url={url} />);
    const { src, alt } = screen.getByRole("img") as HTMLImageElement;
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("It should show the component title", () => {
    render(<GifGridItem id={id} title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
