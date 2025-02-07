import { Search, Bell, Share } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="border-b bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="flex h-16 items-center px-4 gap-4">
        <h1 className="text-xl font-semibold">Patients</h1>
        <div className="flex-1">
          <div className="relative max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <input
              type="search"
              placeholder="Search here..."
              className="w-full bg-white dark:bg-gray-800 pl-9 pr-4 py-2 text-sm border dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:text-gray-300"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
            <Bell className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
            <Share className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>
          <button className="text-sm font-medium">Manage Widgets</button>
        </div>
      </div>
    </header>
  )
}