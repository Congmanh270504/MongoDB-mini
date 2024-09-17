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
	if (!name.trim()) return;
	await prisma.student.create({
		data: {
			name: name,
			age: age,
			point: point,
		},
	});
	revalidatePath("/students");
}

export async function editStudent(formData: FormData) {
	const name = formData.get("name") as string | null;
	const age = formData.get("age") as string | null;
	const point = formData.get("point") as string | null;
	const inputID = formData.get("inputId") as string;

	const updateData: { name?: string; age?: number; point?: number } = {};
	if (!name && !age && !point) return;
	if (name) {
		updateData.name = name;
	}
	if (age) {
		updateData.age = parseInt(age);
	}
	if (point) {
		updateData.point = parseFloat(point);
	}

	await prisma.student.update({
		where: {
			id: inputID,
		},
		data: updateData,
	});

	revalidatePath("/students");
}

export async function deleteStudent(formData: FormData) {
	const inputId = formData.get("inputId") as string;
	await prisma.student.delete({
		where: {
			id: inputId,
		},
	});
	revalidatePath("/students");
}
