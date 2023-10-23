import Link from 'next/link';

const NotFound = () => {
	return (
		<div className='max-w-7xl mx-auto flex flex-col items-center gap-4'>
			<h2 className='text-3xl'>Not Found</h2>
			<p>Could not find requested resource</p>
			<div>
				<span>Return </span>
				<Link href='/' className='text-blue-200 underline'>
					Home
				</Link>
			</div>
		</div>
	);
};
export default NotFound;
