import { LocationsT } from '@/models/Cities';
import { useEffect, useState } from 'react';

type Props = {
	locations?: LocationsT;
};

const SearchBox = ({ locations }: Props) => {
	const [itemSelected, setItemSelected] = useState(-1);

	useEffect(() => {
		setItemSelected(-1);
	}, [locations]);

	if (!locations) return null;

	if (!locations.length)
		return (
			<div className='absolute bg-[#537FE7]/10 w-full rounded-b-xl px-3 py-2'>
				No locations matched your search
			</div>
		);

	return (
		<ul className='absolute bg-[#537FE7]/10 w-full rounded-b-xl'>
			{locations.map((location, idx) => (
				<li
					key={location.lat}
					tabIndex={3 + idx}
					onKeyUp={evt => {
						if (evt.key === 'Enter') {
							alert(location.name);
						}
					}}
					onMouseEnter={() => setItemSelected(idx)}
					onFocus={() => setItemSelected(idx)}
					onClick={() => alert(location.name)}
					className={`flex cursor-pointer items-center gap-3 p-3 transition-all ${
						itemSelected === idx ? 'bg-slate-600 last:rounded-b-xl' : ''
					}`}
				>
					<div>
						<img src={getURLFlag(location.country)} alt={location.name} className='h-3 w-5' />
					</div>
					<div>
						<span>{location.name}, </span>
						<span> {location.country}</span>
					</div>
					<div>
						<span className='text-sm italic'>{location.state}</span>
					</div>
				</li>
			))}
		</ul>
	);
};

export const getURLFlag = (code: string): string =>
	`https://flagcdn.com/48x36/${code.toLowerCase()}.png`;

export default SearchBox;
