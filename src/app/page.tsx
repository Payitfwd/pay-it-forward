import BeautifulCounter from "@/components/BeautifulCounter";
import GoalTracker from "@/components/GoalTracker";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 justify-center">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold text-white mt-2 mb-4 text-center">
          Goal Tracker
        </h2>
        <GoalTracker />
        <div className="mt-4 flex flex-col gap-4 items-center">
          <p className="text-2xl">Meanwhile, play with this counter</p>
          <BeautifulCounter />
        </div>
      </div>
    </main>
  );
}
