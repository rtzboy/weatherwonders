import { ResultWeather, getWeather } from '@/lib/api/weather_api';
import Temperature from './_components/Temperature';

const City = async ({ params }: { params: { city: string } }) => {
	const weather = await getWeather(params.city);

	if (!weather) return <main>Something Happened!</main>;

	const { parsedCurrentWeather } = weather;

	console.log(parsedCurrentWeather);

	return (
		<main className='max-w-7xl mx-auto px-4'>
			<section className='flex flex-col md:flex-row gap-4'>
				<Temperature parsedCurrentWeather={parsedCurrentWeather} />
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
