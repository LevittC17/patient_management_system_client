import { DashboardHeader } from "@/components/dashboard-header"
import { StatsCards } from "@/components/stats-cards"

export default function Home() {
  return (
    <div className="h-full">
      <DashboardHeader />
      <div className="container mx-auto p-6 space-y-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <StatsCards />
      </div>
    </div>
  )
}