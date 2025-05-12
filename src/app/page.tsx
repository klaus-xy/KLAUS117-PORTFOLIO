import StartupScreen from "@/components/ui/loaders/startup-screen";

export default function Home() {
  console.log("Updated page");

  return (
    // <div className="h-screen flex flex-col justify-between items-start p-7 font-mono text-base ">
    <div className=" bg-red-500 flex flex-col flex-1  ">
      <StartupScreen />

      {/* <div className="flex-1 bg-yellow-500">
        <div className="w-16  bg-slate-400">1</div>
      </div> */}
    </div>
  );
}
