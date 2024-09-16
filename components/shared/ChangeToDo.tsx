import React from "react";
import Form from "@/components/ui/Form";
import Button from "@/components/ui/Button";
import { AiOutlineAlipayCircle } from "react-icons/ai";
import Input from "@/components/ui/Input";
import { changeStatus } from "@/app/actions/todoAction";
import { todoType } from "@/types/todoType";
const ChangeToDo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={changeStatus}>
      <Input name="inputId" value={todo.id} type="hidden" />
      <Button
        actionButton
        type="submit"
        text={<AiOutlineAlipayCircle />}
      ></Button>
    </Form>
  );
};

export default ChangeToDo;
