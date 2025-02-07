function WeatherCard({ weather, fetchWeather }: { weather: any; fetchWeather: () => void }) {
    return (
      <div className="weather-card">
        <h2>{weather.city}, {weather.country}</h2>
        <p className="local-time">Local Time: {weather.localTime}</p>
        <img src={weather.icon} alt={weather.description} className="weather-icon" />
        <p className="temperature">{weather.temperature}°C</p>
        <p className="description">{weather.description}</p>
        <p className="feels-like">Feels like: {weather.feelslike}°C</p>
        <div className="extra-details">
          <p>💨 Wind: {weather.windSpeed} km/h ({weather.windDirection})</p>
          <p>🌡️ Pressure: {weather.pressure} mb</p>
          <p>💧 Humidity: {weather.humidity}%</p>
        </div>
        <button onClick={fetchWeather}>Refresh</button>
      </div>
    );
  }
  export default WeatherCard;