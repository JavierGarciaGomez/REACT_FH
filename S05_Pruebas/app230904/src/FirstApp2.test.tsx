import { render, screen } from "@testing-library/react";
import { FirstApp } from "./FirstApp";

describe("pruebas en <FirstApp />", () => {
  const title = "a Title";

  it("should match the snapshot", () => {
    const { container } = render(
      <FirstApp title={"a Title"} subtitle={"a subtitle"} name={"a name"} />
    );
    expect(container).toMatchSnapshot();
  });
  it("should have an h1 title", () => {
    render(
      <FirstApp title={"a Title"} subtitle={"a subtitle"} name={"a name"} />
    );

    expect(screen.getByText(title)).toBeTruthy();
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  it("should have an h1 title. Selecting element by id", () => {
    render(
      <FirstApp title={"a Title"} subtitle={"a subtitle"} name={"a name"} />
    );
    expect(screen.getByTestId("test-title").innerHTML).toContain(title);
  });
});
