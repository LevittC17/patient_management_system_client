"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 w-full"
    >
      {theme === "dark" ? (
        <>
          <Sun className="mr-3 h-5 w-5" />
          Light Mode
        </>
      ) : (
        <>
          <Moon className="mr-3 h-5 w-5" />
          Dark Mode
        </>
      )}
      <div className="ml-auto">
        <div className={`w-8 h-4 rounded-full transition-colors ${theme === "dark" ? "bg-primary" : "bg-gray-200"}`} />
      </div>
    </button>
  )
}