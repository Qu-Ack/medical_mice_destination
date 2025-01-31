'use client'

import { useState } from 'react'
import { format } from 'date-fns'
import { CalendarIcon, Search, Plane } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

// Mock flight data
const flights = [
  {
    id: 1,
    airline: 'SkyHigh Airways',
    origin: 'New York',
    destination: 'London',
    departureTime: '08:00 AM',
    arrivalTime: '8:00 PM',
    price: 450,
    duration: '7h 00m',
  },
  {
    id: 2,
    airline: 'Ocean Blue Airlines',
    origin: 'Los Angeles',
    destination: 'Tokyo',
    departureTime: '11:30 AM',
    arrivalTime: '3:30 PM',
    price: 780,
    duration: '11h 00m',
  },
  {
    id: 3,
    airline: 'Mountain Peak Flights',
    origin: 'Chicago',
    destination: 'Paris',
    departureTime: '2:15 PM',
    arrivalTime: '6:45 AM',
    price: 560,
    duration: '8h 30m',
  },
  {
    id: 4,
    airline: 'Desert Sand Airways',
    origin: 'Dubai',
    destination: 'Singapore',
    departureTime: '9:45 PM',
    arrivalTime: '9:15 AM',
    price: 620,
    duration: '6h 30m',
  },
  {
    id: 5,
    airline: 'Northern Lights Airlines',
    origin: 'Toronto',
    destination: 'Sydney',
    departureTime: '7:20 PM',
    arrivalTime: '6:50 AM',
    price: 950,
    duration: '18h 30m',
  },
]

const formatDuration = (duration: string) => {
  const [hours, minutes] = duration
    .split('h ')
    .map((part) => Number.parseInt(part))
  return (
    <span className="flex items-center gap-1">
      <Plane className="h-4 w-4 rotate-90" />
      <span>
        {hours}h {minutes}m
      </span>
    </span>
  )
}

export default function BrowseFlightsPage() {
  const [departureDate, setDepartureDate] = useState<Date>()
  const [returnDate, setReturnDate] = useState<Date>()

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-3xl font-bold">Browse Flights</h1>

      {/* Filter Section */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            <div className="space-y-2">
              <Label htmlFor="origin">Origin</Label>
              <Input id="origin" placeholder="From" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="destination">Destination</Label>
              <Input id="destination" placeholder="To" />
            </div>
            <div className="space-y-2">
              <Label>Departure</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={`w-full justify-start text-left font-normal ${!departureDate && 'text-muted-foreground'}`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {departureDate ? (
                      format(departureDate, 'PP')
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={departureDate}
                    onSelect={setDepartureDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label>Return</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={`w-full justify-start text-left font-normal ${!returnDate && 'text-muted-foreground'}`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {returnDate ? (
                      format(returnDate, 'PP')
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={returnDate}
                    onSelect={setReturnDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="passengers">Passengers</Label>
              <Select>
                <SelectTrigger id="passengers">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5+">5+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="class">Class</Label>
              <Select>
                <SelectTrigger id="class">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="economy">Economy</SelectItem>
                  <SelectItem value="premium">Premium Economy</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="first">First Class</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button className="mt-4 w-full bg-blue-600">
            <Search className="mr-2 h-4 w-4" /> Search Flights
          </Button>
        </CardContent>
      </Card>

      {/* Flight Cards */}
      <div className="space-y-6">
        {flights.map((flight) => (
          <Card key={flight.id} className="w-full">
            <CardHeader>
              <CardTitle>{flight.airline}</CardTitle>
              <CardDescription>
                {flight.origin} to {flight.destination}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Departure</p>
                  <p className="text-lg">{flight.departureTime}</p>
                  <p className="text-sm text-muted-foreground">
                    {flight.origin}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium">Duration</p>
                  {formatDuration(flight.duration)}
                </div>
                <div className="space-y-1 text-right">
                  <p className="text-sm font-medium">Arrival</p>
                  <p className="text-lg">{flight.arrivalTime}</p>
                  <p className="text-sm text-muted-foreground">
                    {flight.destination}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <p className="text-2xl font-bold">${flight.price}</p>
              <Button className="bg-blue-600">Select</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
