import StartupScreen from "@/components/loaders/startup-screen";

export default function Home() {
  console.log("Updated page");

  return (
    <div className="flex flex-col flex-1">
      <StartupScreen />
    </div>
  );
}
