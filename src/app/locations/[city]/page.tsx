import { ResultWeather, getWeather } from '@/lib/api/weather_api';
import Forecast from './_components/Forecast';
import SunRiseSet from './_components/SunRiseSet';
import Temperature from './_components/Temperature';
import Time from './_components/Time';
import Wind from './_components/Wind';

const City = async ({ params }: { params: { city: string } }) => {
	const weather = await getWeather(params.city);

	if (!weather) return <main>Something Happened!</main>;

	const { parsedCurrentWeather, parsedForecastWeather } = weather;

	return (
		<main className='max-w-7xl mx-auto px-4'>
			<section className='flex flex-col md:flex-row gap-4'>
				<Temperature parsedCurrentWeather={parsedCurrentWeather} />
				<div className='flex flex-col flex-1 bg-slate-700/50 rounded-3xl gap-4 p-4'>
					<p>Today&apos;s Highlights</p>
					<div className='flex flex-col gap-4'>
						<div className='flex gap-4 flex-wrap justify-evenly'>
							<Wind parsedCurrentWeather={parsedCurrentWeather} />
							<SunRiseSet
								sunrise={parsedCurrentWeather.sys.sunrise}
								sunset={parsedCurrentWeather.sys.sunset}
								datetime={parsedCurrentWeather.dt}
								timezone={parsedCurrentWeather.timezone}
							/>
							<Time parsedCurrentWeather={parsedCurrentWeather} />
						</div>
						<div className='flex gap-4 flex-wrap justify-evenly'>
							<div className='max-w-[250px] w-full bg-cyan-800/50 rounded-3xl p-4'>
								<div>Humidity</div>
								<p className='text-xl'>{parsedCurrentWeather.main.humidity} %</p>
							</div>
							<div className='max-w-[250px] w-full bg-cyan-800/50 rounded-3xl p-4'>
								<div>Visibility</div>
								<p className='text-xl'>{parsedCurrentWeather.visibility}m</p>
							</div>
							<div className='max-w-[250px] w-full bg-cyan-800/50 rounded-3xl p-4'>
								<div>Feels Like</div>
								<p className='text-xl'>
									{(parsedCurrentWeather.main.feels_like - 273).toFixed(1)} °C
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Forecast parsedForecastWeather={parsedForecastWeather} />
		</main>
	);
};

// test call
const api = {
	weatherCall: async (city: string): Promise<ResultWeather | undefined> => {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(getWeather(city).then(weather => weather));
			}, 2000);
		});
	}
};

export default City;
