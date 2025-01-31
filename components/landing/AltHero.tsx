'use client'

import React from 'react'
import { Button } from '@/components/ui/button'

// AltHero Component
function AltHero() {
  return (
    <div className="flex min-h-screen w-full flex-1 flex-col">
      {/* Hero Section */}
      <div className="relative flex w-full flex-1 items-center justify-center pt-16">
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-black">
          <h1 className="mb-4 text-5xl font-bold text-white drop-shadow-lg">
            Treatment in the best hospitals of India
          </h1>
          <p className="mb-8 text-xl text-white drop-shadow-lg">
            We find the best medical solutions for your health
          </p>

          {/* Search Box */}
          <div className="one">
            <Button className="rounded-full px-6 py-6 text-white transition hover:bg-white hover:text-black">
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AltHero
