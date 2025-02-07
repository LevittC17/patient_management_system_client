import { ArrowUpRight, ArrowDownRight, MoreVertical } from "lucide-react"

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Patient Enrollment"
        value="129"
        change={18.7}
        changeText="52 Increased vs last month"
        isPositive={true}
      />
      <StatCard
        title="Patient Visits"
        value="1,210"
        change={5.2}
        changeText="165 Decreased vs last month"
        isPositive={false}
      />
      <StatCard
        title="Active Cases"
        value="456"
        change={6.0}
        changeText="184 Increased vs last month"
        isPositive={true}
      />
      <StatCard
        title="Inactive Cases"
        value="234"
        change={6.4}
        changeText="83 Decreased vs last month"
        isPositive={false}
      />
    </div>
  )
}

function StatCard({
  title,
  value,
  change,
  changeText,
  isPositive,
}: {
  title: string
  value: string
  change: number
  changeText: string
  isPositive: boolean
}) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border dark:border-gray-700">
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
        <button className="text-gray-400 hover:text-gray-500">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-2xl font-semibold dark:text-white">{value}</span>
        <span className={`flex items-center text-sm ${isPositive ? "text-green-600" : "text-red-600"}`}>
          {isPositive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
          {change}%
        </span>
      </div>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{changeText}</p>
    </div>
  )
}