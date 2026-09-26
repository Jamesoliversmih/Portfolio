const groups = [
  {
    category: "IT Support",
    items: [
      "Level 1 Help Desk",
      "Ticketing Systems",
      "Remote Support",
      "Hardware & Software Troubleshooting",
      "Windows 10/11",
    ],
  },
  {
    category: "Accounts & Email",
    items: [
      "Microsoft 365",
      "Google Workspace",
      "Onboarding & Offboarding",
      "Password Resets & MFA",
    ],
  },
  {
    category: "Development & QA",
    items: [
      "Go",
      "Next.js",
      "PostgreSQL / pgAdmin",
      "Frontend & Backend Development",
      "Software Testing",
      "Bug Tracking",
    ],
  },
  {
    category: "Professional",
    items: [
      "Communication",
      "Customer Service",
      "Documentation",
      "Project Planning",
      "Team Coordination",
      "Leadership",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">
          Skills
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2">
          {groups.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-xs text-muted">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
