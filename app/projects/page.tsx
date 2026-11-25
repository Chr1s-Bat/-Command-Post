// app/projects/page.tsx
export const metadata = { title: "Missions | Christian G. Babatuan" };

const projects = [
  {
    id: 1,
    name: "Operation Checkpoint",
    description: "A gate-pass logger that records who enters and leaves a base.",
  },
  {
    id: 2,
    name: "Supply Line Tracker",
    description: "An inventory app that tracks rations, fuel, and equipment.",
  },
  {
    id: 3,
    name: "Command Post Dashboard",
    description: "A status board showing unit readiness and daily orders.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-extrabold uppercase tracking-wide text-green-900">
        Projects: Mission Log
      </h1>
      <ul className="mt-6 space-y-4">
        {projects.map((project) => (
          <li
            key={project.id}
            className="rounded border-l-8 border-green-900 bg-stone-100 p-4 shadow"
          >
            <p className="font-bold uppercase text-green-900">
              Mission {project.id}: {project.name}
            </p>
            <p className="mt-1">{project.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
