// components/layout/Header.tsx
'use client'

import Link from 'next/link'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu'
import { Calculator, BookOpen, Home } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'

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

					{/* Navegación */}
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

					{/* Menú móvil (placeholder) */}
					<div className="md:hidden">
						<Button variant="outline" size="icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="h-5 w-5"
							>
								<line x1="4" x2="20" y1="12" y2="12" />
								<line x1="4" x2="20" y1="6" y2="6" />
								<line x1="4" x2="20" y1="18" y2="18" />
							</svg>
						</Button>
					</div>
				</div>
			</div>
		</header>
	)
}