import React from "react";
import { prisma } from "@/utils/prisma";
import Student from "@/components/shared/Student";
import AddStudent from "@/components/shared/AddStudent";
import DeleteManyStudent from "@/components/shared/DeleteManyStudent";
async function getData() {
  const data = await prisma.student.findMany({
    select: {
      id: true,
      name: true,
      age: true,
      point: true,
    },
    orderBy: {
      name: "asc",
    },
  });
  return data;
}
const Home = async () => {
  const data = await getData();
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-3xl font-extrabold uppercase tracking-widest">
        Student List
      </span>
      <h1 className="text-3xl font-extrabold  mb-5 mt-1">
        Demo mongoDB
        <span className="text-orange-700 ml-2 uppercase">Nhóm 6</span>
      </h1>
      <div className="flex justify-center flex-col items-center w-[1000px]">
        <AddStudent />
        <div className=" flex flex-col items-center gap-5 justify-center mt-10 w-full ">
          <div className="w-full flex items-center justify-between bg-white py-3 px-20 rounded-2xl shadow-dark-lg p-4 ">
            <span className="text-transparent">aaaa</span>
            <span className="text-center font-bold capitalize flex-1">
              Tên học sinh
            </span>
            <span className="text-center font-bold uppercase flex-1">Tuổi</span>
            <span className="text-center font-bold uppercase flex-1">Điểm</span>
            <div className="flex items-center gap-5 ">
              <span className="text-transparent">âdsfs</span>
              <span className="text-transparent">âdsfs</span>
            </div>
          </div>
          {data.map((student, id) => (
            <div className="w-full relative " key={id}>
              <Student student={student} />
            </div>
          ))}
        </div>
        <div className="mt-10">
          <DeleteManyStudent data={data} />
        </div>
      </div>
    </div>
  );
};

export default Home;
