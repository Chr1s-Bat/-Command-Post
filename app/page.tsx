// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 max-w-3xl">
      <h1 className="text-3xl font-bold">
        Reporting for duty: Christian G. Babatuan
      </h1>
      <p className="mt-4">
        Welcome to my command post. I am a BSIT-3 student building web
        systems the military way: clear orders, small steps, and a check after
        every move.
      </p>
      <p className="mt-2">
        Review my mission log to see what I have been working on.
      </p>
      <Link href="/projects" className="inline-block mt-6 underline">
        View my missions
      </Link>
    </main>
  );
}
