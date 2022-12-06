import Todo from "./Todo";
import style from "./TodoList.module.css";

const TodoList = ({ todos, deleteTodo, toggleTodoHandler }) => {
	return (
		<div className={style.list}>
			{todos.map((todo) => {
				return (
					<Todo
						key={todo.id}
						deleteTodo={deleteTodo}
						todo={todo}
						toggleTodoHandler={toggleTodoHandler}
					/>
				);
			})}
		</div>
	);
};

export default TodoList;
