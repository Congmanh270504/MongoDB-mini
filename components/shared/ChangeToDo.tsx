import React from "react";
import Form from "@/components/ui/FormAction";
import Button from "@/components/ui/ButtonAction";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import Input from "@/components/ui/InputAction";
import { changeStatus } from "@/app/actions/todoAction";
import { todoType } from "@/types/todoType";
const ChangeToDo = ({ todo }: { todo: todoType }) => {
	return (
		<Form action={changeStatus}>
			<Input name="inputId" value={todo.id} type="hidden" />
			<Button
				actionButton
				type="submit"
				text={!todo.isCompleted ? <AiOutlineCheck /> : <AiOutlineClose />}></Button>
		</Form>
	);
};

export default ChangeToDo;
