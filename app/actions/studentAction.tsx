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

export async function editStudent({
  name,
  age,
  point,
  inputId,
}: {
  name?: string;
  age?: string;
  point?: string;
  inputId: string;
}) {
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
      id: inputId,
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
export async function deleteManyStudent(formData: FormData) {
  const inputIds = formData.getAll("inputId") as string[];
  await prisma.student.deleteMany({
    where: {
      id: {
        in: inputIds,
      },
    },
  });
  revalidatePath("/students");
}
