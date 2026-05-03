import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Snowflake, PhoneCall, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

export const Header = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Agendar Manutenção', path: '/agendar' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-header">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Snowflake className="h-6 w-6 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-slate-800 leading-tight">
              RefriHosp
            </span>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
              Maintenance Specialists
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary relative py-1',
                isActive(item.path)
                  ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary'
                  : 'text-slate-600',
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="destructive"
            className="animate-pulse-red font-bold shadow-md hover:shadow-lg transition-all"
            asChild
          >
            <Link to="/agendar">
              <PhoneCall />
              Emergência 24h
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-slate-100 transition-colors"
            >
              <Menu className="h-6 w-6 text-slate-700" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader className="mb-8 text-left">
              <SheetTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Menu de Navegação
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <SheetClose key={item.path} asChild>
                  <Link
                    to={item.path}
                    className={cn(
                      'text-lg font-medium py-2 px-4 rounded-md transition-colors',
                      isActive(item.path)
                        ? 'bg-primary/10 text-primary'
                        : 'text-slate-600 hover:bg-slate-100',
                    )}
                  >
                    {item.name}
                  </Link>
                </SheetClose>
              ))}
              <div className="my-4 border-t border-slate-100" />
              <SheetClose asChild>
                <Button
                  variant="destructive"
                  className="w-full justify-start animate-pulse-red font-bold transition-all"
                  asChild
                >
                  <Link to="/agendar">
                    <PhoneCall />
                    Emergência 24h
                  </Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
