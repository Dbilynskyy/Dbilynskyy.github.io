import { site } from "@/content/site";

export default function ContactPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p style={{ color: "var(--muted)" }}>
          The fastest way to reach me is email. If you prefer, use the form below.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <div
          className="rounded-2xl border p-6 space-y-3"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}
        >
          <div>
            <div className="text-sm font-medium">Email</div>
            <a className="text-sm" style={{ color: "var(--primary)" }} href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>

          <div>
            <div className="text-sm font-medium">Links</div>
            <div className="mt-2 flex flex-col gap-2 text-sm">
              <a style={{ color: "var(--primary)" }} href={site.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a style={{ color: "var(--primary)" }} href={site.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <form
          className="rounded-2xl border p-6 space-y-4"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          method="POST"
          action="https://formspree.io/f/YOUR_FORM_ID"
        >
          <div>
            <label className="text-sm font-medium" htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              required
              className="mt-2 w-full rounded-xl border px-3 py-2 text-sm"
              style={{ borderColor: "var(--border)", background: "transparent" }}
            />
          </div>

          <div>
            <label className="text-sm font-medium" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-xl border px-3 py-2 text-sm"
              style={{ borderColor: "var(--border)", background: "transparent" }}
            />
          </div>

          <div>
            <label className="text-sm font-medium" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="mt-2 w-full rounded-xl border px-3 py-2 text-sm"
              style={{ borderColor: "var(--border)", background: "transparent" }}
            />
          </div>

          <button
            className="rounded-xl px-4 py-3 text-sm font-medium"
            style={{ background: "var(--primary)", color: "white" }}
            type="submit"
          >
            Send message
          </button>

          <p className="text-xs" style={{ color: "var(--muted)" }}>
            Note: replace the form action with your Formspree/Basin endpoint.
          </p>
        </form>
      </div>
    </section>
  );
}
