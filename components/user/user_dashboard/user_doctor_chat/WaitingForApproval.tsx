import React from 'react'
import { ClipboardCheck } from 'lucide-react'

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-500"></div>
    </div>
  )
}

const WaitingForApproval = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-b to-white p-4">
      <div className="w-full max-w-2xl space-y-8 rounded-xl bg-white p-8 shadow-lg">
        <div className="flex justify-center">
          <div className="bg-medical-100 flex h-16 w-16 items-center justify-center rounded-full">
            <ClipboardCheck className="text-medical-500 h-8 w-8" />
          </div>
        </div>

        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-semibold text-gray-800">
            Application Under Review
          </h1>

          <p className="mx-auto max-w-md text-gray-600">
            Thank you for choosing our medical tourism services. Our team of
            experts is carefully reviewing your application to ensure we provide
            you with the best possible care.
          </p>
        </div>

        <LoadingSpinner />

        <div className="space-y-2 text-center">
          <p className="text-sm text-gray-500">
            Average review time: 24-48 hours
          </p>
          <p className="text-sm text-blue-500">
            We'll notify you once your application has been processed
          </p>
        </div>
      </div>
    </div>
  )
}

export default WaitingForApproval
