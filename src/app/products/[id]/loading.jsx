export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 animate-pulse">
      <div className="h-96 bg-gray-200 rounded-lg mb-6" />
      <div className="h-8 bg-gray-500 w-1/2 mb-4" />
      <div className="h-4 bg-gray-700 w-3/4 mb-2" />
      <div className="h-4 bg-gray-800 w-2/3" />
    </div>
  );
}
