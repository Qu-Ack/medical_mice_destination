"use client"

import { useUserContext } from "@/services/contexts/userContext"
import { useEffect, useState } from "react"

export default function RootDashboard({ params }: { params: { rootid: string } }) {
  const [rootId, setRootId] = useState("")
  const { user } = useUserContext()

  useEffect(() => {
    async function getParams() {
        const root_id = (await params).rootid
        setRootId(root_id)
    }
    getParams()
  }, [rootId])

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Root Dashboard: {rootId}</h1>
      
      {user ? (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">User Information</h2>
          <p className="mb-2">
            <span className="font-medium">User ID:</span> {user.id}
          </p>
          <p className="mb-2">
            <span className="font-medium">Name:</span> {user.name}
          </p>
          <p className="mb-2">
            <span className="font-medium">Email:</span> {user.email}
          </p>
          <p className="mb-2">
            <span className="font-medium">Role:</span> {user.role}
          </p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  )
}
