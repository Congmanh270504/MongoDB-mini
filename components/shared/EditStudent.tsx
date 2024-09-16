"use client";
import React, { useState } from "react";
import { editStudent } from "@/app/actions/todoAction";
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { studentType } from "@/types/todoType";
import { BiEdit } from "react-icons/bi";

const EditToDo = ({ student }: { student: studentType }) => {
  const [editTodo, setEditTodo] = useState(false);
  const handleEdit = () => {
    setEditTodo(!editTodo);
  };
  const handleSubmit = () => {
    setEditTodo(false);
  };
  return (
    <div className="flex gap-5 items-center">
      <Button
        type="submit"
        onClick={handleEdit}
        text={<BiEdit />}
        actionButton
      />
      {editTodo ? (
        <div className="w-full ">
          <Form onSubmit={handleSubmit} action={editStudent} className="w-1/2">
            <Input name="inputId" value={student.id} type="hidden" />
            <div className="flex justify-center gap-5">
              <Input
                type="text"
                name="name"
                placeholder="Name"
                // value={student?.name ?? ""}
              />
              <Input
                type="number"
                name="age"
                placeholder="Age"
                // value={student.age.toString()}
              />
              <Input
                type="number"
                name="point"
                placeholder="Point"
                // value={student.point.toString()}
                step="0.01"
              />
              <Button type="submit" text="Save" actionButton />
            </div>
          </Form>
        </div>
      ) : null}
    </div>
  );
};

export default EditToDo;
