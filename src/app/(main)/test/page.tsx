"use client";

import { Eye } from "lucide-react";
//import { animate } from "motion";
import { motion, useAnimate } from "motion/react";
import { useState } from "react";

const names = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"];
const Test = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredNames, setFilteredNames] = useState<string[]>(names);
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  const [scope, animate] = useAnimate();

  console.log("showPassword", showPassword);
  const HandleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setFilteredNames(
      names.filter((name) => name.toLowerCase().includes(e.target.value))
    );
  };

  const HandleAnimate = async () => {
    await animate(scope.current, { rotate: 360 }, { duration: 1 });
    await animate(
      scope.current,
      { x: 500 },
      { duration: 2, repeat: Infinity, repeatType: "reverse" }
    );
  };

  return (
    <div className="font-departureMono m-5">
      <div className=" flex gap-2 mb-4">
        <label htmlFor="name-search">Search</label>
        <input
          id="name-search"
          type={"text"}
          placeholder={"Type a name to search"}
          value={searchTerm}
          onChange={HandleSearch}
          aria-roledescription="search bar"
          className="text-black px-1 min-w-60"
        />
      </div>

      <h1 className="text-orange-500 text-xl underline">Names</h1>
      <ol className="list-decimal ml-5">
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ol>

      <div className=" flex gap-2 mt-4 max-w-96 relative">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder={"Enter your password"}
          className="text-black px-1 min-w-[300px]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Eye
          className={`absolute right-0 top-0 ${
            showPassword ? "text-orange-500" : "text-zinc-600"
          }`}
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>

      <div className="w-full h-32 bg-slate-400">
        <motion.div
          className="w-20 h-20 mt-10 bg-pink-500 flex justify-center items-center"
          // animate={{ rotate: 360 }}
          // transition={{ duration: 10 }}
          ref={scope}
        >
          Cube
        </motion.div>
      </div>

      <button
        className="bg-pink-300 p-2 my-4 rounded-xl"
        onClick={HandleAnimate}
      >
        Animate
      </button>
    </div>
  );
};

export default Test;
