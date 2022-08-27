import React, { useState } from "react";
import Country from "./Country";
import Weather from "./Weather";

const Button = ({ country, weather }) => {
	const [show, setShow] = useState(false);

	return (
		<>
			<button onClick={() => setShow(!show)}>show</button>
			{show ? (
				<div>
					<Country country={country} />
					<Weather country={country} weather={weather} />
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export default Button;
