"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, FileText, DollarSign, Database, BarChart2, Share2, Settings, HelpCircle } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

const mainMenuLinks = [
  { href: "/", icon: Home, label: "Dashboard" },
  { href: "/patients", icon: Users, label: "Patients" },
  { href: "/compliance", icon: FileText, label: "Compliance" },
  { href: "/financial", icon: DollarSign, label: "Financial" },
]

const teamManagementLinks = [
  { href: "/data-integrity", icon: Database, label: "Data Integrity" },
  { href: "/reports", icon: BarChart2, label: "Report" },
  { href: "/interoperability", icon: Share2, label: "Interoperability" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-60 bg-white dark:bg-gray-800 border-r dark:border-gray-700 h-screen flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary dark:text-primary">Pluscare</span>
        </div>
      </div>
      <div className="flex-1 px-4">
        <div className="space-y-1">
          <h2 className="px-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            MAIN MENU
          </h2>
          <nav className="space-y-1">
            {mainMenuLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  pathname === link.href
                    ? "bg-gray-50 dark:bg-gray-700 text-primary dark:text-primary"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                <link.icon className="mr-3 h-5 w-5" />
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8">
          <h2 className="px-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            TEAM MANAGEMENT
          </h2>
          <nav className="mt-2 space-y-1">
            {teamManagementLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  pathname === link.href
                    ? "bg-gray-50 dark:bg-gray-700 text-primary dark:text-primary"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                <link.icon className="mr-3 h-5 w-5" />
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="p-4 border-t dark:border-gray-700">
        <nav className="space-y-1">
          <Link
            href="/settings"
            className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
              pathname === "/settings"
                ? "bg-gray-50 dark:bg-gray-700 text-primary dark:text-primary"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </Link>
          <Link
            href="/help"
            className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
              pathname === "/help"
                ? "bg-gray-50 dark:bg-gray-700 text-primary dark:text-primary"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            <HelpCircle className="mr-3 h-5 w-5" />
            Help & Center
          </Link>
          <ThemeToggle />
        </nav>
        <div className="mt-4 flex items-center">
          <div className="flex-shrink-0">
            <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Ali Husni</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Super Admin</p>
          </div>
        </div>
      </div>
    </div>
  )
}