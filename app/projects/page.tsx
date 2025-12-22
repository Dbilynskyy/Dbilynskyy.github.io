import Link from "next/link";
import { projects } from "@/content/projects";

function Skills({ skills }: { skills: string[] }) {
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

function MediaGrid({
  media,
}: {
  media: { type?: "image" | "video"; src: string; alt: string; poster?: string }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {media.map((m) => {
        const type = m.type ?? "image";
        if (type === "video") {
          return (
            <div
              key={m.src}
              className="rounded-2xl border p-2"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            >
              <video controls preload="metadata" poster={m.poster} className="w-full rounded-xl">
                <source src={m.src} />
                Sorry, your browser does not support embedded videos.
              </video>
              <p className="mt-2 text-xs" style={{ color: "var(--muted)" }}>
                {m.alt}
              </p>
            </div>
          );
        }

        return (
          <div
            key={m.src}
            className="rounded-2xl border p-2"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <img
              src={m.src}
              alt={m.alt}
              loading="lazy"
              className="w-full rounded-xl border object-cover"
              style={{ borderColor: "var(--border)" }}
            />
            <p className="mt-2 text-xs" style={{ color: "var(--muted)" }}>
              {m.alt}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <section className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p style={{ color: "var(--muted)" }}>
          Selected work. Each project includes a concise summary, key skills, and screenshots.
        </p>
      </header>

      <div className="space-y-10">
        {projects.map((p, idx) => {
          const reverseOnDesktop = idx % 2 === 1; // alternate like your old layout

          return (
            <article
              key={p.slug}
              className="rounded-2xl border p-6 md:p-8"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            >
              <div
                className={`grid gap-8 md:grid-cols-2 ${
                  reverseOnDesktop ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="space-y-3">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-semibold">{p.title.toUpperCase()}</h2>
                    <p className="text-sm font-medium" style={{ color: "var(--muted)" }}>
                      {p.subtitle.toUpperCase()}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {p.summary}
                  </p>

                  <p className="text-sm" style={{ color: "var(--muted)" }}>
                    <span className="font-medium" style={{ color: "var(--text)" }}>
                      Skills:
                    </span>{" "}
                    {p.skills.join(", ")}
                  </p>

                  <Skills skills={p.skills} />

                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href={`/projects/${p.slug}`}
                      className="rounded-xl px-4 py-3 text-sm font-medium"
                      style={{ background: "var(--primary)", color: "white" }}
                    >
                      View case study
                    </Link>

                    {(p.links ?? []).map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border px-4 py-3 text-sm font-medium"
                        style={{ borderColor: "var(--border)" }}
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                <MediaGrid media={p.media as any} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
