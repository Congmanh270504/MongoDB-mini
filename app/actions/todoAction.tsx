"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/utils/prisma";
export async function create(formData: FormData) {
  const input = formData.get("input") as string;
  if (!input.trim()) return;
  await prisma.todo.create({
    data: {
      title: input,
    },
  });
  revalidatePath("/");
}
export async function createStudent(formData: FormData) {
  const name = formData.get("name") as string;
  const age = parseInt(formData.get("age") as string);
  const point = parseFloat(formData.get("point") as string);
  if (!name.trim()) return;
  await prisma.student.create({
    data: {
      name: name,
      age: age,
      point: point,
    },
  });
  revalidatePath("/student");
}
export async function changeStatus(formData: FormData) {
  const inputId = formData.get("inputId") as string;
  const todo = await prisma.todo.findUnique({
    where: {
      id: inputId,
    },
  });
  if (!todo) return;
  const updateStatus = !todo?.isCompleted;
  await prisma.todo.update({
    where: {
      id: inputId,
    },
    data: {
      isCompleted: updateStatus,
    },
  });
  revalidatePath("/");
  return updateStatus;
}
export async function edit(formData: FormData) {
  const input = formData.get("newTitle") as string;
  const inputID = formData.get("inputId") as string;
  await prisma.todo.update({
    where: {
      id: inputID,
    },
    data: {
      title: input,
    },
  });
  revalidatePath("/");
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

  revalidatePath("/student");
}
export async function deleteToDo(formData: FormData) {
  const inputId = formData.get("inputId") as string;
  await prisma.todo.delete({
    where: {
      id: inputId,
    },
  });
  revalidatePath("/");
}
export async function deleteStudent(formData: FormData) {
  const inputId = formData.get("inputId") as string;
  await prisma.student.delete({
    where: {
      id: inputId,
    },
  });
  revalidatePath("/student");
}
export async function deleteManyToDo(formData: FormData) {
  const inputIds = formData.getAll("inputId") as string[];
  await prisma.todo.deleteMany({
    where: {
      id: {
        in: inputIds,
      },
    },
  });
  revalidatePath("/");
}
export async function deleteManyStudent(formData: FormData) {
  const inputIds = formData.getAll("inputId") as string[];
  await prisma.student.deleteMany({
    where: {
      id: {
        in: inputIds,
      },
    },
  });
  revalidatePath("/");
}