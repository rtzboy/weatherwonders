import { z } from 'zod';

export const RainSchema = z.record(z.number());

export const MainSchema = z.object({
	feels_like: z.number(),
	grnd_level: z.number().optional(),
	humidity: z.number(),
	pressure: z.number(),
	sea_level: z.number().optional(),
	temp_max: z.number(),
	temp_min: z.number(),
	temp: z.number(),
	temp_kf: z.number().optional()
});

const SysSchema = z.object({
	type: z.number().optional(),
	id: z.number().optional(),
	country: z.string(),
	sunrise: z.number(),
	sunset: z.number()
});

export const WeatherSchema = z.object({
	id: z.number(),
	main: z.string(),
	description: z.string(),
	icon: z.string()
});

export const WindSchema = z.object({
	speed: z.number(),
	deg: z.number(),
	gust: z.number().optional()
});

export const CurrentWeatherSchema = z.object({
	base: z.string(),
	clouds: z.object({ all: z.number() }),
	cod: z.number(),
	coord: z.object({ lon: z.number(), lat: z.number() }),
	dt: z.number(),
	id: z.number(),
	main: MainSchema,
	name: z.string(),
	rain: RainSchema.optional(),
	sys: SysSchema,
	timezone: z.number(),
	visibility: z.number(),
	weather: z.array(WeatherSchema),
	wind: WindSchema
});

export type CurrentWeatherType = z.infer<typeof CurrentWeatherSchema>;

export type RainType = z.infer<typeof RainSchema>;
