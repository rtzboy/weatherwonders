'use client';

import { searchCity } from '@/lib/api/weather_api';
import { SEARCH_STATE, searchCitiesReducer } from '@/lib/reducers/searchCitiesReducer';
import { useEffect, useReducer, useRef } from 'react';
import LocationIcon from '../icons/LocationIcon';
import SpanStyled from '../icons/SpanStyled';
import ResultState from './ResultState';
import SearchBox from './SearchBox';

const SearchLocation = () => {
	const [querySearch, dispatchQuery] = useReducer(searchCitiesReducer, SEARCH_STATE);
	const idTime = useRef<undefined | NodeJS.Timeout>(undefined);

	const callLocations = async (city: string) => {
		const result = await searchCity(city);
		dispatchQuery({ type: 'SEARCH_SUCCESS', payload: result });
	};

	useEffect(() => {
		if (!querySearch.query) return;
		idTime.current = setTimeout(() => {
			callLocations(querySearch.query);
		}, 300);
		return () => clearTimeout(idTime.current);
	}, [querySearch.query]);

	return (
		<div className='relative max-w-lg'>
			<SpanStyled
				icon={LocationIcon}
				className='inline-block absolute top-1/2 -translate-y-1/2 left-1.5'
				iconStyle='h-6'
			/>
			<ResultState search={querySearch.query} loading={querySearch.loading} />
			<input
				onChange={evt => {
					dispatchQuery({ type: 'SEARCH_TERM', payload: evt.target.value });
					if (evt.target.value === '') dispatchQuery({ type: 'SEARCH_RESET' });
				}}
				type='text'
				value={querySearch.query}
				className={`w-full bg-[#537FE7]/10 outline-none px-9 py-2 ${
					querySearch.cities ? 'rounded-t-xl' : 'rounded-xl'
				}`}
				placeholder='Search by cities...'
			/>
			<SearchBox locations={querySearch.cities} />
		</div>
	);
};

export default SearchLocation;
