import { LocationsArraySchema, LocationsT } from '@/models/Cities';
import { CurrentWeatherSchema, CurrentWeatherType } from '@/models/CurrentWeather';
import { ForecastWeatherSchema, ForecastWeatherType } from '@/models/ForecastWeather';

const URL_WEATHER = 'https://api.openweathermap.org';

export type ResultWeather = {
	parsedCurrentWeather: CurrentWeatherType;
	parsedForecastWeather: ForecastWeatherType;
};

export const searchCity = async (city: string): Promise<LocationsT | undefined> => {
	const url = `${URL_WEATHER}/geo/1.0/direct?q=${city}&limit=5&appid=043bdfbea3179a6c077c870e14914534`;

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

export const getWeather = async (coords: string): Promise<ResultWeather | undefined> => {
	const [lat, lon] = coords.split('%2C');
	try {
		const [resCurrent, resForecast] = await Promise.all([
			fetch(
				`${URL_WEATHER}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_KEY}`,
				{ cache: 'no-store' }
			),
			fetch(
				`${URL_WEATHER}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_KEY}`,
				{ cache: 'no-store' }
			)
		]);

		if (!resForecast.ok) throw new Error('Error fetch locations\n');

		const currentResult: CurrentWeatherType = await resCurrent.json();
		const forecastResult: ForecastWeatherType = await resForecast.json();

		const parsedCurrentWeather = CurrentWeatherSchema.parse(currentResult);
		const parsedForecastWeather = ForecastWeatherSchema.parse(forecastResult);

		return { parsedCurrentWeather, parsedForecastWeather };
	} catch (e) {
		if (e instanceof Error) console.log(e.stack);
	}
};
