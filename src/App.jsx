import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import Navbar from './components/Navbar';
import Forecast from './components/Forecast';

const fetchWeather = async (cityName, apiKey) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
  );
  if (!res.ok) throw new Error('City not found');
  return res.json();
};

const fetchForecast = async (cityName, apiKey) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`
  );
  if (!res.ok) throw new Error('Failed to fetch forecast');
  return res.json();
};

function App() {
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [history, setHistory] = useState(() => {
    const stored = localStorage.getItem('weatherHistory');
    return stored ? JSON.parse(stored) : [];
  });
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleSearch = async (cityName) => {
    setLoading(true);
    setError('');
    setWeather(null);
    setForecast(null);

    try {
      const [weatherData, forecastData] = await Promise.all([
        fetchWeather(cityName, apiKey),
        fetchForecast(cityName, apiKey),
      ]);

      setWeather(weatherData);
      setForecast(forecastData);
      setCity(cityName);

      const newHistory = [cityName, ...history.filter((c) => c !== cityName)].slice(0, 5);
      setHistory(newHistory);
      localStorage.setItem('weatherHistory', JSON.stringify(newHistory));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 dark:bg-gray-900 text-black dark:text-white transition-all duration-300 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 my-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Weather Dashboard</h1>
        <SearchBar onSearch={handleSearch} />

        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}
        <div className="mt-10">
          <Navbar history={history} onHistoryClick={handleSearch} />
        </div>
        {weather && (
          <div className="mt-6 flex justify-center">
            <WeatherCard data={weather} onRefresh={() => handleSearch(city)} />
          </div>
        )}
        {forecast && <Forecast data={forecast} />}

        
      </div>
    </div>
  );
}

export default App;
