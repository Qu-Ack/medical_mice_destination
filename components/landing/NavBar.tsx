import { User, useUserContext } from '@/services/contexts/userContext'
import { Button } from '../ui/button'
import Link from 'next/link'

const navigationOptions = [
  { title: 'Home', link: '/demo/' },
  { title: 'Testimonials', link: '/demon' },
  { title: 'Services', link: '/demo' },
  { title: 'Gallery', link: '/demo' },
  { title: 'Contact', link: '/demo' },
]

// Profile Component
function Profile({user}: {user:User}) {
  return <Link href={`/dashboard/patient/${user.ID}`}>{user.Name}</Link>
}

// LogIn Button
function LogInSignUp() {
  return (
    <Link href="/register/">
      <Button className="px-4 py-2 text-base">Register Now</Button>
    </Link>
  )
}

// NavBar Component
<<<<<<< HEAD
export default function NavBar({ isLoggedIn = true }) {
=======
export default function NavBar({ isLoggedIn = false }) {

  const {user} = useUserContext()

>>>>>>> 0597cb36808017ef36f46c1c63cc48d7279c0944
  return (
    <nav className="shadow-md">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-8">
        {/* Logo Section */}
        <div className="flex-shrink-0 text-3xl font-bold text-blue-500">
          TBO
        </div>

        {/* Navigation Options */}
        <div className="flex flex-1 justify-center">
          <div className="hidden gap-6 md:flex">
            {navigationOptions.map((option) => (
              <Link href={option.link} key={option.title}>
                <Button variant="link" className="text-lg">
                  {option.title}
                </Button>
              </Link>
            ))}
          </div>
        </div>

        {/* Profile or Log In */}
        <div className="flex flex-shrink-0 gap-4">
          {user ? <Profile user={user}/> : <LogInSignUp />}
        </div>

        {/* Mobile Navigation Menu (for smaller screens) */}
        <div className="ml-auto flex md:hidden">
          <Button variant="ghost" className="text-lg">
            ☰
          </Button>
        </div>
      </div>
    </nav>
  )
}
