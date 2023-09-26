import { LocationsT } from '@/models/Cities';

type Props = {
	locations?: LocationsT;
};

const SearchBox = ({ locations }: Props) => {
	if (!locations) return null;

	if (!locations.length)
		return (
			<div className='absolute bg-[#537FE7]/10 w-full rounded-b-xl px-3 py-2'>
				No locations matched your search
			</div>
		);

	return (
		<ul className='absolute bg-[#537FE7]/10 w-full rounded-b-xl'>
			{locations.map(location => (
				<li
					key={location.lat}
					className='flex cursor-pointer items-center gap-3 p-3 transition-all'
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
