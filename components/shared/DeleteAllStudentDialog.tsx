"use client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/Button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import Form from "../ui/FormAction";
import { deleteManyStudent } from "@/app/actions/studentAction";
import Input from "@/components/ui/InputAction";
import { studentType } from "@/types/studentType";

type props = studentType[];

const DeleteAllStudentDialog = ({ data }: { data: props }) => {
	const { toast } = useToast();
	const [open, setOpen] = useState(false);

	const onClick = async () => {
		const response = await deleteManyStudent();
		if (response.success) {
			toast({
				variant: "success",
				title: "Success!",
				description: "All students have been deleted successfully.",
			});
			setOpen(false);
		} else {
			toast({
				variant: "destructive",
				title: "Error",
				description: response.message || "Failed to delete all students.",
			});
		}
	};
	return data == null || data.length == 0 ? (
		<Button variant="destructive" disabled size="default" className="h-8 gap-1">
			Delete All Students
		</Button>
	) : (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="destructive" size="default" className="h-8 gap-1">
					Delete All Students
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Delete all student</DialogTitle>
					<DialogDescription>
						Are you sure you want to delete all student? This action cannot be undone.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<DialogClose asChild>
						<Button type="button" variant="secondary">
							Cancel
						</Button>
					</DialogClose>
					<DialogClose asChild>
						<Button type="button" variant="destructive" onClick={() => onClick()}>
							Submit
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default DeleteAllStudentDialog;
