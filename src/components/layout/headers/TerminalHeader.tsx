import React from "react";
import { Separator } from "../../ui/separator";
//import { ClownWareIcon } from "@/components/icons/Icons";

const TerminalHeader = () => {
  return (
    <div className="w-full bg-zinc-90 mb-10">
      {/* LOGO */}
      <div className="flex justify-start items-end gap-4 pl-1 pr-3">
        <div className="uppercase text-center ">
          <h1 className="text-xl leading-8 tracking-[.25em]">
            Clown <br /> Ware
          </h1>
          <span className="text-[10px] tracking-[.25em] opacity-80">
            Corporation
          </span>
        </div>

        {/* COPYRIGHT INFO */}
        <div className="text-xs">(C) Copyright 2001-2025 Clown Ware Corp</div>
      </div>
      <Separator className="h-[2px] w-full bg-orange-500 rounded-full my-1" />

      {/* <ClownWareIcon
        className=""
        fill="#FF8000"
        width={"100px"}
        height={"100px"}
      /> */}
    </div>
  );
};

export default TerminalHeader;
