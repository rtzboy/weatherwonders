import { z } from 'zod';
import { MainSchema, RainSchema, WeatherSchema, WindSchema } from './CurrentWeather';

const CitySchema = z.object({
	id: z.number(),
	coord: z.object({ lat: z.number(), lon: z.number() }),
	country: z.string(),
	name: z.string(),
	population: z.number(),
	sunrise: z.number(),
	sunset: z.number(),
	timezone: z.number()
});

const ListSchema = z.object({
	clouds: z.object({ all: z.number() }),
	dt_txt: z.string(),
	dt: z.number(),
	main: MainSchema,
	pop: z.number(),
	rain: RainSchema.optional(),
	sys: z.object({ pod: z.string() }),
	visibility: z.number(),
	weather: z.array(WeatherSchema),
	wind: WindSchema
});

export const ForecastWeatherSchema = z.object({
	city: CitySchema,
	cnt: z.number(),
	list: z.array(ListSchema),
	message: z.number(),
	cod: z.string()
});

export type ForecastWeatherType = z.infer<typeof ForecastWeatherSchema>;
