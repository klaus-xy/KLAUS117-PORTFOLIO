import Cursor from "@/components/cursor";
import ConstructionFooter from "@/components/layout/footers/ConstructionFooter";
import GlobalHeader from "@/components/layout/headers/GlobalHeader";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="container mx-auto font-geist-mono">
      <Cursor />
      <GlobalHeader />
      {children}
      <ConstructionFooter />
    </main>
  );
};

export default layout;
