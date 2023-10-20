const SunsetIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth={2}
	>
		<path stroke='none' d='M0 0h24v24H0z'></path>
		<path d='M3 17h1m16 0h1M5.6 10.6l.7.7m12.1-.7l-.7.7M8 17a4 4 0 018 0M3 21h18M12 3v6l3-3M9 6l3 3'></path>
	</svg>
);

export default SunsetIcon;
