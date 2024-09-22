"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/utils/prisma";

export async function createStudent({
	name,
	age,
	point,
}: {
	name: string;
	age: number;
	point: number;
}) {
	if (!name.trim()) return { success: false, message: "Name cannot be empty" };

	try {
		await prisma.student.create({
			data: {
				name: name,
				age: age,
				point: point,
			},
		});
		revalidatePath("/students");
		return { success: true, message: "Student created successfully" };
	} catch (error) {
		return { success: false, message: "Failed to create student" };
	}
}

export async function editStudent({
	inputId,
	name,
	age,
	point,
}: {
	name: string;
	age: number;
	point: number;
	inputId: string;
}) {
	if (!name.trim()) return { success: false, message: "Name cannot be empty" };

	try {
		await prisma.student.update({
			where: {
				id: inputId,
			},
			data: {
				name: name,
				age: age,
				point: point,
			},
		});
		revalidatePath("/students");
		return { success: true, message: "Student updated successfully" };
	} catch (error) {
		return { success: false, message: "Failed to update student" };
	}
}

export async function deleteStudent(formData: FormData) {
	try {
		const inputId = formData.get("inputId") as string;
		await prisma.student.delete({
			where: {
				id: inputId,
			},
		});
		revalidatePath("/students");
		return { success: true, message: "Student deleted successfully" };
	} catch (error) {
		return { success: false, message: "Failed to delete student" };
	}
}

export async function deleteManyStudent() {
	try {
		await prisma.student.deleteMany();
		revalidatePath("/students");
		return { success: true, message: "Students deleted successfully" };
	} catch (error) {
		return { success: false, message: "Failed to delete students" };
	}
}
