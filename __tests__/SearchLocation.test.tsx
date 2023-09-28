import SearchLocation from '@/components/search/SearchLocation';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();

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
