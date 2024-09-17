import Form from "../ui/FormAction";
import Input from "../ui/InputAction";
import Button from "../ui/ButtonAction";
import { create } from "@/app/actions/todoAction";

const AddTodo = () => {
	return (
		<Form action={create} className="w-1/2 m-auto">
			<div className="flex">
				<Input name="input" type="text" placeholder="Add Todo..." />
				<button type="submit" className="bg-orange-700 px-2 text-white rounded-xl">
					Add
				</button>
			</div>
		</Form>
	);
};

export default AddTodo;
