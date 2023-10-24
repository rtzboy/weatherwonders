import { CurrentWeatherType } from '@/models/CurrentWeather';
import Image from 'next/image';

type Props = {
	parsedCurrentWeather: CurrentWeatherType;
};

const Wind = ({ parsedCurrentWeather }: Props) => {
	return (
		<div className='p-4 max-w-[280px] w-full bg-cyan-800/50 rounded-3xl flex flex-col gap-4'>
			<div className='text-lg'>Wind Status</div>
			<div className='relative flex justify-center w-[240] h-[200]'>
				<Image src='/compass.webp' alt='compass' width={200} height={200} />
				<div className='absolute w-[170px] h-[170px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
					<Image
						style={{ transform: `rotate(${parsedCurrentWeather.wind.deg}deg)` }}
						src='/needle.webp'
						alt='needle'
						width={170}
						height={170}
						className='absolute opacity-50'
					/>
				</div>
				<div className='absolute text-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
					{parsedCurrentWeather.wind.deg}°
				</div>
			</div>
			<div>
				<span className='text-2xl'>{parsedCurrentWeather.wind.speed}</span>
				<span className='font-semibold'> m/s</span>
			</div>
		</div>
	);
};

export default Wind;
