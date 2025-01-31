'use client'

import { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Plane, Check } from 'lucide-react'

// Flight Info Component
interface FlightInfoProps {
  flight: {
    airline: string
    flightNumber: string
    departure: {
      city: string
      airport: string
      time: string
    }
    arrival: {
      city: string
      airport: string
      time: string
    }
    duration: string
    aircraft: string
  }
}

function FlightInfo({ flight }: FlightInfoProps) {
  const departureDate = new Date(flight.departure.time)
  const arrivalDate = new Date(flight.arrival.time)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Flight Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold">{flight.airline}</p>
            <p className="text-sm text-muted-foreground">
              {flight.flightNumber}
            </p>
          </div>
          <Plane className="h-6 w-6" />
        </div>
        <div className="mb-4 flex justify-between">
          <div>
            <p className="font-semibold">
              {flight.departure.city} ({flight.departure.airport})
            </p>
            <p className="text-sm text-muted-foreground">
              {departureDate.toLocaleString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              })}
            </p>
          </div>
          <div className="text-right">
            <p className="font-semibold">
              {flight.arrival.city} ({flight.arrival.airport})
            </p>
            <p className="text-sm text-muted-foreground">
              {arrivalDate.toLocaleString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              })}
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <p>
            <span className="font-semibold">Duration:</span> {flight.duration}
          </p>
          <p>
            <span className="font-semibold">Aircraft:</span> {flight.aircraft}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

// Fare Rules Component
interface FareRulesProps {
  rules: string[]
}

function FareRules({ rules }: FareRulesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Fare Rules</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {rules.map((rule, index) => (
            <li key={index} className="flex items-start">
              <Check className="mr-2 mt-0.5 h-5 w-5 text-green-500" />
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

// Pricing Component
interface PricingProps {
  details: {
    baseFare: number
    taxes: number
    fees: number
  }
}

function Pricing({ details }: PricingProps) {
  const total = details.baseFare + details.taxes + details.fees

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pricing Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Base Fare</span>
            <span>${details.baseFare.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Taxes</span>
            <span>${details.taxes.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Fees</span>
            <span>${details.fees.toFixed(2)}</span>
          </div>
          <div className="flex justify-between border-t pt-2 font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Booking Card Component
interface BookingCardProps {
  pricing: {
    baseFare: number
    taxes: number
    fees: number
  }
}

function BookingCard({ pricing }: BookingCardProps) {
  const [passengers, setPassengers] = useState(1)
  const total = (pricing.baseFare + pricing.taxes + pricing.fees) * passengers

  return (
    <Card>
      <CardHeader>
        <CardTitle>Book Your Flight</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="passengers">Number of Passengers</Label>
            <Input
              id="passengers"
              type="number"
              min="1"
              value={passengers}
              onChange={(e) =>
                setPassengers(Math.max(1, Number.parseInt(e.target.value)))
              }
              className="mt-1"
            />
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total Price</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="text-sm text-muted-foreground">
            *Price includes all taxes and fees
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Confirm Booking</Button>
      </CardFooter>
    </Card>
  )
}

// Main Flight Details Page Component
const flightData = {
  airline: 'SkyHigh Airways',
  flightNumber: 'SH123',
  departure: {
    city: 'New York',
    airport: 'JFK',
    time: '2023-07-01T08:00:00Z',
  },
  arrival: {
    city: 'London',
    airport: 'LHR',
    time: '2023-07-01T20:00:00Z',
  },
  duration: '8h 00m',
  aircraft: 'Boeing 787-9',
}

const fareRules = [
  'Cancellation: Non-refundable',
  'Changes: Allowed with fee',
  'Baggage: 1 carry-on, 1 checked bag',
  'Seat Selection: Free',
]

const pricingDetails = {
  baseFare: 500,
  taxes: 100,
  fees: 50,
}

export default function FlightDetailsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Flight Details</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="space-y-8 md:col-span-2">
          <FlightInfo flight={flightData} />
          <FareRules rules={fareRules} />
          <Pricing details={pricingDetails} />
        </div>
        <div className="md:col-span-1">
          <BookingCard pricing={pricingDetails} />
        </div>
      </div>
    </div>
  )
}
