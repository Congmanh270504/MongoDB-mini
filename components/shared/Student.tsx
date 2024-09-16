import React from "react";
import ChangeStudent from "@/components/shared/ChangeStudent";
import { studentType } from "@/types/todoType";
import EditStudent from "@/components/shared/EditStudent";
import DeleteStudent from "@/components/shared/DeleteStudent";

const Student = ({ student }: { student: studentType }) => {
  return (
    <div className="w-full flex items-center justify-between bg-white py-3 px-20 rounded-2xl shadow-dark-lg p-4">
      <ChangeStudent student={student} />
      <span className="text-center font-bold capitalize flex-1">
        {student.name}
      </span>
      <span className="text-center font-bold uppercase flex-1">
        {student.age}
      </span>
      <span className="text-center font-bold uppercase flex-1">
        {student.point}
      </span>
      <div className="flex items-center gap-5">
        <EditStudent student={student} />
        <DeleteStudent student={student} />
      </div>
    </div>
  );
};

export default Student;
