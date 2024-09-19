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

  const onSubmit = () => {
    toast({
      title: "Success!",
      description: "All students have been deleted successfully.",
    });
    setOpen(false);
  };
  return (
    <Dialog>
      {data === null || data.length === 0 ? (
        <Button
          variant="destructive"
          size="default"
          className="h-8 gap-1 opacity-50"
          disabled
        >
          Delete All Students
        </Button>
      ) : (
        <DialogTrigger asChild>
          <Button variant="destructive" size="default" className="h-8 gap-1">
            Delete All Students
          </Button>
        </DialogTrigger>
      )}

      <DialogContent className="sm:max-w-[425px]">
        <Form action={deleteManyStudent} onSubmit={onSubmit}>
          {data.map((student: studentType) => (
            <Input
              key={student.id}
              type="hidden"
              name="inputId"
              value={student.id}
            />
          ))}
          <DialogHeader>
            <DialogTitle>Delete all student</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete all student? This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="submit" variant="destructive">
                Submit
              </Button>
            </DialogClose>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteAllStudentDialog;
