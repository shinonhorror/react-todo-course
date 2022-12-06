import { useState } from "react";
import Button from "../UI/Button";
import style from "./Form.module.css";

const Form = ({ addNewTodo }) => {
	const [todo, setTodo] = useState("");

	const handleFromSubmit = (e) => {
		e.preventDefault();
		addNewTodo(todo);
		setTodo('')
	};

	return (
		<form onSubmit={(e) => handleFromSubmit(e)} className={style.todo__form}>
			<input
				placeholder="Enter new todo"
				type="text"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				className={style.form__input}
			></input>
			<Button type="submit" className={style.form__btn} >
				Submit
			</Button>
		</form>
	);
};

export default Form;
