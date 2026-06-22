import React from "react";

const MainFooter = () => {
  return (
    <footer className="w-full min-h-[30vh] flex flex-col justify-center items-center text-xs uppercase font-mono">
      <p>Made with ❤️</p>
      <p>and</p>

      {/* Container for everything from tool to playlist listened to during dev to  */}
      <div className="w-full flex flex-wrap justify-around items-start gap-4 p-4">
        <div>
          <h4>[🎶]</h4>
          <ul className="text-left text-xs">
            <li>245 litres of coffee</li>
            <li>25 hrs of hair pulling</li>
            <li>multiple crashouts</li>
            <li>10 hours of sleep</li>
          </ul>
        </div>
        <div>
          <h4>[🎶]</h4>
          <ul className="text-left text-xs">
            <li>Prairies ::/ 347 Aidan</li>
            <li>DJ Twise ::/ Mixtape</li>
            <li>Klaus117 ::/ Playlist</li>
          </ul>
        </div>
        <div>
          <h4>[🎶]</h4>
          <ul className="text-left text-xs">
            <li>Valorant</li>
            <li>Hollow Knight</li>
            <li>Silk Song</li>
            <li>Project ::/ Zero</li>
          </ul>
        </div>

        <div className=" ">
          <h4>[🎮]</h4>
          <ul className="text-left text-xs">
            <li>Jujustu Kaisen</li>
            <li>Solo Leveling</li>
            <li>Demon Slayer</li>
            <li>Misoku Tensei</li>
          </ul>
        </div>
      </div>
      <p>
        by :: <span className="text-terminal-green">Klaus 117</span>
      </p>
      <p className="text-xs text-gray-600">(C) 2026 Clown ware corporation</p>
    </footer>
  );
};

export default MainFooter;
