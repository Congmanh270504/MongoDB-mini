import { Button } from "@/components/ui/Button";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import Form from "../ui/FormAction";
import { deleteManyStudent } from "@/app/actions/studentAction";
import Input from "@/components/ui/InputAction";
import { studentType } from "@/types/studentType";
import DialogItem from "../ui/DialogItem";

type props = studentType[];

const DeleteAllStudentDialog = ({ data }: { data: props }) => {
  return (
          <DialogItem
            triggerChildren={<span className="text-red-500">Delete</span>}
          >
            <Form action={deleteManyStudent}>
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
                  Are you sure you want to delete all student? This action
                  cannot be undone.
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
          </DialogItem>
  );
};

export default DeleteAllStudentDialog;
