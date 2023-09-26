type Props = {
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	onClick: () => void;
	className?: string;
	iconStyle?: string;
};

const ButtonStyled = ({ icon: Icon, onClick, className, iconStyle }: Props) => {
	return (
		<button onClick={onClick} className={`${className || ''}`}>
			<Icon className={`${iconStyle || ''}`} />
		</button>
	);
};

export default ButtonStyled;
