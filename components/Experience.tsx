const roles = [
  {
    company: "AngkolTech",
    companyUrl: "https://angkoltech.com",
    title: "Technical IT Support / Technical Virtual Assistant",
    location: "Davao City (Remote)",
    period: "Mar 2026 — Aug 2026",
    bullets: [
      "First point of contact for client staff via email, chat, and remote sessions — resolved hardware, software, printer, and connectivity issues, escalating complex cases to senior engineers.",
      "Created, updated, and disabled user accounts in Microsoft 365 and Google Workspace; handled password resets, lockouts, group memberships, and license assignments.",
      "Ran onboarding and offboarding end to end: set up email, licenses, and shared drive access for new hires, then revoked access and transferred files for departing staff.",
      "Enrolled users in MFA, reported phishing and suspicious sign-ins, and maintained the IT asset and license inventory alongside how-to documentation for recurring issues.",
    ],
  },
  {
    company: "Bakawan Data Analytics Inc.",
    title: "On-the-Job Trainee (Developer)",
    location: "Bay, Laguna",
    period: "Present",
    bullets: [
      "Developed and supported the PLSP Med System, letting doctors and nurses organize and manage student medical examinations.",
      "Monitored the system in production, troubleshot issues, and performed software testing and bug tracking.",
      "Contributed across frontend, backend, and database work, and took part in project planning and stakeholder communication.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">
          Experience
        </h2>
        <div className="mt-10 space-y-12">
          {roles.map((role) => (
            <div
              key={role.company}
              className="grid grid-cols-1 gap-4 border-l-2 border-line pl-6 md:grid-cols-[0.9fr_2.1fr] md:gap-10"
            >
              <div>
                <p className="font-mono text-xs text-muted">{role.period}</p>
                <h3 className="mt-2 text-base font-semibold text-ink">
                  {role.title}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {role.companyUrl ? (
                    <a
                      href={role.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent transition-colors hover:text-accent-dark"
                    >
                      {role.company}
                    </a>
                  ) : (
                    role.company
                  )}{" "}
                  · {role.location}
                </p>
              </div>
              <ul className="space-y-3">
                {role.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-sm leading-relaxed text-muted"
                  >
                    {bullet}
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
