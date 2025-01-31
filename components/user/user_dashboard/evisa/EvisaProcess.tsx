import React from 'react'

const EvisaProcess = () => {
  return (
    <section id="evisaProcess">
      <div className="mb-6 text-center">
        <h2 className="mb-2 text-3xl font-bold">Application Process</h2>
        <p className="text-base text-gray-600">
          Simple steps to obtain your visa
        </p>
      </div>

      <div className="space-y-6">
        {/* Step 1 */}
        <div className="rounded-xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
          <div className="mb-4 flex items-center">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-600">
              1
            </span>
            <h3 className="ml-3 text-base font-semibold">Check Eligibility</h3>
          </div>
          <p className="text-sm text-gray-600">
            Verify your eligibility for medical travel visa based on your
            nationality and purpose of visit.
          </p>
        </div>

        {/* Step 2 */}
        <div className="rounded-xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
          <div className="mb-4 flex items-center">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-600">
              2
            </span>
            <h3 className="ml-3 text-base font-semibold">
              Document Preparation
            </h3>
          </div>
          <ul className="list-inside list-disc text-sm text-gray-600">
            <li>Valid passport</li>
            <li>Passport-sized photo</li>
            <li>Travel itinerary</li>
            <li>Hospital appointment proof</li>
            <li>Financial documents</li>
          </ul>
        </div>

        {/* Step 3 */}
        <div className="rounded-xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
          <div className="mb-4 flex items-center">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-600">
              3
            </span>
            <h3 className="ml-3 text-base font-semibold">Online Application</h3>
          </div>
          <p className="text-sm text-gray-600">
            Complete the online application form with accurate personal and
            travel information.
          </p>
        </div>

        {/* Timeline and Notes */}
        <div className="grid gap-6">
          {/* Timeline */}
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <h3 className="mb-6 text-base font-semibold">
              Application Timeline
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  ✓
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium">Document Submission</p>
                  <p className="text-xs text-gray-500">1-2 days</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  ✓
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium">Application Processing</p>
                  <p className="text-xs text-gray-500">3-5 business days</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  ✓
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium">Visa Approval</p>
                  <p className="text-xs text-gray-500">1-2 days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <h3 className="mb-6 text-base font-semibold">Important Notes</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <svg
                  className="mr-2 h-5 w-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Keep digital copies of all documents
              </li>
              <li className="flex items-start">
                <svg
                  className="mr-2 h-5 w-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Apply at least 2 weeks before travel
              </li>
              <li className="flex items-start">
                <svg
                  className="mr-2 h-5 w-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Ensure all documents are in English
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EvisaProcess
