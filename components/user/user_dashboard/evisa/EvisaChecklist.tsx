import React from 'react'
import { DotFilledIcon } from '@radix-ui/react-icons'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

const steps = [
  {
    step: 'step1',
    title: 'Check Eligibility',
    description:
      "Confirm if you're eligible to apply for the eVisa based on your nationality and purpose of visit",
  },
  {
    step: 'step2',
    title: 'Gather Required Documents',
    description: (
      <ul className="space-y-1 text-xs">
        <li className="flex items-center">
          <DotFilledIcon className="mr-2 h-3 w-3" /> Valid passport (min. 6
          months validity)
        </li>
        <li className="flex items-center">
          <DotFilledIcon className="mr-2 h-3 w-3" /> Recent passport-sized photo
        </li>
        <li className="flex items-center">
          <DotFilledIcon className="mr-2 h-3 w-3" /> Travel itinerary details
        </li>
        <li className="flex items-center">
          <DotFilledIcon className="mr-2 h-3 w-3" /> Accommodation proof
        </li>
        <li className="flex items-center">
          <DotFilledIcon className="mr-2 h-3 w-3" /> Payment information
        </li>
      </ul>
    ),
  },
  {
    step: 'step3',
    title: 'Create an Account',
    description: 'Register on the official eVisa portal if required',
  },
  {
    step: 'step4',
    title: 'Complete Application Form',
    description:
      'Fill out the form with personal, passport, and travel details',
  },
  {
    step: 'step5',
    title: 'Upload Documents',
    description: 'Upload all required documents in the specified format',
  },
  {
    step: 'step6',
    title: 'Pay eVisa Fee',
    description: 'Make the payment for visa processing',
  },
  {
    step: 'step7',
    title: 'Submit Application',
    description: 'Review and submit your application',
  },
  {
    step: 'step8',
    title: 'Final Steps',
    description: (
      <ul className="space-y-1 text-xs">
        <li className="flex items-center">
          <DotFilledIcon className="mr-2 h-3 w-3" /> Wait for processing
          (processing time varies)
        </li>
        <li className="flex items-center">
          <DotFilledIcon className="mr-2 h-3 w-3" /> Receive eVisa approval
        </li>
        <li className="flex items-center">
          <DotFilledIcon className="mr-2 h-3 w-3" /> Print eVisa copy if
          required
        </li>
        <li className="flex items-center">
          <DotFilledIcon className="mr-2 h-3 w-3" /> Keep documents ready for
          travel
        </li>
      </ul>
    ),
  },
]

const EvisaChecklist = () => {
  return (
    <section id="evisaChecklist">
      <div className="mb-6 text-center">
        <h2 className="mb-2 text-3xl font-bold">Application Checklist</h2>
        <p className="text-base text-gray-600">
          Track your application progress
        </p>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-lg">
        <Accordion type="single" collapsible className="w-full">
          {steps.map(({ step, title, description }, index) => (
            <AccordionItem value={step} key={step}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex w-full items-center space-x-3">
                  <Checkbox id={step} />
                  <div className="flex flex-1 items-center justify-between">
                    <Label
                      htmlFor={step}
                      className="text-sm font-medium leading-none"
                    >
                      {index + 1}. {title}
                    </Label>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pl-8 text-sm text-gray-600">{description}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="mt-6 flex justify-center">
        <Button className="rounded-lg bg-blue-600 px-6 py-3 text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Get eVisa now
        </Button>
      </div>
    </section>
  )
}

export default EvisaChecklist
