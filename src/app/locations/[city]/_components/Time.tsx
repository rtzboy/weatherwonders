'use client';

import { useEffect, useRef, useState } from 'react';

import { currentHourLocale, dateUTC } from '@/lib/helpers/time';
import { CurrentWeatherType } from '@/models/CurrentWeather';
import { useRouter } from 'next/navigation';

type Props = {
	parsedCurrentWeather: CurrentWeatherType;
};

const Time = ({ parsedCurrentWeather }: Props) => {
	const [now, setDate] = useState(new Date());
	const dateRef = useRef<undefined | NodeJS.Timeout>();
	const routeRef = useRef<undefined | NodeJS.Timeout>();

	const router = useRouter();

	useEffect(() => {
		dateRef.current = setInterval(() => {
			setDate(new Date());
		}, 1000);
		return () => {
			clearInterval(dateRef.current);
		};
	}, []);

	useEffect(() => {
		routeRef.current = setInterval(() => {
			router.refresh();
		}, 60000);
		return () => {
			clearInterval(routeRef.current);
		};
	}, [router]);

	const [date, hour] = currentHourLocale(now, parsedCurrentWeather.timezone);

	return (
		<div className='p-2 flex flex-col gap-2'>
			<div className='text-lg'>Time</div>
			<table>
				<tbody>
					<tr>
						<td className='py-1'>Timezone:</td>
						<td className='py-1'>{dateUTC(parsedCurrentWeather.timezone)}</td>
					</tr>
					<tr>
						<td className='py-1'>Current Date:</td>
						<td suppressHydrationWarning className='py-1'>
							{date}
						</td>
					</tr>
					<tr>
						<td className='py-1'>Current Time:</td>
						<td suppressHydrationWarning className='py-1'>
							{hour}
						</td>
					</tr>
					<tr>
						<td className='py-1'>Latitude:</td>
						<td className='py-1'>{parsedCurrentWeather.coord.lat}</td>
					</tr>
					<tr>
						<td className='py-1'>Longitude:</td>
						<td className='py-1'>{parsedCurrentWeather.coord.lon}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Time;
