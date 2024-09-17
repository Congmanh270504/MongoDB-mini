import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import React from "react";
import DeleteStudentDialog from "./DeleteStudentDialog";

type props = {
	id: string;
	name: string | null;
	age: number;
	point: number;
	createdAt: Date;
}[];

const StudentTable = ({ data }: { data: props }) => {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="hidden w-[100px] sm:table-cell">
						<span className="sr-only">Image</span>
					</TableHead>
					<TableHead>Name</TableHead>
					<TableHead>Age</TableHead>
					<TableHead className="hidden md:table-cell">Point</TableHead>
					<TableHead className="hidden md:table-cell">Created at</TableHead>
					<TableHead>
						<span className="sr-only">Actions</span>
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{data.map((student, id) => (
					<TableRow key={id}>
						<TableCell
							className="hidden sm:table-cell"
							style={{
								color: "#" + Math.floor(Math.random() * 16777215).toString(16),
							}}>
							{student.name ? (
								<span className="aspect-square rounded-md object-cover w-16 h-16 flex justify-center items-center bg-gray-200 text-xl">
									{student.name.charAt(0)}
								</span>
							) : (
								""
							)}
						</TableCell>
						<TableCell className="font-medium">{student.name}</TableCell>
						<TableCell>{student.age}</TableCell>
						<TableCell className="hidden md:table-cell">{student.point}</TableCell>
						<TableCell className="hidden md:table-cell">
							{new Date(student.createdAt).toLocaleString("en-GB", {
								day: "2-digit",
								month: "2-digit",
								year: "numeric",
								hour: "2-digit",
								minute: "2-digit",
								second: "2-digit",
								hour12: true,
							})}
						</TableCell>
						<TableCell className="text-right">
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button aria-haspopup="true" size="icon" variant="ghost">
										<MoreHorizontal className="h-4 w-4" />
										<span className="sr-only">Toggle menu</span>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end">
									<DropdownMenuLabel>Actions</DropdownMenuLabel>
									<DropdownMenuItem>Edit</DropdownMenuItem>
									<DeleteStudentDialog student={student} />
								</DropdownMenuContent>
							</DropdownMenu>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};

export default StudentTable;
