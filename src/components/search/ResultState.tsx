import ButtonStyled from '../icons/ButtonStyled';
import LoadingIcon from '../icons/LoadingIcon';
import SpanStyled from '../icons/SpanStyled';
import XMarkIcon from '../icons/XMarkIcon';

type Props = {
	search: string;
	loading: boolean;
};

const ResultState = ({ search, loading }: Props) => {
	if (!search) return null;

	if (loading)
		return (
			<SpanStyled
				icon={LoadingIcon}
				className='inline-block absolute top-1/2 -translate-y-1/2 right-1.5'
				iconStyle='h-6 animate-spin'
			/>
		);

	return (
		<ButtonStyled
			icon={XMarkIcon}
			onClick={() => console.log('hello')}
			className='inline-block absolute top-1/2 -translate-y-1/2 right-1.5'
			iconStyle='h-6'
		/>
	);
};

export default ResultState;
