export function Footer() {
  return (
    <footer className="mt-16 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm" style={{ color: "var(--muted)" }}>
        <div>© {new Date().getFullYear()} Denys Bilynskyy. All rights reserved.</div>
      </div>
    </footer>
  );
}
