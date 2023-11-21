const MapIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		stroke='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth={1.5}
		viewBox='0 0 24 24'
	>
		<path stroke='none' d='M0 0h24v24H0z'></path>
		<path d='M9 11a3 3 0 106 0 3 3 0 00-6 0'></path>
		<path d='M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'></path>
	</svg>
);

export default MapIcon;
