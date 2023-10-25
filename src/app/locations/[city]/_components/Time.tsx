'use client';

import { useRef, useState } from 'react';

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

	// useEffect(() => {
	// 	dateRef.current = setInterval(() => {
	// 		setDate(new Date());
	// 	}, 1000);
	// 	return () => {
	// 		clearInterval(dateRef.current);
	// 	};
	// }, []);

	// useEffect(() => {
	// 	routeRef.current = setInterval(() => {
	// 		router.refresh();
	// 	}, 20000);
	// 	return () => {
	// 		clearInterval(routeRef.current);
	// 	};
	// }, [router]);

	const [date, hour] = currentHourLocale(now, parsedCurrentWeather.timezone);

	return (
		<div className='p-4 max-w-[280px] w-full bg-cyan-800/50 rounded-3xl flex flex-col gap-4'>
			<div className='text-lg'>Time</div>
			<table>
				<tbody>
					<tr>
						<td>Timezone:</td>
						<td>{dateUTC(parsedCurrentWeather.timezone)}</td>
					</tr>
					<tr>
						<td>Current Date:</td>
						<td>{date}</td>
					</tr>
					<tr>
						<td>Current Time:</td>
						<td>{hour}</td>
					</tr>
					<tr>
						<td>Latitude:</td>
						<td>{parsedCurrentWeather.coord.lat}</td>
					</tr>
					<tr>
						<td>Longitude:</td>
						<td>{parsedCurrentWeather.coord.lon}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Time;
