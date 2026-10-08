import { Button } from "@/components/ui/button";
import TransitionLink from "@/components/transition-link";
import React from "react";

const notFound = () => {
  return (
    <div className="h-full flex flex-1 flex-col gap-4 justify-center items-center ">
      <h1 className="font-eurostile ">[404]</h1>
      <p className="font-departure-mono text-terminal-green">
        That's weird... You're not meant to be here.
      </p>
      <Button variant={"link"}>
        <TransitionLink href="/117" className="hover:cursor-pointer">
          🏠 Go Home
        </TransitionLink>
      </Button>
    </div>
  );
};

export default notFound;
