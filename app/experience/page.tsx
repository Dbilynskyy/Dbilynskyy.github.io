import { experience } from "@/content/experience";

function SkillTags({ skills }: { skills?: string[] }) {
  if (!skills?.length) return null;
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {skills.map((s) => (
        <span
          key={s}
          className="rounded-full border px-2 py-1 text-xs"
          style={{ borderColor: "var(--border)", color: "var(--muted)" }}
        >
          {s}
        </span>
      ))}
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <section className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Professional Experience</h1>
        <p style={{ color: "var(--muted)" }}>
          Industry experience, leadership roles, and practical work across software engineering,
          Web3, education, and client-facing environments.
        </p>
      </header>

      <div className="space-y-8">
        {experience.map((exp) => (
          <div key={exp.id} className="space-y-4">
            {/* Role / org / period */}
            <div>
              <h2 className="text-xl font-semibold">
                {exp.role} · {exp.organisation}
              </h2>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                {exp.period}
              </p>
            </div>

            {/* Description bullets */}
            <ul className="list-disc space-y-2 pl-5">
              {exp.description.map((d, i) => (
                <li key={i} className="text-sm">
                  {d}
                </li>
              ))}
            </ul>

            {/* ✅ Selected client work (FIXED) */}
            {exp.links && exp.links.length > 0 && (
              <div className="mt-4 space-y-2">
                <p className="text-sm font-medium" style={{ color: "var(--muted)" }}>
                  Selected client work
                </p>

                <div className="flex flex-wrap gap-3">
                  {exp.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-xl border px-4 py-3 text-sm transition"
                      style={{
                        borderColor: "var(--border)",
                        background: "var(--surface)"
                      }}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-medium">{link.label}</span>
                        <span
                          className="text-xs transition group-hover:translate-x-0.5"
                          style={{ color: "var(--muted)" }}
                        >
                          ↗
                        </span>
                      </div>

                      {link.description && (
                        <p className="mt-1 text-xs" style={{ color: "var(--muted)" }}>
                          {link.description}
                        </p>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border px-2 py-1 text-xs"
                  style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
