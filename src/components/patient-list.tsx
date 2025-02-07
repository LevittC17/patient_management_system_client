import { Search, Filter, Download, MoreVertical } from "lucide-react"

const patients = [
  {
    id: "001235",
    initials: "MH",
    name: "Maria Hernandez",
    age: 32,
    gender: "Female",
    date: "2024-08-22",
    department: "General Surgery",
    diagnosis: "Appendicitis",
    status: "OUTPATIENT",
  },
  {
    id: "001236",
    initials: "JJ",
    name: "James Johnson",
    age: 65,
    gender: "Male",
    date: "2024-08-22",
    department: "Oncology",
    diagnosis: "Lung Cancer",
    status: "INPATIENT",
  },
  {
    id: "001234",
    initials: "JS",
    name: "John Smith",
    age: 45,
    gender: "Male",
    date: "2024-08-20",
    department: "Cardiology",
    diagnosis: "Coronary Artery Disease",
    status: "OUTPATIENT",
  },
]

export function PatientList() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700">
      <div className="p-6 border-b dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-medium">Patient List</h3>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="search"
                placeholder="Search Patient.."
                className="pl-9 pr-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
              <Download className="mr-2 h-4 w-4" />
              Export
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-gray-50 dark:bg-gray-700">
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600" />
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Patient ID
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Patient name
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Age
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Gender
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Date
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Department
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Primary Diagnosis
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id} className="border-b dark:border-gray-700">
                <td className="py-4 px-4">
                  <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600" />
                </td>
                <td className="py-4 px-4 text-sm dark:text-gray-300">{patient.id}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-sm font-medium">
                      {patient.initials}
                    </div>
                    <span className="ml-2 text-sm font-medium dark:text-gray-300">{patient.name}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-sm dark:text-gray-300">{patient.age}</td>
                <td className="py-4 px-4 text-sm dark:text-gray-300">{patient.gender}</td>
                <td className="py-4 px-4 text-sm dark:text-gray-300">{patient.date}</td>
                <td className="py-4 px-4 text-sm dark:text-gray-300">{patient.department}</td>
                <td className="py-4 px-4 text-sm dark:text-gray-300">{patient.diagnosis}</td>
                <td className="py-4 px-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      patient.status === "INPATIENT"
                        ? "bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-200"
                        : "bg-red-100 dark:bg-red-700 text-red-800 dark:text-red-200"
                    }`}
                  >
                    {patient.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <button className="text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}