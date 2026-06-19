"use client"; // error.tsx must always be a client component

export default function Error({ error, reset }) {
  return (
    <div className="p-6 border border-red-200 rounded-lg">
      <h2 className="text-red-600 font-medium mb-2">Something went wrong</h2>
      <p className="text-sm text-gray-500 mb-4">{error.message}</p>
      <button onClick={reset} className="text-sm underline">
        Try again
      </button>
    </div>
  );
}
