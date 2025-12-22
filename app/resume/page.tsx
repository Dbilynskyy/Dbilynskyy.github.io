export default function ResumePage() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Resume</h1>
        <p style={{ color: "var(--muted)" }}>
          Download a copy or view key highlights below.
        </p>
      </header>

      <div className="flex flex-wrap gap-3">
        <a
          href="/cv/cv.pdf"
          className="rounded-xl px-4 py-3 text-sm font-medium"
          style={{ background: "var(--primary)", color: "white" }}
        >
          Download CV (PDF)
        </a>
        <a
          href="/contact"
          className="rounded-xl border px-4 py-3 text-sm font-medium"
          style={{ borderColor: "var(--border)" }}
        >
          Contact me
        </a>
      </div>

      <div
        className="rounded-2xl border p-6"
        style={{ borderColor: "var(--border)", background: "var(--surface)" }}
      >
        <p style={{ color: "var(--muted)" }}>
          Full-stack software engineer experienced in building scalable backends and polished frontends using .NET (C#), Django/Python, and React/TypeScript. Strengths include clean architecture, performance optimisation, test-driven development, and production data/ML pipelines. Personal interests include Web3 and blockchain tooling, ML/NLP and data engineering, or end to end product delivery where I can contribute to system design, deployment, and cross functional collaboration.
        </p>

      </div>
    </section>
  );
}
