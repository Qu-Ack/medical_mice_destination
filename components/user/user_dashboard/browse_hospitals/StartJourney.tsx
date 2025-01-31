import { Button } from '@/components/ui/button'

function StartJourneyButton() {
  return (
    <Button className="transform rounded-full bg-blue-600 px-8 py-6 text-xl font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-700">
      Start Now
    </Button>
  )
}

function Content() {
  return (
    <>
      <h1 className="mb-6 text-4xl font-bold text-blue-800">
        Begin Your Medical Tourism Journey
      </h1>
      <p className="mb-8 max-w-2xl text-xl text-gray-600">
        Discover world-class healthcare options abroad. Experience top-quality
        medical treatments combined with the opportunity to explore new
        destinations.
      </p>
      <StartJourneyButton />
    </>
  )
}

const StartJourneyPage = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-blue-50 p-8 text-center">
      <Content />
    </div>
  )
}

export default StartJourneyPage
