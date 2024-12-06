import Image from "next/image";

export default function Home() {
  console.log("ndsndns");
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-helveticaNeue text-2xl">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        I N I T I A L I Z I N G . . .
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
