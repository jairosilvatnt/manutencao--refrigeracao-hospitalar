import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppFAB } from '@/components/WhatsAppFAB'
import { useEffect } from 'react'

export default function Layout() {
  const { pathname } = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <main className="flex flex-col min-h-screen font-sans bg-secondary">
      <Header />
      <div className="flex-grow pt-20">
        <Outlet />
      </div>
      <WhatsAppFAB />
      <Footer />
    </main>
  )
}
