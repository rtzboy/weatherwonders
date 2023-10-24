import { ResultWeather, getWeather } from '@/lib/api/weather_api';
import SunRiseSet from './_components/SunRiseSet';
import Temperature from './_components/Temperature';
import Time from './_components/Time';
import Wind from './_components/Wind';

const City = async ({ params }: { params: { city: string } }) => {
	const weather = await getWeather(params.city);

	if (!weather) return <main>Something Happened!</main>;

	const { parsedCurrentWeather } = weather;

	return (
		<main className='max-w-7xl mx-auto px-4'>
			<section className='flex flex-col md:flex-row gap-4'>
				<Temperature parsedCurrentWeather={parsedCurrentWeather} />
				<div className='flex flex-col flex-1 bg-slate-700/50 rounded-3xl gap-4 p-4'>
					<p>Today&apos;s Highlights</p>
					<div className='grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 justify-items-center'>
						<Wind parsedCurrentWeather={parsedCurrentWeather} />
						<SunRiseSet
							sunrise={parsedCurrentWeather.sys.sunrise}
							sunset={parsedCurrentWeather.sys.sunset}
							datetime={parsedCurrentWeather.dt}
							timezone={parsedCurrentWeather.timezone}
						/>
						<Time parsedCurrentWeather={parsedCurrentWeather} />
					</div>
				</div>
			</section>
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
