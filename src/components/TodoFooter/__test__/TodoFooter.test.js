import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("todo footer", () => {
  it("should render the correct amount of tasks", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={4} />);
    const paragraphElement = screen.getByText(/4 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it("should render the 'task' instead of 'tasks' when there is only one task", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
  });
});

/*
it("should be a paragraph tag", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  const paragraphElement = screen.getByText(/5 tasks left/i);
  expect(paragraphElement).toBeTruthy();
});

it("should be visible", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  const paragraphElement = screen.getByText(/5 tasks left/i);
  expect(paragraphElement).toBeVisible();
});
*/
