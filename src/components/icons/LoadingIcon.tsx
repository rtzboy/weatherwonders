const LoadingIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		stroke='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth='1.5'
		viewBox='0 0 24 24'
	>
		<path stroke='none' d='M0 0h24v24H0z'></path>
		<path d='M12 6V3M16.25 7.75L18.4 5.6M18 12h3M16.25 16.25l2.15 2.15M12 18v3M7.75 16.25L5.6 18.4M6 12H3M7.75 7.75L5.6 5.6'></path>
	</svg>
);

export default LoadingIcon;
