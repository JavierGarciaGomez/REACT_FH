import { render } from "@testing-library/react";
import { FirstApp } from "./FirstApp";

describe("pruebas en <FirstApp />", () => {
  it("should match the snapshot", () => {
    const { container } = render(
      <FirstApp title={"a Title"} subtitle={"a subtitle"} name={"a name"} />
    );
    expect(container).toMatchSnapshot();
  });
  it("should have an h1 title", () => {
    const title = "a Title";

    const { getByText, container } = render(
      <FirstApp title={"a Title"} subtitle={"a subtitle"} name={"a name"} />
    );
    const h1 = container.querySelector("h1");

    expect(getByText(title)).toBeTruthy();
    expect(h1?.innerHTML).toContain(title);
  });

  it("should have an h1 title. Selecting element by id", () => {
    const title = "a Title";

    const { getByTestId } = render(
      <FirstApp title={"a Title"} subtitle={"a subtitle"} name={"a name"} />
    );
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });
});
