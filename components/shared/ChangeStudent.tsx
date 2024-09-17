import React from "react";
import Form from "@/components/ui/FormAction";
import Button from "@/components/ui/ButtonAction";
import { AiOutlineAlipayCircle } from "react-icons/ai";
import Input from "@/components/ui/InputAction";
import { changeStatus } from "@/app/actions/todoAction";
import { studentType } from "@/types/todoType";
const ChangeStudent = ({ student }: { student: studentType }) => {
	return (
		<Form action={changeStatus}>
			<Input name="inputId" value={student.id} type="hidden" />
			<Button actionButton type="submit" text={<AiOutlineAlipayCircle />}></Button>
		</Form>
	);
};

export default ChangeStudent;
