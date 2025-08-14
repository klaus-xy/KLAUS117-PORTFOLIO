import ConstructionFooter from "@/components/layout/footers/ConstructionFooter";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="container mx-auto font-geist-mono">
      {children}

      <ConstructionFooter />
    </main>
  );
};

export default layout;
