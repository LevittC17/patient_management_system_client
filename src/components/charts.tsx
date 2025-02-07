'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from "recharts"
import { MoreVertical } from "lucide-react"
import { useTheme } from "next-themes"

const admissionData = [
  { month: "Jan", admissions: 200, discharges: 170 },
  { month: "Feb", admissions: 150, discharges: 120 },
  { month: "Mar", admissions: 180, discharges: 150 },
  { month: "Apr", admissions: 100, discharges: 80 },
  { month: "May", admissions: 200, discharges: 170 },
  { month: "Jun", admissions: 220, discharges: 180 },
  { month: "Jul", admissions: 180, discharges: 150 },
]

const insuranceData = [
  { name: "Private Insurance", value: 1200, percentage: 41.2, color: "#4F46E5" },
  { name: "Medicare", value: 620, percentage: 17.5, color: "#F59E0B" },
  { name: "Medicaid", value: 550, percentage: 15.5, color: "#38BDF8" },
  { name: "Uninsured", value: 210, percentage: 14.2, color: "#10B981" },
]

export function Charts() {
  const { theme } = useTheme()
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border dark:border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-base font-medium">Admission and Discharge Trends</h3>
          <button className="text-gray-400 hover:text-gray-500">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={admissionData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={theme === "dark" ? "#374151" : "#E5E7EB"} />
              <XAxis dataKey="month" stroke={theme === "dark" ? "#9CA3AF" : "#6B7280"} />
              <YAxis stroke={theme === "dark" ? "#9CA3AF" : "#6B7280"} />
              <Tooltip />
              <Bar dataKey="admissions" fill="#38BDF8" radius={[4, 4, 0, 0]} />
              <Bar dataKey="discharges" fill="#6366F1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border dark:border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-base font-medium">Insurance Coverage Distribution</h3>
            <p className="text-2xl font-semibold mt-2">
              2,700
              <span className="text-sm text-green-600 ml-2">↑ 823 increased vs last month</span>
            </p>
          </div>
          <button className="text-gray-400 hover:text-gray-500">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={insuranceData} innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value">
                  {insuranceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4">
            {insuranceData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-gray-600">{item.name}</span>
                </div>
                <span className="text-sm font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}