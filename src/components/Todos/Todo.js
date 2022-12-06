import style from "./Todo.module.css";
import { RiClipboardLine, RiDeleteBinLine, RiCheckFill } from "react-icons/ri";

const Todo = ({ todo, deleteTodo, toggleTodoHandler }) => {
	const { text, id, isCompleted } = todo;
	return (
		<div className={`${style.todo} ${todo.isCompleted ? style.completedTodo : ''}`}>
			<RiClipboardLine className={style.todo__icon} />
			<p className={style.todo__text}>{text}</p>
			<RiDeleteBinLine
				className={style.todo__delete}
				onClick={() => deleteTodo(id)}
			/>
			<RiCheckFill
				className={style.todo__done}
				onClick={() => toggleTodoHandler(id)}
			/>
		</div>
	);
};

export default Todo;
