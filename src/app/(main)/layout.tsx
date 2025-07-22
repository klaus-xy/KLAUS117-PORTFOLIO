import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="container mx-auto font-geistMono">
      {children}
      <footer>Footer</footer>
    </main>
  );
};

export default layout;
