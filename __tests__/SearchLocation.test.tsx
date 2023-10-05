import SearchLocation from '@/components/search/SearchLocation';
import { server } from '@/mocks/server';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();

// work without this, so why i am using it lol, so this onlu should be used me component render data ?
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('SearchLocation Component', () => {
	it('should show the placeholder correctly', () => {
		render(<SearchLocation />);
		const txtPlaceholder = screen.getByPlaceholderText(/search by cities\.\.\./i);
		expect(txtPlaceholder).toBeInTheDocument();
	});

	it('should show "New York" results when input changes', async () => {
		render(<SearchLocation />);
		const inputElement = screen.getByPlaceholderText('Search by cities...');

		await user.type(inputElement, 'New York');

		await waitFor(() => {
			expect(inputElement).toHaveValue('New York');
		});
	});
});
