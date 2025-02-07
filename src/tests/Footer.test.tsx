import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

test("renders the Footer component with the correct year", () => {
  const year = new Date().getFullYear();
  render(<Footer />);
  const footerElement = screen.getByText(`© ${year} Weather App. All rights reserved.`);
  expect(footerElement).toBeInTheDocument();
});