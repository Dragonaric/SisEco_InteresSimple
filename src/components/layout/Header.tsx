// components/layout/Header.tsx
'use client'

import Link from 'next/link'
import { Calculator, BookOpen, Home, Menu, X } from 'lucide-react'
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

	// Función para cerrar el menú móvil
	const closeMobileMenu = () => {
		setMobileMenuOpen(false)
	}

	return (
		<>
			<header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:bg-gray-950/95 dark:supports-[backdrop-filter]:bg-gray-950/80 w-full">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex h-16 md:h-20 items-center justify-between">
						{/* Logo y nombre */}
						<Link
							href="/"
							className="flex items-center space-x-2 transition-transform hover:scale-105 flex-shrink-0"
							onClick={closeMobileMenu}
						>
							<div className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 p-2 md:p-3 text-white shadow-lg">
								<Calculator className="h-5 w-5 md:h-7 md:w-7" />
							</div>
							<span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								<span className="hidden sm:inline">SisEco Interés Simple</span>
								<span className="sm:hidden">SisEco</span>
							</span>
						</Link>

						{/* Navegación Desktop */}
						<nav className="hidden md:flex items-center space-x-1">
							{navigationItems.map((item) => {
								const Icon = item.icon
								return (
									<Link
										key={item.name}
										href={item.href}
										className="group flex items-center gap-2 rounded-lg px-3 py-2 md:px-5 md:py-3 text-sm md:text-base font-medium text-gray-600 dark:text-gray-300 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105"
										title={item.description}
									>
										<Icon className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:scale-110" />
										<span>{item.name}</span>
									</Link>
								)
							})}
						</nav>

						{/* Botón menú móvil */}
						<button 
							className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
							onClick={() => setMobileMenuOpen(true)} 
							aria-label="Abrir menú"
						>
							<Menu className="h-5 w-5 text-gray-600 dark:text-gray-300" />
						</button>
					</div>
				</div>
			</header>

			{/* Menú móvil */}
			{mobileMenuOpen && (
				<div className="fixed inset-0 z-50 md:hidden">
					{/* Overlay */}
					<div
						className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn"
						onClick={closeMobileMenu}
						aria-label="Cerrar menú móvil"
					/>
					
					{/* Panel lateral del menú */}
					<nav className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-2xl animate-slideInRight">
						{/* Header del menú */}
						<div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-6 py-4 bg-gray-50 dark:bg-gray-800">
							<div className="flex items-center space-x-2">
								<div className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 p-1.5 text-white">
									<Calculator className="h-4 w-4" />
								</div>
								<span className="text-lg font-semibold text-gray-900 dark:text-white">
									Menú Principal
								</span>
							</div>
							<button 
								className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
								onClick={closeMobileMenu} 
								aria-label="Cerrar menú"
							>
								<X className="h-4 w-4 text-gray-600 dark:text-gray-300" />
							</button>
						</div>

						{/* Contenido del menú */}
						<div className="px-4 py-6 h-full overflow-y-auto">
							<ul className="space-y-2">
								{navigationItems.map((item, index) => {
									const Icon = item.icon
									return (
										<li key={item.name}>
											<Link
												href={item.href}
												className="group flex items-center gap-4 rounded-xl px-4 py-4 text-gray-700 dark:text-gray-200 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 active:scale-95"
												onClick={closeMobileMenu}
												style={{
													animationDelay: `${index * 100}ms`
												}}
											>
												<div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-3 group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-all duration-200">
													<Icon className="h-5 w-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
												</div>
												<div className="flex-1 min-w-0">
													<div className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
														{item.name}
													</div>
													<div className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
														{item.description}
													</div>
												</div>
											</Link>
										</li>
									)
								})}
							</ul>

							{/* Información adicional */}
							<div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
								<div className="text-center">
									<h3 className="font-semibold text-gray-900 dark:text-white mb-2">
										Universidad Mayor de San Simón
									</h3>
									<p className="text-sm text-gray-600 dark:text-gray-300">
										Herramienta educativa para el aprendizaje de conceptos financieros
									</p>
								</div>
							</div>
						</div>
					</nav>
				</div>
			)}

			{/* Estilos CSS personalizados */}
			<style jsx>{`
				@keyframes fadeIn {
					from {
						opacity: 0;
					}
					to {
						opacity: 1;
					}
				}

				@keyframes slideInRight {
					from {
						opacity: 0;
						transform: translateX(100%);
					}
					to {
						opacity: 1;
						transform: translateX(0);
					}
				}

				.animate-fadeIn {
					animation: fadeIn 0.3s ease-out;
				}

				.animate-slideInRight {
					animation: slideInRight 0.3s ease-out;
				}

				.line-clamp-2 {
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}

				/* Mejoras para pantallas muy pequeñas */
				@media (max-width: 380px) {
					.container {
						padding-left: 1rem;
						padding-right: 1rem;
					}
				}

				/* Ajustes para tablets */
				@media (min-width: 768px) and (max-width: 1023px) {
					.container {
						padding-left: 2rem;
						padding-right: 2rem;
					}
				}

				/* Asegurar que el header no se superponga con el contenido */
				body {
					padding-top: 0;
				}
			`}</style>
		</>
	)
}