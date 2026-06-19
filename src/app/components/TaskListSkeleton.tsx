export default function TaskSkeleton() {
  return (
    <div className="space-y-3 animate-pulse">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="h-14 rounded bg-gray-200" />
      ))}
    </div>
  );
}
