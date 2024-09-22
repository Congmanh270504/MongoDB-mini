"use client";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Button } from "@/components/ui/Button";
import {
	DialogClose,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import DialogItem from "../ui/DialogItem";
import { editStudent } from "@/app/actions/studentAction";
import { studentType } from "@/types/studentType";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
	inputId: z.string(),
	name: z.string().min(2).max(50),
	age: z.coerce.number().min(5).max(100),
	point: z.coerce.number().min(0).max(10),
});

const EditStudentDialog = ({ student }: { student: studentType }) => {
	const [open, setOpen] = useState(false);
	const { toast } = useToast();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			inputId: student.id,
			name: student.name || "",
			age: student.age,
			point: student.point,
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			setOpen(false);
			const response = await editStudent(values);
			if (response.success) {
				toast({
					variant: "success",
					title: "Success!",
					description: "The student has been updated successfully.",
				});
			} else {
				toast({
					variant: "destructive",
					title: "Error",
					description: response.message || "Failed to update the student.",
				});
			}
		} catch (error) {
			toast({
				variant: "destructive",
				title: "Error",
				description: "An unexpected error occurred.",
			});
		}
	};

	return (
		<DialogItem triggerChildren={"Edit"} open={open} onOpenChange={setOpen}>
			<Form {...form}>
				<DialogHeader>
					<DialogTitle>Edit this student</DialogTitle>
					<DialogDescription>
						Are you sure you want to edit this student? This action cannot be undone.
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder="Name" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="age"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Age</FormLabel>
								<FormControl>
									<Input type="number" placeholder="Age" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="point"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Point</FormLabel>
								<FormControl>
									<Input type="number" placeholder="Point" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<DialogFooter className="pt-2">
						<DialogClose asChild>
							<Button type="button" variant="secondary">
								Cancel
							</Button>
						</DialogClose>
						<DialogClose asChild>
							<Button type="submit">Submit</Button>
						</DialogClose>
					</DialogFooter>
				</form>
			</Form>
		</DialogItem>
	);
};

export default EditStudentDialog;
