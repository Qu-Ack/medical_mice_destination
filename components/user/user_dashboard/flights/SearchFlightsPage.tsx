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

export default function SearchFlightsPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Flight Booking Portal
        </h1>
        <div className="rounded-lg bg-white p-6 shadow-md">
          <form>
            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Adult Count */}
              <div>
                <Label htmlFor="adultCount" className="mb-2 block">
                  Adult Count
                </Label>
                <Input
                  type="number"
                  id="adultCount"
                  name="adultCount"
                  min="1"
                  defaultValue="1"
                  className="w-full"
                />
              </div>

              {/* Child Count */}
              <div>
                <Label htmlFor="childCount" className="mb-2 block">
                  Child Count
                </Label>
                <Input
                  type="number"
                  id="childCount"
                  name="childCount"
                  min="0"
                  defaultValue="0"
                  className="w-full"
                />
              </div>

              {/* Infant Count */}
              <div>
                <Label htmlFor="infantCount" className="mb-2 block">
                  Infant Count
                </Label>
                <Input
                  type="number"
                  id="infantCount"
                  name="infantCount"
                  min="0"
                  defaultValue="0"
                  className="w-full"
                />
              </div>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Journey Type */}
              <div>
                <Label htmlFor="journeyType" className="mb-2 block">
                  Journey Type
                </Label>
                <Select name="journeyType">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select journey type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">One Way</SelectItem>
                    <SelectItem value="2">Return</SelectItem>
                    <SelectItem value="3">Multi Stop</SelectItem>
                    <SelectItem value="4">Advance Search</SelectItem>
                    <SelectItem value="5">Special Return</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Cabin Class */}
              <div>
                <Label htmlFor="flightCabinClass" className="mb-2 block">
                  Cabin Class
                </Label>
                <Select name="flightCabinClass">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select cabin class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">All</SelectItem>
                    <SelectItem value="2">Economy</SelectItem>
                    <SelectItem value="3">Premium Economy</SelectItem>
                    <SelectItem value="4">Business</SelectItem>
                    <SelectItem value="5">Premium Business</SelectItem>
                    <SelectItem value="6">First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Origin */}
              <div>
                <Label htmlFor="origin" className="mb-2 block">
                  Origin
                </Label>
                <Input
                  type="text"
                  id="origin"
                  name="origin"
                  placeholder="Enter origin city or airport"
                  className="w-full"
                  required
                />
              </div>

              {/* Destination */}
              <div>
                <Label htmlFor="destination" className="mb-2 block">
                  Destination
                </Label>
                <Input
                  type="text"
                  id="destination"
                  name="destination"
                  placeholder="Enter destination city or airport"
                  className="w-full"
                  required
                />
              </div>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Preferred Departure */}
              <div>
                <Label htmlFor="preferredDeparture" className="mb-2 block">
                  Preferred Departure
                </Label>
                <Input
                  type="date"
                  id="preferredDeparture"
                  name="preferredDeparture"
                  className="w-full"
                  required
                />
              </div>

              {/* Preferred Arrival */}
              <div>
                <Label htmlFor="preferredArrival" className="mb-2 block">
                  Preferred Arrival (Optional)
                </Label>
                <Input
                  type="date"
                  id="preferredArrival"
                  name="preferredArrival"
                  className="w-full"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <Button type="submit" className="w-full bg-blue-600">
                Search Flights
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
