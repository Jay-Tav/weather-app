# 🌍 Global Weather App

### **A React & TypeScript-based Weather Application using WeatherStack API**

## 📌 **Overview**
The **Global Weather App** is a modern web application that provides real-time weather updates for cities worldwide. It is built with **React, TypeScript, Redux, Jest, and SCSS**, using the **WeatherStack API** to fetch live weather data.

## 🚀 **Features**
✅ **Search Weather**: Enter a city name to get real-time weather updates.
✅ **Detailed Weather Data**: View temperature, humidity, wind speed, pressure, and more.
✅ **Search History**: Keeps track of previously searched cities.
✅ **Auto-Refresh**: Updates weather data every 5 minutes.
✅ **Unit Testing**: Includes Jest & React Testing Library for robust testing.
✅ **SCSS Styling**: Responsive and modern UI with SCSS.

## 🏗 **Project Structure**
```
global-weather-app/
│── public/                # Static files
│── src/                   # Source code
│   ├── assets/            # Images, icons
│   ├── components/        # UI Components
│   │   ├── Header.tsx
│   │   ├── Tagline.tsx
│   │   ├── SearchBox.tsx
│   │   ├── WeatherCard.tsx
│   │   ├── History.tsx
│   │   ├── Footer.tsx
│   ├── styles/            # SCSS styling
│   ├── tests/             # Unit tests
│   ├── WeatherApp.tsx     # Main app component
│── .eslintrc.js           # ESLint configuration
│── jest.config.ts         # Jest configuration
│── tsconfig.json          # TypeScript configuration
│── vite.config.ts         # Vite configuration
│── README.md              # Project documentation
```

This app uses **WeatherStack API** for fetching weather data. Get your API key from:
[WeatherStack API](https://weatherstack.com/)


```

## ⚡ **Installation & Setup**
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-repo/global-weather-app.git
cd global-weather-app
```

### 2️⃣ Install Dependencies
```bash
npm install  # or yarn install
```

### 3️⃣ Start the Application
```bash
npm run dev  # or yarn dev
```

## 🧪 **Running Tests**
This project includes unit tests with Jest & React Testing Library.
```bash
npm test  # or yarn test
```

## 🎨 **Styling**
- SCSS is used for styling.
- The layout is **responsive** and mobile-friendly.

## 🛠 **Tech Stack**
🔹 **Frontend**: React, TypeScript, SCSS  
🔹 **Testing**: Jest, React Testing Library  
🔹 **API**: WeatherStack API  


