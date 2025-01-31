import React from 'react'

export default function demoLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div>{children}</div>
}
