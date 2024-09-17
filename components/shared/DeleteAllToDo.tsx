import React from "react";
import Form from "@/components/ui/FormAction";
import Input from "@/components/ui/InputAction";
import Button from "@/components/ui/ButtonAction";
import { todoType } from "@/types/todoType";
import { deleteAllToDo } from "@/app/actions/todoAction";

type props = todoType[];

const DeleteAllToDo = ({ data }: { data: props }) => {
	const buttonStyle = {
		opacity: !data || data.length === 0 ? 0.5 : 1,
	};
	return (
		<div style={buttonStyle}>
			<Form action={deleteAllToDo}>
				{data.map((todo: todoType) => (
					<Input key={todo.id} type="hidden" name="inputId" value={todo.id} />
				))}
				<button type="submit" className="bg-orange-700 p-2 text-white rounded-xl">
					Delete All
				</button>
			</Form>
		</div>
	);
};

export default DeleteAllToDo;
