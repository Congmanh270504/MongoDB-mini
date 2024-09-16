"use client";
import React, { useState } from "react";
import { edit } from "@/app/actions/todoAction";
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { todoType } from "@/types/todoType";
import { BiEdit } from "react-icons/bi";
const EditToDo = ({ todo }: { todo: todoType }) => {
  const [editTodo, setEditTodo] = useState(false);
  const handleEdit = () => {
    if (todo.isCompleted === true) return;
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
        <Form onSubmit={handleSubmit} action={edit} className="w-1/2">
          <Input name="inputId" value={todo.id} type="hidden" />
          <div className="flex justify-center gap-5">
            <Input
              name="newTitle"
              type="text"
              placeholder="Edit todo ..."
            />
            <Button type="submit" text="Save" actionButton />
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditToDo;
