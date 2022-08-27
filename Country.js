import React from "react";

const Country = ({ country }) => {
	return (
		<div>
			<h1>{country.name.common}</h1>
			<p>capital: {country.capital.join(", ")}</p>
			<p>area: {country.area}</p>
			<h3>languages:</h3>
			<ul>
				{Object.values(country.languages).map((lang) => (
					<li key={`${country}-${lang}`}>{lang}</li>
				))}
			</ul>
			<img src={country.flags.svg} alt={`${country.name.common} flag`} />
		</div>
	);
};

export default Country;
