import React from "react";
import Form from "@/components/ui/FormAction";
import Input from "@/components/ui/InputAction";
import Button from "@/components/ui/ButtonAction";
import { studentType } from "@/types/todoType";
import { deleteManyStudent as deleteAllStudent } from "@/app/actions/todoAction";

type props = studentType[];

const DeleteAllStudent = ({ data }: { data: props }) => {
	return (
		<Form action={deleteAllStudent}>
			{data.map((student: studentType) => (
				<Input key={student.id} type="hidden" name="inputId" value={student.id} />
			))}
			<button type="submit" className="bg-orange-700 p-2 text-white rounded-xl">
				Delete All
			</button>
		</Form>
	);
};

export default DeleteAllStudent;
