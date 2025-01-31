'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const TravelOptions = () => {
  const [tripType, setTripType] = useState('One Way')
  const [adultCount, setAdultCount] = useState(1)
  const [childCount, setChildCount] = useState(0)
  const [infantCount, setInfantCount] = useState(0)
  const [cabinClass, setCabinClass] = useState('Economy')
  const [origin, setOrigin] = useState('New Delhi, India')
  const [destination, setDestination] = useState('Mumbai, India')
  const [departureDate, setDepartureDate] = useState('2025-01-28')
  const [returnDate, setReturnDate] = useState('')

  return (
    <div className="bg-gray-100 px-4 py-4 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-lg bg-gradient-to-r from-blue-900 to-blue-800 p-4">
        <div className="flex flex-wrap gap-4 text-white">
          {/* Trip Type */}
          <div className="min-w-[200px] flex-1">
            <Select value={tripType} onValueChange={setTripType}>
              <SelectTrigger className="w-full rounded border border-blue-600 bg-transparent p-2">
                <SelectValue placeholder="One Way" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="One Way">One Way</SelectItem>
                <SelectItem value="Round Trip">Round Trip</SelectItem>
                <SelectItem value="Multi City">Multi City</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Origin */}
          <div className="min-w-[200px] flex-1">
            <div className="rounded border border-blue-600 p-2">
              <Label htmlFor="origin" className="text-xs">
                FROM
              </Label>
              <Input
                id="origin"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="w-full bg-transparent p-0 text-sm font-semibold text-white focus:ring-0"
              />
            </div>
          </div>

          {/* Destination */}
          <div className="min-w-[200px] flex-1">
            <div className="rounded border border-blue-600 p-2">
              <Label htmlFor="destination" className="text-xs">
                TO
              </Label>
              <Input
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-transparent p-0 text-sm font-semibold text-white focus:ring-0"
              />
            </div>
          </div>

          {/* Departure Date */}
          <div className="min-w-[200px] flex-1">
            <div className="rounded border border-blue-600 p-2">
              <Label htmlFor="departureDate" className="text-xs">
                DEPART
              </Label>
              <Input
                type="date"
                id="departureDate"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="w-full bg-transparent p-0 text-sm font-semibold text-white focus:ring-0"
              />
            </div>
          </div>

          {/* Return Date */}
          <div className="min-w-[200px] flex-1">
            <div className="rounded border border-blue-600 p-2">
              <Label htmlFor="returnDate" className="text-xs">
                RETURN
              </Label>
              <Input
                type="date"
                id="returnDate"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full bg-transparent p-0 text-sm text-gray-300 focus:ring-0"
              />
            </div>
          </div>

          {/* Passengers & Class */}
          <div className="min-w-[200px] flex-1">
            <div className="rounded border border-blue-600 p-2">
              <Label htmlFor="passengers" className="text-xs">
                PASSENGERS & CLASS
              </Label>
              <div className="flex items-center justify-between gap-2">
                <Input
                  id="adultCount"
                  type="number"
                  value={adultCount}
                  onChange={(e) => setAdultCount(Number(e.target.value))}
                  className="w-12 bg-transparent p-0 text-sm font-semibold text-white focus:ring-0"
                  min="1"
                />
                <Input
                  id="childCount"
                  type="number"
                  value={childCount}
                  onChange={(e) => setChildCount(Number(e.target.value))}
                  className="w-12 bg-transparent p-0 text-sm font-semibold text-white focus:ring-0"
                  min="0"
                />
                <Input
                  id="infantCount"
                  type="number"
                  value={infantCount}
                  onChange={(e) => setInfantCount(Number(e.target.value))}
                  className="w-12 bg-transparent p-0 text-sm font-semibold text-white focus:ring-0"
                  min="0"
                />
                <Select value={cabinClass} onValueChange={setCabinClass}>
                  <SelectTrigger className="w-24 bg-transparent p-0 text-sm font-semibold text-white focus:ring-0">
                    <SelectValue placeholder="Economy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Economy">Economy</SelectItem>
                    <SelectItem value="Premium Economy">
                      Premium Economy
                    </SelectItem>
                    <SelectItem value="Business">Business</SelectItem>
                    <SelectItem value="First">First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const FlightResults = () => {
  const flights = [
    {
      airline: 'IndiGo',
      flightNumber: '6E 673',
      departureTime: '02:00',
      departureLocation: 'New Delhi',
      duration: '02h 20m',
      stops: 'Non stop',
      arrivalTime: '04:20',
      arrivalLocation: 'Mumbai',
      price: '₹5,499',
      deal: 'Get ₹219 off using MMTDEAL*',
    },
    {
      airline: 'IndiGo',
      flightNumber: '6E 705',
      departureTime: '04:00',
      departureLocation: 'New Delhi',
      duration: '02h 20m',
      stops: 'Non stop',
      arrivalTime: '06:20',
      arrivalLocation: 'Mumbai',
      price: '₹5,499',
      deal: 'Get ₹219 off using MMTDEAL*',
    },
  ]

  return (
    <div className="bg-gray-100 px-4 py-4 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-lg bg-white shadow-sm">
          {/* Date Navigation */}
          <div className="overflow-x-auto border-b p-4">
            <div className="flex min-w-max space-x-4">
              {[
                'Mon, Jan 27',
                'Tue, Jan 28',
                'Wed, Jan 29',
                'Thu, Jan 30',
                'Fri, Jan 31',
              ].map((date, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 ${
                    index === 1
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500 hover:text-blue-600'
                  }`}
                >
                  <div>{date}</div>
                  <div>₹5,499</div>
                </button>
              ))}
            </div>
          </div>

          {/* Flight Cards */}
          <div className="divide-y">
            {flights.concat(flights).map((flight, index) => (
              <div key={index} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                      <span className="font-bold text-blue-600">6E</span>
                    </div>
                    <div>
                      <div className="font-semibold">{flight.airline}</div>
                      <div className="text-sm text-gray-500">
                        {flight.flightNumber}
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{flight.departureTime}</div>
                    <div className="text-sm text-gray-500">
                      {flight.departureLocation}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500">
                      {flight.duration}
                    </div>
                    <div className="text-xs text-green-500">{flight.stops}</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{flight.arrivalTime}</div>
                    <div className="text-sm text-gray-500">
                      {flight.arrivalLocation}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{flight.price}</div>
                    <div className="text-sm text-gray-500">per adult</div>
                    <button className="mt-2 rounded-lg bg-blue-100 px-4 py-1 text-blue-600 hover:bg-blue-200">
                      VIEW PRICES
                    </button>
                  </div>
                </div>
                <div className="mt-4 rounded bg-orange-50 p-2 text-sm text-orange-700">
                  {flight.deal}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const BrowseFlightsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <TravelOptions />
      <FlightResults />
    </div>
  )
}

export default BrowseFlightsPage
