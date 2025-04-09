# Weather Dashboard

A sleek and responsive weather dashboard built using **React**, **Vite**, and **Tailwind CSS**. This app allows users to search for real-time weather data for any city using the **OpenWeatherMap API**.

---

## Features

- Live city weather using OpenWeatherMap API  
- City search with Enter key or Search button  
- Clean UI with Tailwind CSS  
- Error handling for invalid city names  
- Loader animation while fetching data  

---

## Bonus Features

- Recent search history (up to 5 cities)  
- Light/Dark theme toggle (stored in local storage)  
- Refresh button to update weather  
- Smooth animations with Tailwind transitions  

---

## Tech Stack

- React.js (via Vite)  
- Tailwind CSS  
- OpenWeatherMap API  
- LocalStorage (for recent searches & theme preference)  

---

## Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/weather-dashboard.git
   cd weather-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and add your OpenWeatherMap API key:
   ```bash
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

---

## Deployment

To deploy on Vercel:

1. Push the project to GitHub  
2. Go to [vercel.com](https://vercel.com) and import your GitHub repo  
3. Set the build command to `vite build` and output directory to `dist`  
4. Add the `VITE_OPENWEATHER_API_KEY` as an environment variable  
5. Click deploy