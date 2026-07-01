import React from "react";

interface ListProps {
  icon: string;
  list: string[];
}

const FooterList = ({ icon = "🔨", list }: ListProps) => {
  return (
    <div className="min-w-28">
      <h4 className="">[::\{icon}]</h4>
      <ul className="text-left text-xs text-terminal-green ">
        {list?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
