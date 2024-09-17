"use client";
import React from "react";
import { deleteStudent } from "@/app/actions/todoAction";
import Form from "@/components/ui/FormAction";
import Input from "@/components/ui/InputAction";
import Button from "@/components/ui/ButtonAction";
import { studentType } from "@/types/todoType";
import { BsFillTrashFill } from "react-icons/bs";

const DeleteStudent = ({ student }: { student: studentType }) => {
	return (
		<Form action={deleteStudent}>
			<Input type="hidden" name="inputId" value={student.id} />
			<Button type="submit" text={<BsFillTrashFill />} actionButton />
		</Form>
	);
};

export default DeleteStudent;
