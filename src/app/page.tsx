import { DashboardHeader } from "@/components/dashboard-header"

export default function Home() {
  return (
    <div className="h-full">
      <DashboardHeader />
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
        {/* Add more dashboard content here */}
      </div>
    </div>
  )
}