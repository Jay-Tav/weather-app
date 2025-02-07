function History({ history, fetchWeather }: { history: string[]; fetchWeather: (city: string) => void }) {
    return (
      <div className="history">
        <h2>Search History</h2>
        <ul>
          {history.map((city, index) => (
            <li key={index} onClick={() => fetchWeather(city)}>
              {city}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  export default History;