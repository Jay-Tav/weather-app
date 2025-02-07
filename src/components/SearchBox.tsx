function SearchBox({
    location,
    setLocation,
    fetchWeather,
  }: {
    location: string;
    setLocation: (location: string) => void;
    fetchWeather: (location: string) => void;
  }) {
    return (
      <div className="search">
        <input
          type="text"
          placeholder="Enter city..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={() => fetchWeather(location)}>Get Weather</button>
      </div>
    );
  }
  export default SearchBox;