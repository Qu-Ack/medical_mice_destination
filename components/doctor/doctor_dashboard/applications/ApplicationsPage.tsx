'use client'

import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Search, SlidersHorizontal } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import SidebarWrapper from '../SidebarWrapper'
import Link from 'next/link' // Import the Link component

const applications = [
  {
    id: 'APP001',
    type: 'Diabetic',
    consultation: 'Consultation',
    status: 'pending',
    date: '2025-01-28',
    patientName: 'John Doe',
    url: 'patient_id', // Added URL key for dynamic routing
  },
  {
    id: 'APP002',
    type: 'Cardiology',
    consultation: 'Check-up',
    status: 'approved',
    date: '2025-01-27',
    patientName: 'Jane Smith',
    url: 'patient_id', // Added URL key for dynamic routing
  },
  {
    id: 'APP003',
    type: 'Orthopedic',
    consultation: 'Consultation',
    status: 'rejected',
    date: '2025-01-26',
    patientName: 'Alice Johnson',
    url: 'patient_id', // Added URL key for dynamic routing
  },
  {
    id: 'APP004',
    type: 'General',
    consultation: 'Check-up',
    status: 'pending',
    date: '2025-01-25',
    patientName: 'Bob Brown',
    url: 'patient_id', // Added URL key for dynamic routing
  },
]

const ApplicationsPage = () => {
  const filterByRecency = (filter: string) => {
    const today = new Date()
    const filteredApplications = applications.filter((app) => {
      const appDate = new Date(app.date)
      const timeDiff = today.getTime() - appDate.getTime()
      const daysDiff = timeDiff / (1000 * 3600 * 24)

      switch (filter) {
        case 'today':
          return daysDiff < 1
        case 'last7':
          return daysDiff <= 7
        case 'last30':
          return daysDiff <= 30
        case 'all':
        default:
          return true
      }
    })

    return filteredApplications
  }

  const handleFilterChange = (value: string) => {
    const filteredApps = filterByRecency(value)
    // Update the state or UI to display the filtered applications
    console.log(filteredApps) // Replace this with your state update logic
  }

  return (
    <SidebarWrapper>
      <div className="flex flex-col space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Applications Overview</h1>
            <p className="text-sm text-muted-foreground">
              Patient applications management dashboard
            </p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500" />
            <Input placeholder="Search applications..." className="pl-10" />
          </div>
          <Select defaultValue="all" onValueChange={handleFilterChange}>
            <SelectTrigger className="w-[180px]">
              <div className="flex items-center space-x-2">
                <SlidersHorizontal className="h-4 w-4" />
                <SelectValue placeholder="Filter by recency" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="last7">Last 7 Days</SelectItem>
              <SelectItem value="last30">Last 30 Days</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Applications Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Recent Applications</h2>
          {applications.map((app) => (
            <Link
              key={app.id}
              href={`/test/doctor/dashboard/applications/${app.url}`} // Dynamic route using the URL key
              className="block" // Ensure the Link takes up the full width
            >
              <div className="flex cursor-pointer items-center justify-between rounded-lg border bg-card p-4 hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>
                      {app.patientName
                        .split(' ')
                        .map((name) => name[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <p className="font-medium">Application #{app.id}</p>
                    <p className="text-sm text-muted-foreground">
                      {app.patientName} - {app.type} {app.consultation}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm text-gray-500">{app.date}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SidebarWrapper>
  )
}

export default ApplicationsPage
