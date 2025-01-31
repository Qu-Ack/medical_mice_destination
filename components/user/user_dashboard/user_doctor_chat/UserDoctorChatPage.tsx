'use client'

import { useState } from 'react'
import WaitingForApproval from './WaitingForApproval'
import UserDoctorChat from './UserDoctorChat'

const UserDoctorChatPage = () => {
  const [approved, setApproved] = useState(true)

  if (!approved) {
    return (
      <div className="flex h-full flex-col items-center justify-center bg-blue-50 text-center">
        <WaitingForApproval />
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col">
      {/* Create a state here for tracking if the doctor has accepted user's application or not.
          If state is false, render WaitingForApproval, else render doctor chat
        */}
      <UserDoctorChat />
    </div>
  )
}

export default UserDoctorChatPage
