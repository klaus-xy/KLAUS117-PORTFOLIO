"use client";

import { useEffect } from "react";

const Presence = () => {
  useEffect(() => {
    console.log(
      "%cCODED BY ::// KLAUS117 🧛🏽‍♂️",
      "color:#FF8000; background:#1a1a1a; padding:16px 36px; border-radius:6px; ",
    );
    // console.log(
    //   `%c
    //   ┌───────────────────────────────┐
    //   │   Coded by Klaus117 💻        │
    //   └───────────────────────────────┘
    //   `,
    //   "color: #00ffd0; background: #111; font-family: monospace; padding: 8px; border-radius: 8px;"
    // );
  }, []);

  return null;
};

export default Presence;
