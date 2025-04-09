const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export async function fetchWeather(city) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!res.ok) {
    throw new Error("City not found or API error.");
  }

  return res.json();
}
