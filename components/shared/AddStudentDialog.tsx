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
import { Input } from "@/components/ui/input";
import { PlusCircle } from "lucide-react";
import React, { useState } from "react";
import { createStudent } from "@/app/actions/studentAction";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";

const formSchema = z.object({
	name: z.string().min(2).max(50),
	age: z.coerce.number().min(5).max(100),
	point: z.coerce.number().min(0).max(10),
});

const AddStudentDialog = () => {
	const [open, setOpen] = useState(false);
	const { toast } = useToast();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			setOpen(false);
			const response = await createStudent(values);
			if (response.success) {
				toast({
					variant: "success",
					title: "Success!",
					description: "Student has been added successfully.",
				});
				form.reset();
			} else {
				toast({
					variant: "destructive",
					title: "Error",
					description: response.message || "Failed to add student.",
				});
			}
		} catch (error) {
			toast({
				variant: "destructive",
				title: "Error",
				description: "An unexpected error occurred.",
			});
		}
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button size="default" className="h-8 gap-1">
					<PlusCircle className="h-3.5 w-3.5" />
					<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Student</span>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<Form {...form}>
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
							<Button type="submit">Submit</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};

export default AddStudentDialog;
