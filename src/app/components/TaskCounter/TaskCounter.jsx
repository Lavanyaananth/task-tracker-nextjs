"use client";
import { useState } from "react";
export default function TaskCounter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg w-fit">
      <p className="text-sm text-gray-500">Task completed</p>
      <span className="font-bold text-2xl">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="px-3 py-1 bg-black text-white rounded text-sm cursor-pointer"
      >
        + Done{" "}
      </button>
    </div>
  );
}
