// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-extrabold uppercase tracking-wide text-green-900">
        Reporting for duty: Christian G. Babatuan
      </h1>
      <p className="mt-4 text-lg">
        Welcome to my command post. I am a BSIT-3 student building web
        systems the military way: clear orders, small steps, and a check after
        every move.
      </p>
      <p className="mt-2 text-lg">
        Review my mission log to see what I have been working on.
      </p>
      <Link
        href="/projects"
        className="inline-block mt-6 rounded bg-green-900 px-6 py-3 font-bold uppercase tracking-wider text-amber-100 hover:bg-green-800"
      >
        View my missions →
      </Link>
    </main>
  );
}
