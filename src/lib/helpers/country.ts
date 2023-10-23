const URL = 'https://flagcdn.com/48x36/';

export const getURLFlag = (code: string): string => `${URL}${code.toLowerCase()}.png`;

export const codeToCountry = (codeCountry: string) => {
	const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
	return regionNames.of(codeCountry);
};
