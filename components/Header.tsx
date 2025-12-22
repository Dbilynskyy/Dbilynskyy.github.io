import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/education", label: "Education" },
    { href: "/experience", label: "Experience" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
];

export function Header() {
    return (
        <header className="border-b" style={{ borderColor: "var(--border)" }}>
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <Link href="/" className="font-semibold tracking-tight">
                    Denys Bilynskyy
                </Link>
                <nav className="hidden gap-5 md:flex">
                    {nav.map((n) => (
                        <Link key={n.href} href={n.href} className="text-sm" style={{ color: "var(--muted)" }}>
                            {n.label}
                        </Link>
                    ))}
                </nav>
                <a
                    href="#content"
                    className="sr-only focus:not-sr-only focus:rounded-lg focus:px-3 focus:py-2"
                    style={{ background: "var(--surface)", color: "var(--text)" }}
                >
                    Skip to content
                </a>

                <ThemeToggle />
            </div>
        </header>
    );
}
