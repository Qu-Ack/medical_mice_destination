export default function no_navbar_footerLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      {/* <NavBar /> */}
      {children}
      {/* <Footer /> */}
    </div>
  )
}
