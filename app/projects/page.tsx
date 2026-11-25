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
    <main className="p-8 max-w-3xl">
      <h1 className="text-2xl font-bold">Projects: Mission Log</h1>
      <ul className="mt-4 space-y-3">
        {projects.map((project) => (
          <li key={project.id}>
            <p className="font-semibold">{project.name}</p>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
