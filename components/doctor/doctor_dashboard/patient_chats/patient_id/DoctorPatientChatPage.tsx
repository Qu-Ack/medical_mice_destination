'use client'

import { useState } from 'react'
import DoctorPatientChat from './DoctorPatientChat'

const DoctorPatientChatPage = () => {
  const [approved, setApproved] = useState(true)

  return (
    <div className="flex h-full flex-col">
      {/* Create a state here for tracking if the doctor has accepted user's application or not.
          If state is false, render WaitingForApproval, else render doctor chat
        */}
      <DoctorPatientChat />
    </div>
  )
}

export default DoctorPatientChatPage
