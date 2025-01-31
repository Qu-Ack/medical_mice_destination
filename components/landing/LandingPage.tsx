'use client'
import { useRouter } from 'next/navigation'
import backgroundImage from '@/public/landing_bg.jpeg'

import * as React from 'react'

import Hero from './Hero'
import AltHero from './AltHero'

export default function LandingPage() {
  const router = useRouter()

  function checkAuth() {
    // a temp(imaginary function) to check auth
    console.log('checking auth ....')
  }

  function handleLogin() {
    window.location.href = 'http://localhost:8080/auth/google/start'
  }

  function handleMedicalTourism() {
    checkAuth()
    router.push('/medical/main')
  }

  function handleMICE() {
    checkAuth()
    router.push('/mice/main')
  }

  function handleDestinationWedding() {
    checkAuth()
    router.push('destination/main')
  }

  // this is a temp landing page
  // we need to check auth after pressing these buttons if the user is not authed we can't proceed

  return (
    <>
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage.src})` }}
      >
        {/* Overlay to dim the background */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <main className="relative z-10 flex flex-1 flex-col items-center justify-center">
          <div className="container flex flex-1">
            <AltHero />
          </div>
        </main>
      </div>
    </>
  )
}
