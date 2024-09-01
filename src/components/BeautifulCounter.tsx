"use client";

import { useState } from "react";

export default function BeautifulCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => Math.max(0, prev - 1));

  return (
    <div className="w-full max-w-md overflow-hidden rounded-lg shadow-lg">
      <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 flex flex-col items-center justify-center space-y-4">
        <div className="text-6xl font-bold text-white mb-2 transition-all duration-300 ease-in-out transform hover:scale-110">
          {count}
        </div>
        <div className="flex space-x-4">
          <button
            onClick={decrement}
            className="rounded-full w-12 h-12 bg-white text-purple-500 hover:bg-purple-100 transition-colors duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
            aria-label="Decrease"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
          </button>
          <button
            onClick={increment}
            className="rounded-full w-12 h-12 bg-white text-pink-500 hover:bg-pink-100 transition-colors duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50"
            aria-label="Increase"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
