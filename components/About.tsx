const facts = [
  { label: "Based in", value: "Bay, Laguna, Philippines" },
  { label: "Currently", value: "OJT Developer, Bakawan Data Analytics" },
  { label: "Certified", value: "NC II — Contact Center Services" },
  { label: "Studying", value: "BS Information Systems, CARD-MRI" },
];

export default function About() {
  return (
    <section id="about" className="border-b border-line bg-surface">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-10">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            About
          </h2>
          <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-muted">
            I'm an adaptable Information Systems graduate and Level 1 help
            desk specialist with hands-on experience providing remote and
            on-site technical support over email, chat, and ticketing
            systems. I'm skilled at resolving hardware, software, printer,
            and connectivity issues, and at managing user accounts, password
            resets, and license allocation across Microsoft 365 and Google
            Workspace.
          </p>
          <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-muted">
            Alongside support work, I have a track record of running smooth
            onboarding and offboarding, maintaining IT asset inventories,
            configuring business mailboxes, and supporting MFA and other
            security protocols — and I'm now applying that same
            problem-solving to building web applications.
          </p>
        </div>
        <dl className="grid grid-cols-1 gap-6 self-start sm:grid-cols-2">
          {facts.map((fact) => (
            <div key={fact.label} className="border-l-2 border-line pl-4">
              <dt className="font-mono text-xs text-muted">{fact.label}</dt>
              <dd className="mt-1 text-sm font-medium text-ink">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
