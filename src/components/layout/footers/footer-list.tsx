import React from "react";

interface ListProps {
  icon: string;
  list: string[];
}

const FooterList = ({ icon = "🔨", list }: ListProps) => {
  return (
    <div className="min-w-28 ">
      <h4 className=" mb-2">[::\{icon}]</h4>
      <ul
        className="space-y-1.5 text-left text-xs text-terminal-green font-departure-mono
       "
      >
        {list?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
