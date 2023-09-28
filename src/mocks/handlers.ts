import { rest } from 'msw';

export const handlers = [
	rest.get('https://api.openweathermap.org/geo/1.0/direct', (req, res, ctx) => {
		const mockResponse = [
			{
				name: 'lima',
				local_names: {
					de: 'lima'
				},
				lat: -12.0621065,
				lon: -77.0365256,
				country: 'PE',
				state: 'lima'
			}
		];

		return res(ctx.json(mockResponse));
	})
];
