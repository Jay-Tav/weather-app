import { render, screen } from "@testing-library/react";
import WeatherCard from "../components/WeatherCard";

const mockWeather = {
  city: "New York",
  country: "USA",
  temperature: 20,
  feelslike: 18,
  description: "Sunny",
  icon: "https://example.com/icon.png",
  humidity: 50,
  windSpeed: 10,
  windDirection: "NW",
  pressure: 1012,
  localTime: "2025-02-06 14:00",
};

test("renders the WeatherCard with weather details", () => {
  render(<WeatherCard weather={mockWeather} fetchWeather={() => {}} />);
  expect(screen.getByText(/New York, USA/i)).toBeInTheDocument();
  expect(screen.getByText(/20°C/i)).toBeInTheDocument();
  expect(screen.getByText(/Sunny/i)).toBeInTheDocument();
  expect(screen.getByAltText(/Sunny/i)).toBeInTheDocument();
});

test("renders a refresh button", () => {
  const fetchWeatherMock = jest.fn();
  render(<WeatherCard weather={mockWeather} fetchWeather={fetchWeatherMock} />);
  const buttonElement = screen.getByText(/Refresh/i);

  expect(buttonElement).toBeInTheDocument();
});