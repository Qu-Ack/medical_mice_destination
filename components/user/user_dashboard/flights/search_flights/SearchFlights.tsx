'use client'

import React, { useState } from 'react'
import { Plane, Hotel } from 'lucide-react'

const SearchFlights = () => {
  const [activeTab, setActiveTab] = useState('flights')

  return (
    <section className="relative flex min-h-[70vh] items-center bg-neutral-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate__animated animate__fadeIn absolute inset-0 bg-gradient-to-r from-neutral-900/90 to-neutral-900/70"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="animate__animated animate__fadeInDown mb-6 text-4xl font-bold text-white md:text-6xl">
            Discover Your Perfect Journey
          </h1>
          <p className="animate__animated animate__fadeInUp mb-12 text-xl text-gray-300">
            Find and book the best deals on flights and hotels worldwide
          </p>

          <div className="animate__animated animate__fadeIn mx-auto max-w-3xl rounded-xl bg-white/10 p-6 backdrop-blur-lg">
            {/* Tabs */}
            <div className="mb-6 flex flex-wrap justify-center gap-4">
              <button
                className={`flex items-center gap-2 rounded-full px-8 py-3 font-semibold transition-all ${
                  activeTab === 'flights'
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-neutral-700 text-white hover:bg-neutral-600'
                }`}
                onClick={() => setActiveTab('flights')}
              >
                <Plane className="text-lg" />
                Flights
              </button>
              <button
                className={`flex items-center gap-2 rounded-full px-8 py-3 font-semibold transition-all ${
                  activeTab === 'hotels'
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-neutral-700 text-white hover:bg-neutral-600'
                }`}
                onClick={() => setActiveTab('hotels')}
              >
                <Hotel className="text-lg" />
                Hotels
              </button>
            </div>

            {/* Input Fields */}
            <div className="flex flex-wrap justify-center gap-4">
              <input
                type="text"
                placeholder="From"
                className="animate__animated animate__fadeInLeft rounded-lg border border-gray-600 bg-white/20 px-4 py-2 text-white placeholder-gray-300 focus:border-blue-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="To"
                className="animate__animated animate__fadeInLeft rounded-lg border border-gray-600 bg-white/20 px-4 py-2 text-white placeholder-gray-300 focus:border-blue-500 focus:outline-none"
                style={{ animationDelay: '0.2s' }}
              />
              <input
                type="date"
                className="animate__animated animate__fadeInRight rounded-lg border border-gray-600 bg-white/20 px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
                style={{ animationDelay: '0.4s' }}
              />
              <select
                className="animate__animated animate__fadeInRight rounded-lg border border-gray-600 bg-white/20 px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
                style={{ animationDelay: '0.6s' }}
              >
                <option value="1">1 Passenger</option>
                <option value="2">2 Passengers</option>
                <option value="3">3 Passengers</option>
                <option value="4">4+ Passengers</option>
              </select>
            </div>

            {/* Search Button */}
            <button className="animate__animated animate__fadeInUp mt-6 rounded-full bg-blue-500 px-8 py-3 font-bold text-white transition-all hover:bg-blue-600">
              Search Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

const SearchFlightsPage = () => <SearchFlights />

export default SearchFlightsPage
