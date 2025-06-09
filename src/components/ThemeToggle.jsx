"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-full w-10 h-10"
        aria-label="Toggle Dark Mode"
      ></button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`p-2 rounded-full transition-colors duration-200 ${
        theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"
      }`}
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? (
        <Sun size={20} className="text-yellow-500 transition-transform duration-300 hover:rotate-90" />
      ) : (
        <Moon size={20} className="text-gray-800 transition-transform duration-300 hover:-rotate-90" />
      )}
    </button>
  );
}
