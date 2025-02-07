import { X } from "lucide-react"

export function SuccessAlert() {
  return (
    <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <div className="h-4 w-4 rounded-full bg-green-400 dark:bg-green-500" />
        </div>
        <div className="ml-3 flex-1 md:flex md:justify-between">
          <p className="text-sm text-green-700 dark:text-green-200">
            The patient's information has been successfully updated. All changes are now reflected in the system.
          </p>
          <p className="mt-3 text-sm md:mt-0 md:ml-6">
            <button className="text-green-700 dark:text-green-200 hover:text-green-600 dark:hover:text-green-100 font-medium">
              MORE DETAILS
            </button>
          </p>
        </div>
        <div className="ml-4 flex-shrink-0">
          <button className="text-green-600 dark:text-green-200 hover:text-green-500 dark:hover:text-green-100">
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}