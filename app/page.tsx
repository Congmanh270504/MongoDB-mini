import React from "react";
import AddToDo from "@/components/shared/AddToDo";
const Home = () => {
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-3xl font-extrabold uppercase">to do app</span>
      <h1 className="text-3xl font-extrabold uppercase mb-5">
        Next.js 14
        <span className="text-orange-700 ml-2">Sever Action</span>
      </h1>
      <div className="flex justify-center flex-col items-center w-[1000px]">
        <AddToDo />
      </div>
    </div>
  );
};

export default Home;
