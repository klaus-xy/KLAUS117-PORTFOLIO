import Cursor from "@/components/cursor";
import ConstructionFooter from "@/components/layout/footers/ConstructionFooter";
import MainHeader from "@/components/layout/headers/MainHeader";
import Image from "next/image";
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
      <Image
        src="/images/load-icon-placeholder.png"
        alt="117"
        width={200}
        height={200}
        className="fixed bottom-0 right-0 z-50"
      />
    </main>
  );
};

export default layout;
