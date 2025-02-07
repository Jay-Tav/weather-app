import { useEffect, useState } from "react";
import axios from "axios";
import "./styles/weatherApp.scss";
import WeatherCard from "./components/WeatherCard";
import History from "./components/History";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tagline from "./components/Tagline";
import SearchBox from "./components/Searchbox";

// API Constants
const API_URL = "http://api.weatherstack.com/current";
const API_KEY = "1c9e9b52353329f60f4786f05aadf53e";

function WeatherApp() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState<string[]>([]);

 // Automatically refresh the weather data every 5 minutes for the current location
  useEffect(() => {
    const interval = setInterval(() => {
      if (location) {
        fetchWeather(location);
      }
    }, 300000); // Refresh every 5 minutes

    return () => clearInterval(interval);
  }, [location]);

  // Function to fetch weather data for a given location
  const fetchWeather = async (location: string) => {
    if (!location) return;
    setError(null);
    try {
       // Make an API call to fetch weather data
      const response = await axios.get(API_URL, {
        params: { access_key: API_KEY, query: location },
      });
      if (response.data.error) throw new Error(response.data.error.info);

      const newWeather = {
        city: response.data.location.name,
        country: response.data.location.country,
        temperature: response.data.current.temperature,
        feelslike: response.data.current.feelslike,
        description: response.data.current.weather_descriptions[0],
        icon: response.data.current.weather_icons[0],
        humidity: response.data.current.humidity,
        windSpeed: response.data.current.wind_speed,
        windDirection: response.data.current.wind_dir,
        pressure: response.data.current.pressure,
        localTime: response.data.location.localtime,
      };

      setWeather(newWeather);
      // Add the new city to the search history, ensuring no duplicates
      setHistory((prev) => [...new Set([newWeather.city, ...prev])]);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="weather-app">
      <Header title="Weather App" />
      <div className="main-content">
        <Tagline text="Get real-time weather updates for your favorite cities worldwide!" />
        <SearchBox location={location} setLocation={setLocation} fetchWeather={fetchWeather} />
        {error && <p className="error">{error}</p>}
        <div className="weather-container">
          {weather && <WeatherCard weather={weather} fetchWeather={() => fetchWeather(location)} />}
          {history.length > 0 && <History history={history} fetchWeather={fetchWeather} />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WeatherApp;