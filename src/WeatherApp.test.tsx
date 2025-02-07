import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import WeatherApp from './WeatherApp'
import "@testing-library/jest-dom";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const API_URL = "http://api.weatherstack.com/current";

describe("WeatherApp", () => {
  const mockWeatherResponse = {
    location: {
      name: "New York",
      country: "United States of America",
      localtime: "2025-02-06 12:00",
    },
    current: {
      temperature: 15,
      feelslike: 14,
      weather_descriptions: ["Sunny"],
      weather_icons: ["https://example.com/sunny.png"],
      humidity: 60,
      wind_speed: 10,
      wind_dir: "NW",
      pressure: 1015,
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("displays an error message when API call fails", async () => {
    axios.get.mockRejectedValueOnce(new Error("Failed to fetch weather data"));
  
    render(<WeatherApp />);
  
    // Simulate user input and search
    fireEvent.change(screen.getByPlaceholderText(/Enter city.../i), {
      target: { value: "Invalid City" },
    });
    fireEvent.click(screen.getByText(/Get Weather/i));
  
    // Wait for error message
    const errorMessage = await screen.findByText(/Failed to fetch weather data/i);
  
    // Assertions
    expect(errorMessage).toBeInTheDocument();
  });

  test("renders the Header, Tagline, SearchBox, and Footer", () => {
    render(<WeatherApp />);
    expect(screen.getByText(/Weather App/i)).toBeInTheDocument(); 
    expect(screen.getByText(/Get real-time weather updates for your favorite cities worldwide!/i)).toBeInTheDocument(); 
    expect(screen.getByPlaceholderText(/Enter city.../i)).toBeInTheDocument(); 
    expect(screen.getByText(/© \d{4} Weather App. All rights reserved./i)).toBeInTheDocument();
  });

  test("fetches weather data and displays WeatherCard on valid search", async () => {
    const mockWeatherData = {
      location: { name: "Paris", country: "France", localtime: "2025-02-06 14:00" },
      current: {
        temperature: 18,
        feelslike: 17,
        weather_descriptions: ["Clear Sky"],
        weather_icons: ["https://example.com/icon.png"],
        humidity: 60,
        wind_speed: 15,
        wind_dir: "NE",
        pressure: 1015,
      },
    };
  
    axios.get.mockResolvedValueOnce({ data: mockWeatherData });
  
    render(<WeatherApp />);
  
    // Simulate user input and search
    fireEvent.change(screen.getByPlaceholderText(/Enter city.../i), {
      target: { value: "Paris" },
    });
    fireEvent.click(screen.getByText(/Get Weather/i));
  
    // Wait for WeatherCard to appear
    const weatherCard = await screen.findByText(/Paris, France/i);
  
    // Assertions
    expect(weatherCard).toBeInTheDocument();
    expect(screen.getByText(/18°C/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Clear Sky/i)).toBeInTheDocument();
  });
});