import { render, screen, fireEvent } from "@testing-library/react";
import History from "../components/History";

const mockHistory = ["New York", "Los Angeles", "Chicago"];

test("renders the History component with list of cities", () => {
  render(<History history={mockHistory} fetchWeather={() => {}} />);
  mockHistory.forEach((city) => {
    expect(screen.getByText(city)).toBeInTheDocument();
  });
});

test("calls fetchWeather when a history item is clicked", () => {
  const fetchWeatherMock = jest.fn();
  render(<History history={mockHistory} fetchWeather={fetchWeatherMock} />);

  const cityElement = screen.getByText(/New York/i);
  fireEvent.click(cityElement);
  expect(fetchWeatherMock).toHaveBeenCalledWith("New York");
});