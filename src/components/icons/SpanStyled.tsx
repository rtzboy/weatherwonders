type Props = {
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	iconStyle: string;
	className?: string;
};

const SpanStyled = ({ icon: Icon, className, iconStyle }: Props) => {
	return (
		<span className={`${className || ''}`}>
			<Icon className={`${iconStyle || ''}`} />
		</span>
	);
};

export default SpanStyled;
