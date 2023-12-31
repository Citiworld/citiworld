'use client'

import { navItems } from './nav-items'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HTMLAttributes } from 'react'

export function DesktopNavBar(props: HTMLAttributes<HTMLDivElement>) {
	const pathname = usePathname()

	return (
		<nav {...props}>
			{navItems.map(item =>
				<Link key={item.link} href={item.link} className={pathname == item.link ? 'active' : ''}>{item.text}</Link>
			)}
		</nav>
	)
}