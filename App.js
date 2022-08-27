import axios from "axios";
import { useEffect, useState } from "react";
import Button from "./Button";
import Country from "./Country";
import Filter from "./Filter";
import Weather from "./Weather";

const App = () => {
	const [countries, setCountries] = useState([]);
	const [filter, setFilter] = useState("");
	const [filteredCountries, setFilteredCountries] = useState([]);

	// request data of countries
	useEffect(() => {
		axios
			.get("https://restcountries.com/v3.1/all")
			.then((response) => setCountries(response.data));
	}, []);

	// handle filter change
	const handleFilterChange = (e) => {
		setFilter(e.target.value);

		if (e.target.value !== "") {
			let filtered = countries.filter(
				(country) =>
					country.name.common
						.toLowerCase()
						.includes(e.target.value.toLowerCase()) === true
			);
			setFilteredCountries(filtered);
		} else {
			setFilteredCountries([]);
		}
	};

	console.log("c", countries);
	console.log("f", filteredCountries);

	const Countries = ({ countries }) => {
		if (countries.length > 10) {
			return <p>Too many matches, specify another filter</p>;
		} else if (countries.length > 1) {
			return (
				<div>
					{countries.map((country) => (
						<p key={country.area}>
							{country.name.common} <Button country={country} />
						</p>
					))}
				</div>
			);
		} else if (countries.length === 1) {
			return (
				<div>
					<Country country={countries[0]} />
					<Weather country={countries[0]} />
				</div>
			);
		} else if (countries.length === 0 && filter !== "") {
			return (
				<div>
					<p>Country not found</p>
				</div>
			);
		}
	};

	return (
		<div>
			<Filter action={handleFilterChange} />
			<Countries countries={filteredCountries} />
		</div>
	);
};

export default App;
