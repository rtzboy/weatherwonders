import MoonIcon from '@/components/icons/MoonIcon';
import SunIcon from '@/components/icons/SunIcon';
import SunriseIcon from '@/components/icons/SunriseIcon';
import SunsetIcon from '@/components/icons/SunsetIcon';
import { formatToHHMM, toLocaleDate, twodecimals } from '@/lib/helpers/time';

type Props = {
	sunrise: number;
	sunset: number;
	datetime: number;
	timezone: number;
};

const SunRiseSet = ({ sunrise, sunset, datetime, timezone }: Props) => {
	const today = datetime * 1000;
	const $sunrise = new Date(sunrise * 1000).getTime();
	const $sunset = new Date(sunset * 1000).getTime();

	const entireDay = $sunset - $sunrise;
	const initialDay = today - $sunrise;

	const todayValue = Math.floor((initialDay * 100) / entireDay);

	// Sun logic
	let containerWidth = 210;
	let sunrisePoint = 3.16;
	let sunsetPoint = 6.27;

	const r = (containerWidth - 16) / 2; // radius

	let angle = twodecimals((sunsetPoint - sunrisePoint) * (todayValue / 100) + sunrisePoint);

	let left = twodecimals((containerWidth - 16) / 2 + r * Math.cos(angle + ((2 * Math.PI) / 1) * 0));
	let top = twodecimals((containerWidth - 16) / 2 + r * Math.sin(angle + ((2 * Math.PI) / 1) * 0));

	return (
		<div className='p-2 w-full rounded-xl flex flex-col gap-2 max-w-[210px]'>
			<div className='text-lg mb-2'>Sunrise Sunset</div>
			<div className='relative'>
				<div className='w-full rounded-t-full h-[109px] relative overflow-hidden'>
					{showBgDayNight(todayValue, left)}
				</div>
				{showIconSunMoon(todayValue, left, top)}
			</div>
			<div className='flex justify-between'>
				<div className='flex flex-col gap-1 items-start'>
					<SunriseIcon className='h-6' />
					<span className='text-yellow-400 italic text-sm'>sunrise</span>
					<div>{formatToHHMM(toLocaleDate($sunrise, timezone))}</div>
				</div>
				<div className='flex flex-col gap-1 items-end'>
					<SunsetIcon className='h-6' />
					<span className='text-yellow-400 italic text-sm'>sunset</span>
					<div>{formatToHHMM(toLocaleDate($sunset, timezone))}</div>
				</div>
			</div>
		</div>
	);
};

const showBgDayNight = (value: number, left: number) => {
	if (value >= 0 && value <= 100)
		return (
			<div
				style={{ width: `${left}px` }}
				className={`h-full absolute left-0 top-0 bg-yellow-400/50 gradient_bottom`}
			/>
		);
	return <div className='h-full w-full absolute left-0 top-0 bg-black/60 gradient_bottom' />;
};

const showIconSunMoon = (value: number, left: number, top: number) => {
	if (value >= 0 && value <= 100)
		return (
			<span
				style={{
					left: `${left}px`,
					top: `${top}px`
				}}
				className='absolute -translate-x-1/2 top-1/2 left-1/2 -translate-y-1/2 z-10 text-yellow-300'
			>
				<SunIcon
					style={{ filter: 'drop-shadow(0px 0px 3px rgba(254, 240, 138,.7))' }}
					className='h-7'
				/>
			</span>
		);
	return (
		<span className='absolute -translate-x-1/2 top-0 left-1/2 -translate-y-1/2 z-10 text-indigo-500'>
			<MoonIcon style={{ filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 20,.7))' }} className='h-7' />
		</span>
	);
};

export default SunRiseSet;
