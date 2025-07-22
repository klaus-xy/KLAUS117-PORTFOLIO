import StartupScreen from "@/components/loaders/startup-screen";

export default function Home() {
  console.log("Updated page");

  return (
    <div className=" bg-red-500 flex flex-col flex-1  ">
      <StartupScreen />
    </div>
  );
}
