import Form from "../ui/FormAction";
import Input from "../ui/InputAction";
import Button from "../ui/ButtonAction";
import { createStudent } from "@/app/actions/todoAction";

const AddStudent = () => {
	return (
		<Form action={createStudent} className="w-1/2 m-auto">
			<div className="flex">
				<Input name="name" type="text" placeholder="Name" />
				<Input name="age" type="number" placeholder="Age" min={1} />
				<Input name="point" type="number" placeholder="Point" min={0} max={10} step="0.01" />
				<Button type="submit" text="Add" actionButton />
			</div>
		</Form>
	);
};

export default AddStudent;
