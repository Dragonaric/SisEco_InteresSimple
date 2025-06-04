// components/layout/Header.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Calculator, BookOpen, Home } from 'lucide-react'

const navigation = [
  { name: 'Inicio', href: '/', icon: Home },
  { name: 'Calculadora', href: '/calculadora', icon: Calculator },
  { name: 'Documentación', href: '/documentacion', icon: BookOpen },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-dark shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo y título */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Calculator className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-white text-lg font-bold">
                Calculadora de Interés Simple
              </h1>
              <p className="text-blue-200 text-sm">
                Universidad Mayor de San Simón
              </p>
            </div>
          </div>

          {/* Navegación */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-blue-200 hover:text-white hover:bg-blue-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Menú móvil */}
          <div className="md:hidden">
            <button className="text-blue-200 hover:text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navegación móvil */}
        <div className="md:hidden border-t border-blue-800 py-4">
          <div className="flex flex-col space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-blue-200 hover:text-white hover:bg-blue-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
}