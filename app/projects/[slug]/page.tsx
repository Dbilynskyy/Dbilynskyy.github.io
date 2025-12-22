import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <article className="space-y-10">
      <Link href="/projects" className="text-sm" style={{ color: "var(--primary)" }}>
        ← Back to projects
      </Link>

      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">{project.title}</h1>
        <p className="text-sm font-medium" style={{ color: "var(--muted)" }}>
          {project.subtitle}
        </p>
        <p className="max-w-3xl text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          {project.summary}
        </p>
      </header>

      <section
        className="rounded-2xl border p-6"
        style={{ borderColor: "var(--border)", background: "var(--surface)" }}
      >
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.skills.map((s) => (
            <span
              key={s}
              className="rounded-full border px-2 py-1 text-xs"
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Screenshots</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {project.media.map((m: any) => {
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
                  </video>
                  <p className="mt-2 text-xs" style={{ color: "var(--muted)" }}>
                    {m.alt}
                  </p>
                </div>
              );
            }

            return (
              <img
                key={m.src}
                src={m.src}
                alt={m.alt}
                loading="lazy"
                className="w-full rounded-xl border object-cover"
                style={{ borderColor: "var(--border)", background: "var(--surface)" }}
              />
            );
          })}
        </div>
      </section>

      {(project.links ?? []).length > 0 && (
        <section className="flex flex-wrap gap-3">
          {project.links!.map((l) => (
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
        </section>
      )}
    </article>
  );
}
