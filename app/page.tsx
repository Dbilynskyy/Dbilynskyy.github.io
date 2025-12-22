import Link from "next/link";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <div className="space-y-20">
      {/* HERO */}
      <section className="grid gap-12 md:grid-cols-2 md:items-center">
        {/* Left: Text */}
        <div className="space-y-6">
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            {site.role} • {site.location}
          </p>

          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            {site.hero.headline}
          </h1>

          <p
            className="max-w-xl text-base md:text-lg"
            style={{ color: "var(--muted)" }}
          >
            {site.hero.subheadline}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-xl px-5 py-3 text-sm font-medium"
              style={{ background: "var(--primary)", color: "white" }}
            >
              View projects
            </Link>

            <Link
              href="/resume"
              className="rounded-xl border px-5 py-3 text-sm font-medium"
              style={{ borderColor: "var(--border)" }}
            >
              Download CV
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border px-5 py-3 text-sm font-medium"
              style={{ borderColor: "var(--border)" }}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div
            className="relative aspect-square w-56 overflow-hidden rounded-2xl border md:w-72"
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
            }}
          >
            <img
              src="/images/profile.webp"
              alt="Profile photo"
              width={288}
              height={288}
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />

          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold">Featured projects</h2>
          <Link
            href="/projects"
            className="text-sm"
            style={{ color: "var(--primary)" }}
          >
            See all →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="rounded-2xl border p-6 transition hover:translate-y-[-2px]"
              style={{
                borderColor: "var(--border)",
                background: "var(--surface)",
              }}
            >
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                {p.subtitle}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.skills.slice(0, 4).map((s) => (
                  <span
                    key={s}
                    className="rounded-full border px-2 py-1 text-xs"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--muted)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
