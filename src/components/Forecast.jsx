import React from 'react';

function Forecast({ data }) {
  const daily = {};

  // Group by day
  data.list.forEach((entry) => {
    const date = new Date(entry.dt_txt).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
    if (!daily[date]) {
      daily[date] = [];
    }
    daily[date].push(entry);
  });

  return (
    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 w-123 mx-auto">
      {Object.entries(daily).map(([date, entries]) => {
        const temps = entries.map(e => e.main.temp);
        const avgTemp = (temps.reduce((a, b) => a + b, 0) / temps.length).toFixed(1);
        const icon = entries[0].weather[0].icon;
        const desc = entries[0].weather[0].description;

        return (
          <div key={date} className="bg-white dark:bg-gray-700 rounded-xl p-4 text-center shadow">
            <p className="font-semibold mb-2">{date}</p>
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={desc} className="mx-auto" />
            <p>{avgTemp}°C</p>
            <p className="capitalize text-sm">{desc}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Forecast;