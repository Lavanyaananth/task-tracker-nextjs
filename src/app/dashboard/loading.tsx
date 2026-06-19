// export default function Loading() {
//   return (
//     <div className="space-y-3">
//       {[...Array(5)].map((_, i) => (
//         <div key={i} className="h-12 bg-gray-100 rounded-lg animate-pulse" />
//       ))}
//     </div>
//   );
// }
export default function Loading() {
  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold">Loading dashboard...</h2>
    </div>
  );
}
