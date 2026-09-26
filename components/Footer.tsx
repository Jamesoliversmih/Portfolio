export default function Footer() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-2 px-6 py-8 text-xs text-muted md:flex-row md:items-center md:px-10">
        <p>© {new Date().getFullYear()} James Oliver Smith.</p>
        <p className="font-mono">Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
