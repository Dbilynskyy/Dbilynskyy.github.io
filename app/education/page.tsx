import { education } from "@/content/education";

function GradeList({ grades }: { grades?: { label: string; value: string }[] }) {
  if (!grades?.length) return null;
  return (
    <div className="mt-4 grid gap-2">
      {grades.map((g) => (
        <div
          key={g.label}
          className="flex items-center justify-between rounded-xl border px-4 py-3 text-sm"
          style={{ borderColor: "var(--border)" }}
        >
          <span style={{ color: "var(--muted)" }}>{g.label}</span>
          <span className="font-medium" style={{ color: "var(--text)" }}>
            {g.value}
          </span>
        </div>
      ))}
    </div>
  );
}

function MediaGrid({ media }: { media?: { type: "image"; src: string; alt: string }[] }) {
  if (!media?.length) return null;
  return (
    <div className="grid grid-cols-2 gap-3">
      {media.map((m) => (
        <div
          key={m.src}
          className="rounded-2xl border p-2"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}
        >
          <img
            src={m.src}
            alt={m.alt}
            loading="lazy"
            className="h-32 w-full rounded-xl border object-cover md:h-36"
            style={{ borderColor: "var(--border)" }}
          />
          <p className="mt-2 text-xs" style={{ color: "var(--muted)" }}>
            {m.alt}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function EducationPage() {
  const uni = education.find((e) => e.level === "University");
  const sixthForm = education.find((e) => e.level === "Sixth Form");
  const secondary = education.find((e) => e.level === "Secondary School");

  return (
    <section className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Education</h1>
        <p style={{ color: "var(--muted)" }}>
          Academic background and selected modules/grades.
        </p>
      </header>

      {/* University section (mirrors old top block: text + media) */}
      {uni && (
        <article
          className="rounded-2xl border p-6 md:p-8"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold">{uni.institution.toUpperCase()}</h2>
                <p className="text-sm font-medium" style={{ color: "var(--muted)" }}>
                  {uni.program}
                </p>
                {uni.period && (
                  <p className="text-sm" style={{ color: "var(--muted)" }}>
                    {uni.period}
                  </p>
                )}
              </div>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm" style={{ color: "var(--muted)" }}>
                {uni.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>

            <MediaGrid media={uni.media} />
          </div>
        </article>
      )}

      {/* Sixth form + secondary side-by-side (mirrors old bottom block) */}
      <div className="grid gap-6 md:grid-cols-2">
        {sixthForm && (
          <article
            className="rounded-2xl border p-6 md:p-8"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold">{sixthForm.institution.toUpperCase()}</h2>
              <p className="text-sm font-medium" style={{ color: "var(--muted)" }}>
                {sixthForm.program.toUpperCase()}
              </p>
            </div>

            <ul className="mt-4 list-disc pl-5 text-sm" style={{ color: "var(--muted)" }}>
              {sixthForm.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <GradeList grades={sixthForm.grades} />
          </article>
        )}

        {secondary && (
          <article
            className="rounded-2xl border p-6 md:p-8"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold">{secondary.institution.toUpperCase()}</h2>
              <p className="text-sm font-medium" style={{ color: "var(--muted)" }}>
                {secondary.program.toUpperCase()}
              </p>
            </div>

            <ul className="mt-4 list-disc pl-5 text-sm" style={{ color: "var(--muted)" }}>
              {secondary.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <GradeList grades={secondary.grades} />
          </article>
        )}
      </div>
    </section>
  );
}
