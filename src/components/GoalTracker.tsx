interface Goal {
  id: number;
  title: string;
  completed: boolean;
}
const GOALS = [
  { id: 1, title: "Company wise reported DSA questions", completed: false },
  {
    id: 2,
    title: " DSA map from 0 to 100, topics with theory and problems. ",
    completed: false,
  },
  { id: 3, title: "Self mock interviews", completed: false },
  {
    id: 4,
    title: "Something like css battles? Stretch goal really ",
    completed: false,
  },
];
export default function GoalTracker() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-purple-500 to-pink-500 p-6">
      <ul className="space-y-3">
        {GOALS.map((goal) => (
          <li
            key={goal.id}
            className="flex items-center bg-white bg-opacity-20 rounded-lg p-3 transition-all duration-300 hover:bg-opacity-30"
          >
            <input
              type="checkbox"
              checked={goal.completed}
              className="form-checkbox h-5 w-5 text-pink-500 rounded border-white border-2 focus:ring-pink-400 focus:ring-opacity-50 bg-transparent"
            />
            <span
              className={`ml-3 text-lg ${
                goal.completed ? "line-through text-gray-300" : "text-white"
              }`}
            >
              {goal.title}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-center">
        <p className="text-white text-lg">
          Completed: {GOALS.filter((goal) => goal.completed).length} /{" "}
          {GOALS.length}
        </p>
      </div>
    </div>
  );
}
