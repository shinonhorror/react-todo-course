import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Todos/Form";
import TodoList from "./components/Todos/TodoList";
import TodosActions from "./components/Todos/TodosActions";

function App() {
	const [todos, setTodos] = useState([]);

	const addNewTodo = (title) => {
		const newTodo = {
			text: title,
			isCompleted: false,
			id: uuidv4(),
		};
		setTodos([...todos, newTodo]);
	};

	const toggleTodoHandler = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id
					? { ...todo, isCompleted: !todo.isCompleted }
					: { ...todo }
			)
		);
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const deleteAllCompletedTodo = () => {
		setTodos(todos.filter((todo) => !todo.isCompleted));
	};

	const deleteAllTodo = () => {
		setTodos([]);
	};

	const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

	return (
		<div className="App">
			<h1>Todo App</h1>
			<Form addNewTodo={addNewTodo} />
			{!!todos.length ? (
				<>
					<TodosActions
						deleteAllTodo={deleteAllTodo}
						deleteAllCompletedTodo={deleteAllCompletedTodo}
						completedTodosExist={!!completedTodosCount}
					/>
					<TodoList
						todos={todos}
						deleteTodo={deleteTodo}
						toggleTodoHandler={toggleTodoHandler}
					/>
				</>
			) : (
				<h2 style={{ marginTop: "50px" }}>Todo list is empty</h2>
			)}
			{!!completedTodosCount && (
				<h2>{`You're completed ${completedTodosCount} ${
					completedTodosCount > 1 ? "todos" : "todo"
				}`}</h2>
			)}
		</div>
	);
}

export default App;
