"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const initial = stored === "light" || stored === "dark" ? stored : "dark";
    document.documentElement.dataset.theme = initial;
    setTheme(initial);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("theme", next);
    setTheme(next);
  }

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        aria-describedby="theme-toggle-hint"
        className="rounded-xl border px-3 py-2 text-sm"
        style={{ borderColor: "var(--border)", color: "var(--text)" }}
      >
        {theme === "dark" ? "Light" : "Dark"}
      </button>
      <span id="theme-toggle-hint" className="sr-only">
        Toggles between light and dark theme
      </span>
    </>
  );
}
