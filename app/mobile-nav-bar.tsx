'use client'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { navItems } from './nav-items'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function MobileNavBar() {
	const pathname = usePathname()

	return (
		<NavigationMenu.Root className="lg:hidden">
			<NavigationMenu.List>
				<NavigationMenu.Item>
					<NavigationMenu.Trigger className="outline-2 outline-solid outline-transparent hover:outline-primary-300 hover:bg-primary-100 transition-colors rounded-lg cursor-default" aria-label="menu" title="menu">
						<i className="i-[material-symbols--menu-rounded] text-4xl" />
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className="absolute top-16 left-0 w-full bg-white z-5 py-4 shadow-xl rounded-b-xl">
						<div className="container grid gap-y-2 text-base">
							{navItems.map(item =>
								<Link key={item.text} href={item.link} passHref legacyBehavior>
									<NavigationMenu.Link active={pathname === item.link} className="py-1 border-l-2 px-3">
										{item.text}
									</NavigationMenu.Link>
								</Link>
							)}
						</div>
					</NavigationMenu.Content>
				</NavigationMenu.Item>
				<NavigationMenu.Indicator className="bg-primary-400" />
			</NavigationMenu.List>

			<NavigationMenu.Viewport />
		</NavigationMenu.Root>
	)
}