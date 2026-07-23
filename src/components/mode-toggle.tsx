"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const subscribe = () => () => undefined;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const isNight = mounted && theme === "dark";
  const nextTheme = isNight ? "light" : "dark";
  const nextLabel = isNight ? "Day" : "Night Flight";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextLabel} theme`}
      suppressHydrationWarning
    >
      <span className="theme-toggle__orb" aria-hidden="true" />
      <span suppressHydrationWarning>{isNight ? "DAY" : "NIGHT FLIGHT"}</span>
    </button>
  );
}
