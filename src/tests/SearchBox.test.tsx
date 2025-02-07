import { render, screen, fireEvent } from "@testing-library/react";
import SearchBox from "../components/Searchbox";

test("renders the SearchBox with input and button", () => {
  render(<SearchBox location="" setLocation={() => {}} fetchWeather={() => {}} />);
  const inputElement = screen.getByPlaceholderText(/Enter city.../i);
  const buttonElement = screen.getByText(/Get Weather/i);

  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test("calls setLocation when input changes", () => {
  const setLocationMock = jest.fn();
  render(<SearchBox location="" setLocation={setLocationMock} fetchWeather={() => {}} />);
  const inputElement = screen.getByPlaceholderText(/Enter city.../i);

  fireEvent.change(inputElement, { target: { value: "New York" } });
  expect(setLocationMock).toHaveBeenCalledWith("New York");
});

test("calls fetchWeather when button is clicked", () => {
  const fetchWeatherMock = jest.fn();
  render(<SearchBox location="New York" setLocation={() => {}} fetchWeather={fetchWeatherMock} />);
  const buttonElement = screen.getByText(/Get Weather/i);

  fireEvent.click(buttonElement);
  expect(fetchWeatherMock).toHaveBeenCalledWith("New York");
});