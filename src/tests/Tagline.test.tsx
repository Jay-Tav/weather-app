import { render, screen } from "@testing-library/react";
import Tagline from "../components/Tagline";

test("renders the Tagline component with the correct text", () => {
  render(<Tagline text="Get real-time weather updates!" />);
  const taglineElement = screen.getByText(/Get real-time weather updates!/i);
  expect(taglineElement).toBeInTheDocument();
});