import { CurrentWeatherType } from '@/models/CurrentWeather';
import Image from 'next/image';

type Props = {
	parsedCurrentWeather: CurrentWeatherType;
};

const Wind = ({ parsedCurrentWeather }: Props) => {
	const { wind } = parsedCurrentWeather;

	return (
		<div className='p-4 max-w-[250px] w-full bg-cyan-800/50 rounded-3xl flex flex-col gap-2'>
			<div className='text-lg'>Wind Status</div>
			<div className='relative flex justify-center w-full h-[150px]'>
				<Image src='/compass.webp' alt='compass' width={150} height={150} />
				<div className='flex justify-center items-center w-[150px] h-[150px] absolute'>
					<Image
						style={{ transform: `rotate(${wind.deg}deg)` }}
						src='/needle.webp'
						alt='needle'
						width={120}
						height={120}
						className='absolute opacity-50'
					/>
				</div>
				<div className='absolute text-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
					{wind.deg}°
				</div>
			</div>
			<div>
				<span className='text-2xl'>{wind.speed}</span>
				<span className='font-semibold'> m/s</span>
			</div>
		</div>
	);
};

export default Wind;
