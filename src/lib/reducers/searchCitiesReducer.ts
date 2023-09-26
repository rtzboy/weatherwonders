import { LocationsT } from '@/models/Cities';

export const SEARCH_STATE: SearchState = {
	query: '',
	cities: undefined,
	loading: false,
	message: ''
};

export const searchCitiesReducer = (state: SearchState, action: SearchActions): SearchState => {
	switch (action.type) {
		case 'SEARCH_SUCCESS':
			return {
				...state,
				cities: action.payload,
				loading: false
			};

		case 'SEARCH_ERROR':
			return {
				...state,
				message: action.payload,
				loading: false
			};

		case 'SEARCH_TERM':
			return {
				...state,
				query: action.payload,
				loading: true
			};

		case 'SEARCH_RESET':
			return { ...SEARCH_STATE };

		default:
			throw new Error(`Error action: ${action}`);
	}
};

export interface SearchState {
	query: string;
	cities: LocationsT | undefined;
	loading: boolean;
	message: string;
}

interface SearchSuccessAction {
	type: 'SEARCH_SUCCESS';
	payload: LocationsT | undefined;
}

interface SearchErrorAction {
	type: 'SEARCH_ERROR';
	payload: string;
}

interface SearchTermAction {
	type: 'SEARCH_TERM';
	payload: string;
}

interface SearchReset {
	type: 'SEARCH_RESET';
}

type SearchActions = SearchSuccessAction | SearchErrorAction | SearchTermAction | SearchReset;

export type { SearchActions };
