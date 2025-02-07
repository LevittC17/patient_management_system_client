import { DashboardHeader } from "@/components/dashboard-header"
import { StatsCards } from "@/components/stats-cards"
import { Charts } from "@/components/charts"
import { PatientList } from "@/components/patient-list"

export default function Home() {
  return (
    <div className="h-full">
      <DashboardHeader />
      <div className="container mx-auto p-6 space-y-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <StatsCards />
        <Charts />
        <PatientList />
      </div>
    </div>
  )
}