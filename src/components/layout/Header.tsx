// components/layout/Header.tsx
'use client'

import Link from 'next/link'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu'
import { Calculator, BookOpen, Info } from 'lucide-react'

const navigationItems = [
	{
		name: 'Calculadora',
		href: '/home/calculadora/app/P',
		icon: Calculator,
		description: 'Calcula diferentes variables del interés simple'
	},
	{
		name: 'Documentación',
		href: '/documentacion',
		icon: BookOpen,
		description: 'Aprende sobre interés simple y sus fórmulas'
	},
	{
		name: 'Acerca de',
		href: '/acerca',
		icon: Info,
		description: 'Información sobre el proyecto'
	}
]

const navigationMenuTriggerStyle = () => {
	return 'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
}

export function Header() {
	return (
		<header className="border-b">
			<div className="container mx-auto px-4">
				<div className="flex h-16 items-center justify-between">
					<div className="flex items-center">
						<Link href="/" className="flex items-center space-x-2">
							<Calculator className="h-6 w-6 text-primary" />
							<span className="text-xl font-bold">SisEco Interés Simple</span>
						</Link>
					</div>

					<NavigationMenu>
						<NavigationMenuList>
							{navigationItems.map((item) => {
								const Icon = item.icon
								return (
									<NavigationMenuItem key={item.name}>
										<Link href={item.href} className={navigationMenuTriggerStyle()}>
											<Icon className="mr-2 h-4 w-4" />
											{item.name}
										</Link>
									</NavigationMenuItem>
								)
							})}
						</NavigationMenuList>
					</NavigationMenu>
				</div>
			</div>
		</header>
	)
}