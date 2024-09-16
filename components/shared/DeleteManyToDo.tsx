import React from "react";
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { todoType } from "@/types/todoType";
import { deleteManyToDo } from "@/app/actions/todoAction";

type props = todoType[];

const DeleteManyToDo = ({ data }: { data: props }) => {
  const buttonStyle = {
    opacity: !data || data.length === 0 ? 0.5 : 1,
  };
  return (
    <div style={buttonStyle}>
      <Form action={deleteManyToDo}>
        {data.map((todo: todoType) => (
          <Input key={todo.id} type="hidden" name="inputId" value={todo.id} />
        ))}
        <Button type="submit" text="Delete Selected" />
      </Form>
    </div>
  );
};

export default DeleteManyToDo;
