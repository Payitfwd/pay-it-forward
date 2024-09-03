import BeautifulCounter from "@/components/BeautifulCounter";
import GoalTracker from "@/components/GoalTracker";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 justify-center">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold text-white mt-2 mb-2 text-center">
          Paytifwd
        </h2>
        <h2 className="text-2xl font-bold text-white mt-2 text-center">
          Goal Tracker
        </h2>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
          (This goal tracker is for features of the site, not for you so
        </p>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4">
          dont message me that checkboxes are not working)
        </p>

        <GoalTracker />
        <div className="mt-4 w-full flex flex-col gap-4 items-center">
          <p className="text-2xl">Meanwhile, play with this counter</p>
          <BeautifulCounter />
        </div>
      </div>
    </main>
  );
}
