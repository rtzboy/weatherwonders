import LoadingIcon from '@/components/icons/LoadingIcon';

export default function Loading() {
	// Custom loading skeleton component
	return (
		<div className='flex items-center justify-center'>
			<LoadingIcon className='h-12 animate-spin' />
		</div>
	);
}
