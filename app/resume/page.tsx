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
          Add a concise, recruiter-friendly summary here: roles, strengths, and preferred domains.
        </p>
      </div>
    </section>
  );
}
