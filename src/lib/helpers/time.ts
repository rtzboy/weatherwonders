import { weekDays } from '@/constants/WeatherDate';

export const twodecimals = (number: number) => Math.round(number * 100) / 100;

export const toLocaleDate = (utcTime: number, timezone: number) => {
	const timezoneInHours = Math.abs(timezone / 3600);
	const timezoneInMinutes = Math.abs((timezone / 60) % 60);

	const sign = timezone >= 0 ? '+' : '-';

	const localeDate = new Date(utcTime);
	localeDate.setHours(localeDate.getHours() + parseInt(sign + timezoneInHours));
	localeDate.setMinutes(localeDate.getMinutes() + parseInt(sign + timezoneInMinutes));

	return localeDate.toISOString().split('T').join(' ').slice(0, -5);
};

export const formatToHHMM = (dateString: string) => {
	const date = new Date(dateString);

	const hours = date.getHours();
	const minutes = date.getMinutes();

	// from 00 to 23
	const hourFormat = hours > 12 ? hours - 12 : hours;

	const timeFormatted = `${String(hourFormat).padStart(1, '0')}:${String(minutes).padStart(
		2,
		'0'
	)}${hours >= 12 ? ' PM' : ' AM'}`;

	return timeFormatted;
};

export const dateUTC = (timezone: number): string => {
	const timezoneOffsetInHours = Math.abs(timezone / 3600);
	const timezoneOffsetInMinutes = Math.abs((timezone / 60) % 60);
	const sign = timezone >= 0 ? '+' : '-';

	const hours = String(timezoneOffsetInHours).padStart(2, '0');
	const minutes = String(timezoneOffsetInMinutes).padStart(2, '0');

	return `UTC${sign}${hours}:${minutes}`;
};

export const currentHourLocale = (date: Date, timezone: number) => {
	const currHour = toLocaleDate(date.getTime(), timezone);
	return currHour.split(' ');
};

export const forecastWeek = (dateStr: string) => {
	const date = new Date(dateStr);
	const dayOfWeek = weekDays[date.getDay()];
	const dayOfMonth = date.getDate();
	return `${dayOfWeek} - ${dayOfMonth}`;
};

export const onlyHour = (dateString: string) => {
	const date = new Date(dateString);
	const hours = date.getHours().toString().padStart(2, '0');
	const minutes = date.getMinutes().toString().padStart(2, '0');

	return `${hours}:${minutes}`;
};
