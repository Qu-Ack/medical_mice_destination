import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Button } from '../ui/button'
import { Cardo } from 'next/font/google'
import Link from 'next/link'

function LandingText() {
  return (
    <div className="flex w-1/2 flex-col gap-6">
      <h1 className="font-display max-w-4xl text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl">
        Your Gateway to{' '}
        <span className="relative whitespace-nowrap">
          <span className="relative bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            World-Class Healthcare
          </span>
        </span>
      </h1>
      <CardDescription className="text-xl">
        Discover affordable, high-quality medical treatments combined with the
        opportunity to recover in serene, luxurious destinations. Your health
        and comfort are our top priorities.
      </CardDescription>
      <div className="flex gap-4">
        <Button className="rounded-full border-2 border-blue-600 bg-blue-600 px-12 py-6 text-base shadow-md hover:bg-white hover:text-black">
          Start your jounery now!
        </Button>
      </div>
    </div>
  )
}

const serviceOption = [
  {
    title: 'Medical Tourism',
    link: '/',
    description:
      'Hubba dubba dubba da, healthcare ya hooo! Hubba dubba dubba da, healthcare ya hooo!',
  },
  {
    title: 'Destination Wedding',
    link: '/',
    description:
      'Hubba dubba dubba da, healthcare ya hooo! Hubba dubba dubba da, healthcare ya hooo!',
  },
  {
    title: 'MICE',
    link: '/',
    description:
      'Hubba dubba dubba da, healthcare ya hooo! Hubba dubba dubba da, healthcare ya hooo!',
  },
]

function Options() {
  return (
    <div className="flex flex-1 flex-wrap items-center justify-center gap-8">
      {serviceOption.map((service) => {
        return (
          <Card
            className="delay-400 flex h-40 w-5/12 flex-col justify-center shadow-lg ease-in-out hover:-translate-y-1 hover:translate-x-1 hover:transition-transform"
            key={service.title}
          >
            <Link
              href={service.link}
              className="flex flex-grow flex-col justify-center p-8"
            >
              <CardTitle className="text-2xl">{service.title}</CardTitle>
              <CardDescription className="">
                {service.description}
              </CardDescription>
            </Link>
          </Card>
        )
      })}
    </div>
  )
}

export default function Hero() {
  return (
    <div className="flex min-h-screen flex-grow items-center gap-12">
      <LandingText />
      <Options />
    </div>
  )
}
