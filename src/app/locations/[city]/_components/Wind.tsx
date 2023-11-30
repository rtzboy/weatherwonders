import Compass from '@/components/icons/Compass';
import { CurrentWeatherType } from '@/models/CurrentWeather';

type Props = {
	parsedCurrentWeather: CurrentWeatherType;
};

const Wind = ({ parsedCurrentWeather }: Props) => {
	const { wind } = parsedCurrentWeather;

	return (
		<div className='p-2 border-r border-r-neutral-500 last:border-none'>
			<div>Wind</div>
			<div className='flex gap-2 items-center text-xl'>
				<div>
					<span>{wind.speed}</span>
					<span> m/s</span>
				</div>
				<div>
					<Compass className='h-5' />
				</div>
			</div>
		</div>
	);
};

export default Wind;
