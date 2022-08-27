import axios from "axios";
import React, { useEffect, useState } from "react";

const api_key = process.env.REACT_APP_WEATHER_API_KEY;

const Weather = ({ country }) => {
	const [weather, setWeather] = useState([]);

	let weather_response = `https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&units=metric&appid=${api_key}`;

	useEffect(() => {
		console.log("link api", weather_response);

		axios.get(weather_response).then((response) => {
			setWeather(response.data);
		});
	}, [weather_response]);

	console.log("weather", weather);

	return (
		<div>
			<h2>Weather in {country.capital[0]}</h2>
			<p>Temperature {weather.main.temp} Celcius</p>
			<img
				src={`http://openweathermap.org/img/wn/${weather.weather.icon}@2x.png`}
				alt={`${weather.weather.description} icon`}
			></img>
			<p>wind {weather.wind.speed} m/s</p>
		</div>
	);
};

export default Weather;
