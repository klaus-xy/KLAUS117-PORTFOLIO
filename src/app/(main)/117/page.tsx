import { ArrowBigDownDash } from "lucide-react";
// import Link from "next/link";
import React from "react";
// import Image from "next/image";

const page = () => {
  console.log("117 page");
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center gap-6 font-departureMono ">
      <div>
        <h1 className="text-xl text-green-500">|[ UNDER RECONSTRUCTION ]|</h1>
        <h3>Klaus is making rad changes</h3>
      </div>

      <div className="text-zinc-500 underline flex justify-center hover:text-zinc-200 cursor-pointer">
        <ArrowBigDownDash />
        <a href={"files/117 Resume.zip"} download>
          {" "}
          Dowload Resume
        </a>
      </div>

      <footer className="w-full flex justify-end absolute bottom-4 px-4 ">
        {/* <Image
          src="/images/CW-Corp.svg"
          alt="company logo"
          width={64}
          height={64}
          className="object-contain w-16 h-16 text-orange-400"
          //priority
        /> */}
        {/* <p className="mx-2">👾</p> */}
        {/* <p className="uppercase font-black text-xs font-geistMono italic  text-zinc-500 ">
          Clown Ware®
        </p> */}
      </footer>
    </div>
  );
};

export default page;
