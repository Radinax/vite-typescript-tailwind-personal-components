import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "~/views/Home";

test("renders `React App` to the screen", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  );
  const element = screen.getByText("Home");
  expect(element).toBeInTheDocument();
});
