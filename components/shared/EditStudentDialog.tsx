"use client";
import { Button } from "@/components/ui/Button";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/Form";
import DialogItem from "../ui/DialogItem";
import { editStudent } from "@/app/actions/studentAction";
import { studentType } from "@/types/studentType";
import { Input } from "@/components/ui/Input";
import {  z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  age: z.coerce.number().min(5).max(100),
  point: z.coerce.number().min(0).max(10),
});

const EditStudentDialog = ({ student }: { student: studentType }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: student.name || "",
      age: student.age || undefined,
      point: student.point || undefined,
    },
  });

  const onSubmit = (data: { name: string; age: number; point: number }) => {
    const formattedData = {
      ...data,
      inputId: student.id,
    };
    editStudent({
      ...formattedData,
      age: String(formattedData.age),
      point: String(formattedData.point),
    });
  };

  return (
    <DialogItem triggerChildren={<span className="text-red-500">Edit</span>}>
      <Form {...form}>
        <DialogHeader>
          <DialogTitle>Edit this student</DialogTitle>
          <DialogDescription>
            Are you sure you want to edit this student? This action cannot be
            undone.
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
