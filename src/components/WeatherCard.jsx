import React from 'react';

function WeatherCard({ data, onRefresh }) {
  const { name, main, weather, wind } = data;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl shadow p-6 w-122 text-center transition-transform duration-300 hover:scale-[1.02]">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <button onClick={onRefresh} className="text-sm text-blue-500 hover:underline">Refresh</button>
      </div>
      <img src={iconUrl} alt={weather[0].description} className="mx-auto" />
      <p className="text-xl">{Math.round(main.temp)}°C</p>
      <p className="capitalize">{weather[0].description}</p>
      <div className="flex justify-between mt-4 text-sm">
        <span>Humidity: {main.humidity}%</span>
        <span>Wind: {wind.speed} km/h</span>
      </div>
    </div>
  );
}

export default WeatherCard;