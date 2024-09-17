"use client";
import React from "react";
import { deleteToDo } from "@/app/actions/todoAction";
import Form from "@/components/ui/FormAction";
import Input from "@/components/ui/InputAction";
import Button from "@/components/ui/ButtonAction";
import { todoType } from "@/types/todoType";
import { BsFillTrashFill } from "react-icons/bs";

const DeleteToDo = ({ todo }: { todo: todoType }) => {
	return (
		<Form action={deleteToDo}>
			<Input type="hidden" name="inputId" value={todo.id} />
			<Button type="submit" text={<BsFillTrashFill />} actionButton />
		</Form>
	);
};

export default DeleteToDo;
