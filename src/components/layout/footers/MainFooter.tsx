import React from "react";
import FooterList from "./footer-list";

const FooterItems = [
  {
    icon: "👩🏽‍💻",
    lists: [
      "Tailwind",
      "Typescript",
      "React.js",
      "Next.js",
      "Shadcn",
      "Motion",
      "React Three-Fibre",
    ],
  },
  {
    icon: "🍵",
    lists: [
      "245 litres of coffee",
      "25 hrs of hair pulling",
      "multiple crashouts",
      "10 hours of sleep",
    ],
  },
  {
    icon: "🎶",
    lists: [
      "Prairies ::/ 347 Aidan",
      "DJ Twise ::/ Mixtape",
      "Klaus117 ::/ Playlist",
    ],
  },
  {
    icon: "🎮",
    lists: ["Valorant", "Hollow Knight", "Silk Song", "Project ::/ Zero"],
  },
  {
    icon: "🧑🏽‍🎤",
    lists: ["Jujustu Kaisen", "Solo Leveling", "Demon Slayer", "Misoku Tensei"],
  },
  {
    icon: "🎶",
    lists: ["", "", "", ""],
  },
];

const MainFooter = () => {
  return (
    <footer className="w-full min-h-[30vh] flex flex-col justify-center items-center text-xs uppercase font-mono">
      <p>Made with ❤️</p>
      <p>and</p>

      {/* Container for everything from tool to playlist listened to during dev to  */}
      <div className="w-full grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-24 justify-between p-4 mx-auto max-w-3xl">
        {FooterItems.map((item, index) => (
          <FooterList key={index} icon={item.icon} list={item.lists} />
        ))}
      </div>
      <p>
        by :: <span className="text-terminal-green">Klaus 117</span>
      </p>
      <p className="text-xs text-gray-600">(C) 2026 Clown ware corporation</p>
    </footer>
  );
};

export default MainFooter;
