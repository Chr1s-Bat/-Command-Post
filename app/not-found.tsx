// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-extrabold uppercase text-red-800">
        Target not found
      </h1>
      <p className="mt-4 text-lg">
        This location is not on the map, soldier. Return to base.
      </p>
      <Link href="/" className="inline-block mt-6 underline">
        Back to Home
      </Link>
    </main>
  );
}
