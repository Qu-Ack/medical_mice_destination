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
import { Search, SlidersHorizontal, MessageCircle } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import SidebarWrapper from '../SidebarWrapper'
import Link from 'next/link' // Import the Link component

const chats = [
  {
    id: 'CHAT001',
    patientName: 'John Doe',
    lastMessage: 'Hello, I have a question about my prescription.',
    unreadMessages: 2,
    date: '2025-01-28',
    url: 'patient_id',
  },
  {
    id: 'CHAT002',
    patientName: 'Jane Smith',
    lastMessage: 'Can you clarify the dosage instructions?',
    unreadMessages: 0,
    date: '2025-01-27',
    url: 'patient_id',
  },
  {
    id: 'CHAT003',
    patientName: 'Alice Johnson',
    lastMessage: 'Thank you for the consultation!',
    unreadMessages: 1,
    date: '2025-01-26',
    url: 'patient_id',
  },
  {
    id: 'CHAT004',
    patientName: 'Bob Brown',
    lastMessage: 'I need to reschedule my appointment.',
    unreadMessages: 3,
    date: '2025-01-25',
    url: 'patient_id',
  },
]

const PatientChatsPage = () => {
  return (
    <SidebarWrapper>
      <div className="flex flex-col space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Patient Chats</h1>
            <p className="text-sm text-muted-foreground">
              Manage and respond to patient messages
            </p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500" />
            <Input placeholder="Search chats..." className="pl-10" />
          </div>
          <Select defaultValue="all">
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

        {/* Chats Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Recent Chats</h2>
          {chats.map((chat) => (
            <Link
              key={chat.id}
              href={`/test/doctor/dashboard/patient_chats/${chat.url}`} // Dynamic route based on chat ID
              className="block" // Ensure the Link takes up the full width
            >
              <div className="flex cursor-pointer items-center justify-between rounded-lg border bg-card p-4 hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>
                      {chat.patientName
                        .split(' ')
                        .map((name) => name[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <p className="font-medium">{chat.patientName}</p>
                    <p className="text-sm text-muted-foreground">
                      {chat.lastMessage}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {chat.unreadMessages > 0 && (
                    <Badge
                      variant="secondary"
                      className="bg-blue-500 text-white"
                    >
                      {chat.unreadMessages} unread
                    </Badge>
                  )}
                  <div className="text-sm text-gray-500">{chat.date}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SidebarWrapper>
  )
}

export default PatientChatsPage
