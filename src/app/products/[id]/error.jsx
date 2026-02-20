"use client";

export default function Error({ error, reset }) {
  return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-semibold mb-4">Something went wrong.</h2>

      <button
        onClick={() => reset()}
        className="bg-black text-white px-6 py-2 rounded"
      >
        Try Again
      </button>
    </div>
  );
}
