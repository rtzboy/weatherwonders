'use client';

import { currentHourLocale, forecastWeek, onlyHour } from '@/lib/helpers/time';
import useScroll from '@/lib/hooks/useScroll';
import { ForecastListType, ForecastWeatherType } from '@/models/ForecastWeather';
import Image from 'next/image';

interface WeatherFilter {
	[key: string]: ForecastListType[];
}

type Props = {
	parsedForecastWeather: ForecastWeatherType;
};

const Forecast = ({ parsedForecastWeather }: Props) => {
	const scrollRef = useScroll<HTMLDivElement>();

	const forecastLocale = parsedForecastWeather.list.map(elmUTC => {
		const [date, hour] = currentHourLocale(
			new Date(elmUTC.dt * 1000),
			parsedForecastWeather.city.timezone
		);
		return { ...elmUTC, dt_txt: `${date} ${hour}` };
	});

	const filterWeather = Object.values(
		forecastLocale.reduce((acum: WeatherFilter, curr) => {
			const date = curr.dt_txt.slice(0, 10);
			if (!acum[date]) {
				acum[date] = [];
			}
			acum[date].push(curr);
			return acum;
		}, {})
	);

	return (
		<section className='bg-slate-700/20 rounded-3xl mt-4 p-4 flex flex-col gap-4'>
			<h3 className='text-2xl'>5-day Forecast</h3>
			<hr className='border-neutral-500' />
			<div ref={scrollRef} className='overflow-x-scroll flex flex-nowrap pb-4'>
				{filterWeather.map((elm, idx) => (
					<div key={idx} className='border-r border-r-neutral-500 last:border-none px-4'>
						<div className='font-semibold sticky inline-block left-0 whitespace-nowrap tracking-wider'>
							{forecastWeek(elm[0].dt_txt)}
						</div>
						<ul className='flex gap-4'>
							{elm.map((elm2, idx2) => (
								<li
									key={idx2}
									className='flex flex-col gap-2 items-center rounded-xl w-[100px] py-2'
								>
									<div>{onlyHour(elm2.dt_txt)}</div>
									<Image
										src={`/weather/${elm2.weather[0].icon}.svg`}
										alt='weather'
										width={70}
										height={70}
									/>
									<div className='whitespace-nowrap'>{`${(elm2.main.temp - 273).toFixed(
										1
									)} °C`}</div>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
};

export default Forecast;
