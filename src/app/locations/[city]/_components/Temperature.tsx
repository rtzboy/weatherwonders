import { codeToCountry, getURLFlag } from '@/lib/helpers/country';
import { CurrentWeatherType } from '@/models/CurrentWeather';
import Image from 'next/image';

type Props = {
	parsedCurrentWeather: CurrentWeatherType;
};

const Temperature = ({ parsedCurrentWeather }: Props) => {
	return (
		<div className='w-full max-w-xs bg-slate-700/50 rounded-3xl p-4'>
			<div>
				<Image
					src={`/weather/${parsedCurrentWeather.weather[0].icon}.svg`}
					alt='mama'
					width={130}
					height={130}
				/>
			</div>
			<div className='text-5xl'>
				<span>{(parsedCurrentWeather.main.temp - 273).toFixed(1)}</span>
				<span> °C</span>
			</div>
			<div className='my-4 flex items-center gap-2'>
				<span>
					<img
						src={`https://openweathermap.org/img/w/${parsedCurrentWeather.weather[0].icon}.png`}
						alt=''
						className='inline-block h-9 w-9'
					/>
				</span>
				<span>{parsedCurrentWeather.weather[0].description}</span>
				<span>{parsedCurrentWeather.weather[1]?.description}</span>
			</div>
			<div>
				<span>{parsedCurrentWeather.name},</span>
				<span className='font-bold'>{codeToCountry(parsedCurrentWeather.sys.country)}</span>
				<img
					src={getURLFlag(parsedCurrentWeather.sys.country)}
					alt=''
					className='w-6 inline-block'
				/>
			</div>
		</div>
	);
};

export default Temperature;
