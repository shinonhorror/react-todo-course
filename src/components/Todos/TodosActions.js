import Button from "../UI/Button";
import { RiDeleteBinLine, RiEraserLine } from "react-icons/ri";

const TodosActions = ({
	deleteAllTodo,
	deleteAllCompletedTodo,
	completedTodosExist
}) => {
	return (
		<>
			<Button title={"Delete all todo`s"} onClick={deleteAllTodo}>
				<RiEraserLine />
			</Button>
			<Button
				title={"Delete all completed todo`s"}
				onClick={deleteAllCompletedTodo}
				disabled={!completedTodosExist}
			>
				<RiDeleteBinLine />
			</Button>
		</>
	);
};

export default TodosActions;
