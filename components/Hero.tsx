"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import TiltCard from "./TiltCard";

const sequence = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const [spot, setSpot] = useState({ x: 50, y: 30 });

  const handleMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpot({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  return (
    <section
      id="top"
      onMouseMove={handleMove}
      className="relative overflow-hidden border-b border-line"
      style={{
        backgroundImage: `radial-gradient(600px circle at ${spot.x}% ${spot.y}%, rgba(30,111,99,0.12), transparent 70%)`,
      }}
    >
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-28">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12, delayChildren: 0.05 }}
        >
          <motion.p
            variants={sequence}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-accent"
          >
            IT Support Specialist &amp; Web Developer
          </motion.p>
          <motion.h1
            variants={sequence}
            transition={{ duration: 0.5 }}
            className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-ink md:text-6xl"
          >
            James Oliver Smith
          </motion.h1>
          <motion.p
  variants={sequence}
  transition={{ duration: 0.5 }}
  className="mt-6 max-w-[46ch] text-lg leading-relaxed text-muted"
>
  I keep people's systems running and I build the software behind
  them. I've resolved help desk tickets, managed user accounts and
  security across Microsoft 365 and Google Workspace, and led
  onboarding and offboarding from end to end — and I bring that
  same troubleshooting mindset to building full-stack applications
  with Go, Next.js, and PostgreSQL.
</motion.p>
          <motion.div
            variants={sequence}
            transition={{ duration: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-md bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent-dark"
            >
              See my work
            </a>
            <a
              href="/resume.pdf"
              download
              className="rounded-md border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Download resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="group mx-auto w-full max-w-[320px]"
        >
          <TiltCard className="group rounded-2xl border border-line bg-surface p-3 shadow-[0_20px_50px_-25px_rgba(18,22,27,0.35)]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
              <Image
                src="/profile.jpg"
                alt="Portrait of James Oliver Smith"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 320px"
              />
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
