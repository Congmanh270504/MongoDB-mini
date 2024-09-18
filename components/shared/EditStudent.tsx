"use client";
import React, { useState } from "react";
import { editStudent } from "@/app/actions/todoAction";
import Form from "@/components/ui/FormAction";
import Input from "@/components/ui/InputAction";
import Button from "@/components/ui/ButtonAction";
import { studentType } from "@/types/todoType";
import { BiEdit } from "react-icons/bi";

const EditToDo = ({ student }: { student: studentType }) => {
	const [editTodo, setEditTodo] = useState(false);
	const handleEdit = () => {
		setEditTodo(!editTodo);
	};
	const handleSubmit = () => {
		setEditTodo(false);
	};
	return (
		<div className="flex gap-5 items-center ">
			<Button type="submit" onClick={handleEdit} text={<BiEdit />} actionButton />
			{editTodo ? (
				<div className="w-fit absolute top-0 right-[-14em] ">
					<Form onSubmit={handleSubmit} action={editStudent} className="w-1/2">
						<Input name="inputId" value={student.id} type="hidden" />
						<div className="flex flex-col justify-center gap-5">
							<Input type="text" name="name" placeholder="Name" />
							<Input type="number" name="age" placeholder="Age" />
							<Input type="number" name="point" placeholder="Point" step="0.01" />
							<Button type="submit" text="Save" actionButton />
						</div>
					</Form>
				</div>
			) : null}
		</div>
	);
};

export default EditToDo;
