import { Button } from "@/components/ui/Button";
import {
	DialogClose,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import Form from "../ui/FormAction";
import { deleteStudent } from "@/app/actions/studentAction";
import { studentType } from "@/types/studentType";
import DialogItem from "../ui/DialogItem";

const DeleteStudentDialog = ({ student }: { student: studentType }) => {
	return (
		<DialogItem triggerChildren={<span className="text-red-500">Delete</span>}>
			<Form action={deleteStudent}>
				<input type="hidden" name="inputId" value={student.id} />
				<DialogHeader>
					<DialogTitle>Delete this student</DialogTitle>
					<DialogDescription>
						Are you sure you want to delete this student? This action cannot be undone.
					</DialogDescription>
				</DialogHeader>
				<div>
					<p>Student ame: {student.name}</p>
					<p>Student age: {student.age}</p>
					<p>Student point: {student.point}</p>
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button type="button" variant="secondary">
							Cancel
						</Button>
					</DialogClose>
					<DialogClose asChild>
						<Button type="submit" variant="destructive">
							Submit
						</Button>
					</DialogClose>
				</DialogFooter>
			</Form>
		</DialogItem>
	);
};

export default DeleteStudentDialog;
