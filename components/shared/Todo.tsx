import React from "react";
import ChangeToDo from "@/components/shared/ChangeToDo";
import { todoType } from "@/types/todoType";
import EditToDo from "@/components/shared/EditToDo";
import DeleteToDo from "@/components/shared/DeleteToDo";
const Todo = ({ todo }: { todo: todoType }) => {
  const todoStyle = {
    textDecoration: todo.isCompleted === true ? "line-through" : "none",
    opacity: todo.isCompleted === true ? 0.5 : 1,
  };
  return (
    <div
      className="w-full flex items-center justify-between bg-white py-3 px-20 rounded-2xl"
      style={todoStyle}
    >
      <ChangeToDo todo={todo} />
      <span className="text-center font-bold ">{todo.title}</span>
      <div className="flex items-center gap-5">
        <EditToDo todo={todo} />
        <DeleteToDo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;
