import { LocationsArraySchema, LocationsT } from '@/models/Cities';

export const searchCity = async (city: string): Promise<LocationsT | undefined> => {
	let URL_WEATHER = 'https://api.openweathermap.org';
	let key = '043bdfbea3179a6c077c870e14914534';
	const url = `${URL_WEATHER}/geo/1.0/direct?q=${city}&limit=5&appid=${key}`;

	try {
		const response = await fetch(url);
		if (!response.ok) throw new Error('Error fetch cities\n');

		const citiesResult: LocationsT = await response.json();

		const parsedData = LocationsArraySchema.parse(citiesResult);
		const filterLocations = parsedData.filter(
			(city, idx, arr) => idx === arr.findIndex(elm => elm.lat === city.lat)
		);
		return filterLocations;
	} catch (e) {
		if (e instanceof Error) console.log(e.stack);
	}
};
