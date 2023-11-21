import MapIcon from '@/components/icons/MapIcon';
import { codeToCountry, getURLFlag } from '@/lib/helpers/country';
import { CurrentWeatherType, RainType } from '@/models/CurrentWeather';
import Image from 'next/image';

type Props = {
	parsedCurrentWeather: CurrentWeatherType;
};

const Temperature = ({ parsedCurrentWeather }: Props) => {
	const { weather, main, name, sys, rain } = parsedCurrentWeather;

	return (
		<div className='w-full max-w-xs bg-slate-700/50 rounded-3xl p-4'>
			<div>
				<Image src={`/weather/${weather[0].icon}.svg`} alt='weather' width={150} height={150} />
			</div>
			<div className='text-5xl'>
				<span>{(main.temp - 273).toFixed(1)}</span>
				<span> °C</span>
			</div>
			<div className='my-4 flex items-center gap-1'>
				<span>
					<img
						src={`https://openweathermap.org/img/w/${weather[0].icon}.png`}
						alt={weather[0].description}
						className='inline-block h-9 w-9'
					/>
				</span>
				<span>{weather[0].description}</span>
			</div>
			{rainVolume(rain)}
			<div className='flex gap-2 items-center'>
				<span>
					<MapIcon className='h-7' />
				</span>
				<span>{name}, </span>
				<span className='font-bold'>{codeToCountry(sys.country)}</span>
				<img src={getURLFlag(sys.country)} alt={sys.country} className='w-6 inline-block' />
			</div>
		</div>
	);
};

const rainVolume = (rain?: RainType) => {
	if (!rain) return;
	return (
		<div className='my-4 flex items-center gap-2'>
			<img src={'/weather/rain.svg'} alt='rainVolume' className='w-7' />
			<span>Rain Vol. {rain['1h'] || rain['3h']} mm</span>
		</div>
	);
};

export default Temperature;
