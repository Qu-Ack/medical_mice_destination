'use client'

import { useState } from 'react'
import { User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import EditUserDetails from './EditUserDetails'

interface UserProfile {
  name: string
  email: string
  phoneNumber: string
  address: string
  passportDetails: string
}

export default function UserDetails({
  initialProfile,
}: {
  initialProfile: UserProfile
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState(initialProfile)

  const handleSave = ({ updatedProfile }: { updatedProfile: UserProfile }) => {
    setProfile(updatedProfile)
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <EditUserDetails
        profile={profile}
        onSave={handleSave}
        onCancel={() => setIsEditing(false)}
      />
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-4">
          <User className="h-16 w-16 text-primary" />
          <CardTitle className="text-3xl">Profile Information</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <dt className="font-medium text-gray-500">Name</dt>
            <dd className="mt-1">{profile.name}</dd>
          </div>
          <div>
            <dt className="font-medium text-gray-500">Email</dt>
            <dd className="mt-1">{profile.email}</dd>
          </div>
          <div>
            <dt className="font-medium text-gray-500">Phone Number</dt>
            <dd className="mt-1">{profile.phoneNumber}</dd>
          </div>
          <div>
            <dt className="font-medium text-gray-500">Address</dt>
            <dd className="mt-1">{profile.address}</dd>
          </div>
          <div>
            <dt className="font-medium text-gray-500">Passport Details</dt>
            <dd className="mt-1">{profile.passportDetails}</dd>
          </div>
        </dl>
        <Button onClick={() => setIsEditing(true)} className="mt-6">
          Edit Profile
        </Button>
      </CardContent>
    </Card>
  )
}
