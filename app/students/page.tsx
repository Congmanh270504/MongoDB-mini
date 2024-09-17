import Image from "next/image";
import Link from "next/link";
import {
	File,
	Home,
	LineChart,
	ListFilter,
	MoreHorizontal,
	Package,
	Package2,
	PanelLeft,
	PlusCircle,
	Search,
	Settings,
	ShoppingCart,
	Users2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
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
import { prisma } from "@/utils/prisma";
import AddStudentDialog from "@/components/shared/AddStudentDialog";
import StudentTable from "@/components/shared/StudentTable";

async function getData() {
	const data = await prisma.student.findMany({
		select: {
			id: true,
			name: true,
			age: true,
			point: true,
			createdAt: true,
		},
		orderBy: {
			name: "asc",
		},
	});
	return data;
}

const StudentsPage = async () => {
	const data = await getData();

	return (
		<div className="flex min-h-screen w-full flex-col bg-muted/40">
			<h1 className="text-3xl font-bold text-center py-8 bg-white shadow-md">
				Students CRUD with MongoDB
			</h1>
			<div className="flex flex-col sm:gap-4 sm:py-8 sm:px-14">
				<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
					<Card x-chunk="dashboard-06-chunk-0">
						<CardHeader>
							<CardTitle className="flex justify-between">
								Students
								<AddStudentDialog />
							</CardTitle>
							<CardDescription>Manage students.</CardDescription>
						</CardHeader>
						<CardContent>
							<StudentTable data={data} />
						</CardContent>
					</Card>
				</main>
			</div>
		</div>
	);
};

export default StudentsPage;
