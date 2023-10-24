import { getURLFlag } from '@/lib/helpers/country';
import { LocationsT } from '@/models/Cities';
import Link from 'next/link';
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
					onMouseEnter={() => setItemSelected(idx)}
					onMouseLeave={() => setItemSelected(-1)}
					onFocus={() => setItemSelected(idx)}
					className={`${itemSelected === idx ? 'bg-slate-600 last:rounded-b-xl' : ''}`}
				>
					<Link
						href={`/locations/${location.lat},${location.lon}`}
						className='flex items-center gap-3 p-3'
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
					</Link>
				</li>
			))}
		</ul>
	);
};

export default SearchBox;
