"use client"
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/landing/NavBar'
import Footer from '@/components/landing/Footer'
import createApolloClient from '@/services/apollo/client'
import { ApolloProvider } from '@apollo/client'
import { UserContextProvider } from '@/services/contexts/userContext'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const client = createApolloClient()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
<<<<<<< HEAD
        {/* <NavBar /> */}
        {children}
        {/* <Footer /> */}
=======
        <ApolloProvider client={client}>
          <UserContextProvider>
            <NavBar />
            {children}
            <Footer />
          </UserContextProvider>
        </ApolloProvider>
>>>>>>> 0597cb36808017ef36f46c1c63cc48d7279c0944
      </body>
    </html>
  )
}
