import style from "./Button.module.css";

const Button = (props) => {
	const { onClick, children, title, disabled = false } = props;
	return (
		<button
			{...props}
			onClick={onClick}
			title={title}
			disabled={disabled}
			className={style.btn}
		>
			{children}
		</button>
	);
};

export default Button;
