import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export default function SearchFlightsPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Flight booking portal
        </h1>
        <div className="rounded-lg bg-white p-6 shadow-md">
          <form>
            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div>
                <Label
                  htmlFor="adultCount"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Adult Count
                </Label>
                <Input
                  type="number"
                  id="adultCount"
                  name="adultCount"
                  min="1"
                  defaultValue="1"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                />
              </div>
              <div>
                <Label
                  htmlFor="childCount"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Child Count
                </Label>
                <Input
                  type="number"
                  id="childCount"
                  name="childCount"
                  min="0"
                  defaultValue="0"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                />
              </div>
              <div>
                <Label
                  htmlFor="infantCount"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Infant Count
                </Label>
                <Input
                  type="number"
                  id="infantCount"
                  name="infantCount"
                  min="0"
                  defaultValue="0"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <Label
                  htmlFor="journeyType"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Journey Type
                </Label>
                <select
                  id="journeyType"
                  name="journeyType"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                >
                  <option value="1">One Way</option>
                  <option value="2">Return</option>
                  <option value="3">Multi Stop</option>
                  <option value="4">Advance Search</option>
                  <option value="5">Special Return</option>
                </select>
              </div>
              <div>
                <Label
                  htmlFor="flightCabinClass"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Cabin Class
                </Label>
                <select
                  id="flightCabinClass"
                  name="flightCabinClass"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                >
                  <option value="1">All</option>
                  <option value="2">Economy</option>
                  <option value="3">Premium Economy</option>
                  <option value="4">Business</option>
                  <option value="5">Premium Business</option>
                  <option value="6">First</option>
                </select>
              </div>
            </div>
            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <Label
                  htmlFor="origin"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Origin
                </Label>
                <Input
                  type="text"
                  id="origin"
                  name="origin"
                  placeholder="Enter origin city or airport"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="destination"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Destination
                </Label>
                <Input
                  type="text"
                  id="destination"
                  name="destination"
                  placeholder="Enter destination city or airport"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  required
                />
              </div>
            </div>
            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <Label
                  htmlFor="preferredDeparture"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Preferred Departure
                </Label>
                <Input
                  type="date"
                  id="preferredDeparture"
                  name="preferredDeparture"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="preferredArrival"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Preferred Arrival (Optional)
                </Label>
                <Input
                  type="date"
                  id="preferredArrival"
                  name="preferredArrival"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                />
              </div>
            </div>
            <div>
              <Button
                type="submit"
                className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Search Flights
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
