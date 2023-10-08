type Props = {
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	onClick: () => void;
	className?: string;
	iconStyle?: string;
	tabIdx?: number;
};

const ButtonStyled = ({ icon: Icon, onClick, tabIdx, className, iconStyle }: Props) => {
	return (
		<button onClick={onClick} tabIndex={tabIdx} className={`${className || ''}`}>
			<Icon className={`${iconStyle || ''}`} />
		</button>
	);
};

export default ButtonStyled;
