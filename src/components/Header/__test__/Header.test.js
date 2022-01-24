import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("renders props on header", () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText("My Header");
    expect(headingElement).toBeInTheDocument();
  });
});

/*
it("Find by text async runs", async () => {
  render(<Header title="My Header" />);
  const headingElement = await screen.findByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

it("Query by text display", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.queryByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

it("Two header displays on the screen", () => {
  render(<Header title="My Header" />);
  const headingElements = screen.getAllByRole("heading");
  expect(headingElements.length).toBe(2);
});
*/
