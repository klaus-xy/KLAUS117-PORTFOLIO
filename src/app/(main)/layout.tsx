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
    <main className="container mx-auto font-geist-mono">
      <Cursor />
      <MainHeader />
      {children}
      {/* <ConstructionFooter /> */}
    </main>
  );
};

export default layout;
