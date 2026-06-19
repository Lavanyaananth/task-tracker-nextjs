import { Suspense } from "react";
import TaskList from "../components/TaskList";
import TaskListSkeleton from "../components/TaskListSkeleton";
import TaskCounter from "../components/TaskCounter/TaskCounter";
// async function delay() {
//   return new Promise((resolve) => setTimeout(resolve, 5000));
// }

export default async function DashboardPage() {
  // await delay();
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <p className="mb-8 text-gray-600">Welcome back!</p>
      <TaskCounter></TaskCounter>
      <Suspense fallback={<TaskListSkeleton />}>
        <TaskList />
      </Suspense>
    </div>
  );
}
