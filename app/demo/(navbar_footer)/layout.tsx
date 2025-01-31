import NavBar from '@/components/landing/NavBar'
import Footer from '@/components/landing/Footer'

export default function navbar_footerLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}
