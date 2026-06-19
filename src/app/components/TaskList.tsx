import React from "react";

async function getTasks() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10",
    {
      cache: "no-store",
    },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch tasks");
  }
  return res.json();
}
export default async function TaskList() {
  const tasks = await getTasks();
  console.log(tasks);
  return (
    <ul className="space-y-3">
      {tasks.map((task: any) => (
        <li
          key={task.id}
          className="border rounded-lg p-4 flex justify-between"
        >
          <span>{task.title}</span>
          <span>{task.completed ? "✅" : "⏰"}</span>
        </li>
      ))}
    </ul>
  );
}
