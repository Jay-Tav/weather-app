import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("renders the Header component with the correct title", () => {
  render(<Header title="Weather App" />);
  const headerElement = screen.getByText(/Weather App/i);
  expect(headerElement).toBeInTheDocument();
});