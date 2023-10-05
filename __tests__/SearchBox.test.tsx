import SearchBox from '@/components/search/SearchBox';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

const mockCities = [
	{
		name: 'City 1',
		local_names: { ab: 'df' },
		lat: -1.3,
		lon: -17.0,
		country: 'PE',
		state: 'State 1'
	},
	{
		name: 'City 2',
		local_names: { ab: 'df' },
		lat: -2.3,
		lon: -24.0,
		country: 'ES',
		state: 'State 2'
	},
	{
		name: 'City 3',
		local_names: { ab: 'df' },
		lat: -3.3,
		lon: -75.0,
		country: 'GM',
		state: 'State 3'
	}
];

describe('SearchBox component', () => {
	it('Should show a message when no locations are provided', () => {
		render(<SearchBox locations={[]} />);

		const msgTxt = screen.getByText('No locations matched your search');

		expect(msgTxt).toBeInTheDocument();
	});

	it('Should show "x" cities when we pass an array of cities', () => {
		render(<SearchBox locations={mockCities} />);

		const byCity = screen.getAllByTestId('city');

		expect(byCity.length).toBe(mockCities.length);
	});
});
