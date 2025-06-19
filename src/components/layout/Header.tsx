// components/layout/Header.tsx
'use client'

import Link from 'next/link'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu'
import { Calculator, BookOpen, Home, Menu, X } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

const navigationItems = [
	{
		name: 'Inicio',
		href: '/',
		icon: Home,
		description: 'Página principal del proyecto'
	},
	{
		name: 'Calculadora',
		href: '/home/calculadora/app',
		icon: Calculator,
		description: 'Calcula diferentes variables del interés simple'
	},
	{
		name: 'Documentación',
		href: '/home/documentacion',
		icon: BookOpen,
		description: 'Aprende sobre interés simple y sus fórmulas'
	}
]

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	// Prevenir scroll cuando el menú está abierto
	useEffect(() => {
		if (mobileMenuOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}
		
		// Cleanup al desmontar
		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [mobileMenuOpen])

	// Cerrar menú con Escape
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setMobileMenuOpen(false)
			}
		}

		if (mobileMenuOpen) {
			document.addEventListener('keydown', handleEscape)
		}

		return () => document.removeEventListener('keydown', handleEscape)
	}, [mobileMenuOpen])

	return (
		<header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:bg-gray-950/95 dark:supports-[backdrop-filter]:bg-gray-950/80">
			<div className="container mx-auto px-4">
				<div className="flex h-16 items-center justify-between">
					{/* Logo y nombre */}
					<Link
						href="/"
						className="flex items-center space-x-2 transition-transform hover:scale-105"
					>
						<div className="rounded-lg bg-primary p-2 text-white">
							<Calculator className="h-5 w-5" />
						</div>
						<span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent dark:from-primary-400 dark:to-blue-400">
							SisEco Interés Simple
						</span>
					</Link>

					{/* Navegación Desktop */}
					<NavigationMenu className="hidden md:block">
						<NavigationMenuList className="gap-1">
							{navigationItems.map((item) => {
								const Icon = item.icon
								return (
									<NavigationMenuItem key={item.name}>
										<Tooltip>
											<TooltipTrigger asChild>
												<Button
													asChild
													variant="ghost"
													className="group flex h-10 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-primary dark:hover:bg-gray-800"
												>
													<Link href={item.href}>
														<Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
														<span>{item.name}</span>
													</Link>
												</Button>
											</TooltipTrigger>
											<TooltipContent side="bottom">
												{item.description}
											</TooltipContent>
										</Tooltip>
									</NavigationMenuItem>
								)
							})}
						</NavigationMenuList>
					</NavigationMenu>

					{/* Botón menú móvil */}
					<div className="md:hidden">
						<Button 
							variant="ghost" 
							size="icon" 
							onClick={() => setMobileMenuOpen(true)} 
							aria-label="Abrir menú"
							className="hover:bg-gray-100 dark:hover:bg-gray-800"
						>
							<Menu className="h-5 w-5" />
						</Button>
					</div>
				</div>
			</div>

			{/* Menú móvil mejorado */}
			{mobileMenuOpen && (
				<>
					{/* Overlay con animación */}
					<div
						className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-all duration-300 ease-out md:hidden"
						onClick={() => setMobileMenuOpen(false)}
						aria-label="Cerrar menú móvil"
					/>
					
					{/* Panel lateral del menú */}
					<nav className="fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-out md:hidden">
						{/* Header del menú */}
						<div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-6 py-4">
							<div className="flex items-center space-x-2">
								<div className="rounded-lg bg-primary p-1.5 text-white">
									<Calculator className="h-4 w-4" />
								</div>
								<span className="text-lg font-semibold text-gray-900 dark:text-white">
									Menú
								</span>
							</div>
							<Button 
								variant="ghost" 
								size="icon" 
								onClick={() => setMobileMenuOpen(false)} 
								aria-label="Cerrar menú"
								className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
							>
								<X className="h-5 w-5" />
							</Button>
						</div>

						{/* Contenido del menú */}
						<div className="px-6 py-6">
							<ul className="space-y-2">
								{navigationItems.map((item, index) => {
									const Icon = item.icon
									return (
										<li key={item.name}>
											<Link
												href={item.href}
												className="group flex items-center gap-4 rounded-xl px-4 py-3 text-gray-700 dark:text-gray-200 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary active:scale-95"
												onClick={() => setMobileMenuOpen(false)}
												style={{
													animationDelay: `${index * 50}ms`,
													animation: 'slideInFromRight 0.3s ease-out forwards'
												}}
											>
												<div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-2 group-hover:bg-primary group-hover:text-white transition-all duration-200">
													<Icon className="h-5 w-5" />
												</div>
												<div className="flex-1">
													<div className="font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors">
														{item.name}
													</div>
													<div className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
														{item.description}
													</div>
												</div>
											</Link>
										</li>
									)
								})}
							</ul>
						</div>

						{/* Footer del menú */}
						<div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 px-6 py-4">
							<p className="text-center text-sm text-gray-500 dark:text-gray-400">
								SisEco Interés Simple
							</p>
						</div>
					</nav>
				</>
			)}

			{/* Estilos CSS para animaciones */}
			<style jsx>{`
				@keyframes slideInFromRight {
					from {
						opacity: 0;
						transform: translateX(20px);
					}
					to {
						opacity: 1;
						transform: translateX(0);
					}
				}
			`}</style>
		</header>
	)
}