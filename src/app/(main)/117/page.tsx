import { ArrowBigDownDash } from "lucide-react";
// import Link from "next/link";
import React from "react";

const page = () => {
  console.log("117 page");
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center gap-6 ">
      <div>
        <h1 className="text-xl text-green-500">|[ UNDER RECONSTRUCTION ]|</h1>
        <h3>Klaus is making rad changes</h3>
      </div>

      <div className="text-zinc-500 underline flex justify-center hover:text-zinc-100 cursor-pointer">
        <ArrowBigDownDash />
        <a href={"files/117 Resume.zip"} download>
          {" "}
          Dowload Resume
        </a>
      </div>
      <footer className="w-full flex justify-end absolute bottom-6 px-6 ">
        {/* <p className="mx-2">👾</p> */}
        <p className="uppercase font-black text-md italic text-zinc-800 ">
          Clown Ware®
        </p>
      </footer>
    </div>
  );
};

export default page;
