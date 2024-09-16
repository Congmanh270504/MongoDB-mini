import React from "react";
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { studentType } from "@/types/todoType";
import { deleteManyStudent } from "@/app/actions/todoAction";

type props = studentType[];

const DeleteManyStudent = ({ data }: { data: props }) => {
  return (
    <Form action={deleteManyStudent}>
      {data.map((student: studentType) => (
        <Input
          key={student.id}
          type="hidden"
          name="inputId"
          value={student.id}
        />
      ))}
      <Button type="submit" text="Delete Selected" actionButton />
    </Form>
  );
};

export default DeleteManyStudent;
