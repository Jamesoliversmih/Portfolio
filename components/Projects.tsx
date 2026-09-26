import TiltCard from "./TiltCard";

const projects = [
  {
    name: "BudgetLens AI",
    role: "Capstone Project",
    description:
      "A financial management mobile application that tracks user spending and sends automated reminders for daily expenses and budget limits.",
    stack: ["Mobile App", "Budgeting", "Automated Reminders"],
  },
  {
    name: "PLSP Med System",
    role: "Bakawan Data Analytics Inc.",
    description:
      "A clinic management system that lets doctors and nurses systematically organize and manage student medical examinations, built during an on-the-job development role covering frontend, backend, and database work.",
    stack: ["Frontend", "Backend", "Database Design"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">
          Projects
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <TiltCard
              key={project.name}
              maxTilt={6}
              className="rounded-2xl border border-line bg-paper p-8"
            >
              <p className="font-mono text-xs text-accent">{project.role}</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">
                {project.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
