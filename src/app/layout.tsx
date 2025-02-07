import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/providers/theme-provider"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pluscare - Patient Management System",
  description: "Healthcare patient management dashboard",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex h-screen bg-white dark:bg-gray-900">
            {/* Sidebar will be added here later */}
            <main className="flex-1 overflow-auto bg-white dark:bg-gray-900">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}