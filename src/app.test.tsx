import App from "./app";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

test("renders `React App` to the screen", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const element = screen.getByText("Home");
  expect(element).toBeInTheDocument();
});
