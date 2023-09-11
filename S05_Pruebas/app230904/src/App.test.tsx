import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("pruebas en <App />", () => {
  it("should match the snapshot", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  it("should have a starting value of 100", () => {
    render(<App />);

    expect(screen.getByText("100")).toBeTruthy();
  });

  test("debe de incrementar con el botón +1", () => {
    render(<App value={10} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("11")).toBeTruthy();
  });

  test("debe de decrementar con el botón -1", () => {
    render(<App value={10} />);
    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("7")).toBeTruthy();
  });

  test("debe de funcionar el botón de reset", () => {
    render(<App value={355} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    // fireEvent.click( screen.getByText('Reset') );
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));

    expect(screen.getByText(355)).toBeTruthy();
  });
});
