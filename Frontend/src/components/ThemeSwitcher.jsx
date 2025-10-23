import { useThemeStore } from "../store/themeStore";
import { Sun, Moon } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full flex items-center bg-gray-200 dark:bg-gray-700 transition-colors"
      title="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="text-yellow-400 w-5 h-5" />
      ) : (
        <Moon className="text-gray-900 w-5 h-5" />
      )}
    </button>
  );
}
