const GOALS = [
  { goal: "Company wise reported DSA questions", completed: true },
  {
    goal: " DSA map from 0 to 100, topics with theory and problems. ",
    completed: false,
  },
  { goal: "Self mock interviews", completed: false },
  {
    goal: "Something like css battles? Stretch goal really ",
    completed: false,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl">Goals</h1>
      <ul>
        {GOALS.map(({ goal, completed }, index) => (
          <div key={index} className="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              checked={completed}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {goal}
            </label>
          </div>
        ))}
      </ul>
    </main>
  );
}
