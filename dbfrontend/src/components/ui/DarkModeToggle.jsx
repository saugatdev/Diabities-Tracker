import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  // Check if user's system prefers dark mode initially
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Get initial theme state
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark" || (systemPrefersDark && !localStorage.getItem("theme"))
  );

  // Toggle dark mode and save preference
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  // Apply saved theme on load
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <button onClick={toggleDarkMode} className="p-2 bg-gray-200 dark:bg-gray-800 rounded">
      {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
