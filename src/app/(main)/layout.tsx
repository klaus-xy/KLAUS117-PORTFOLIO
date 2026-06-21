import Cursor from "@/components/cursor";
import ConstructionFooter from "@/components/layout/footers/ConstructionFooter";
import MainHeader from "@/components/layout/headers/MainHeader";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className=" font-helvetica-neue">
      <Cursor />
      <MainHeader />
      {children}
      {/* <ConstructionFooter /> */}
    </main>
  );
};

export default layout;
