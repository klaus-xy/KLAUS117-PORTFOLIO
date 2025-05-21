"use client";

import { Eye } from "lucide-react";
import { useState } from "react";

const names = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"];
const test = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredNames, setFilteredNames] = useState<string[]>(names);
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  console.log("showPassword", showPassword);
  const HandleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setFilteredNames(
      names.filter((name) => name.toLowerCase().includes(e.target.value))
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
    </div>
  );
};

export default test;
