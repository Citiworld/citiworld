import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './icon.svg'
import { montserrat, poppins } from '@/fonts'
import FacebookLogo from '@/public/assets/fb.svg'
import ShopeeLogo from '@/public/assets/shopee.svg'
import { MobileNavBar } from './mobile-nav-bar'
import { navItems } from './nav-items'
import { DesktopNavBar } from './desktop-nav-bar'

export const metadata: Metadata = {
	title: {
		template: '%s | CitiWorld',
		default: 'CitiWorld',
	},
	generator: 'Next.js',
	description: 'Discover top-quality Brother printers and genuine toner cartridges for exceptional printing results. Shop now for reliable printing solutions and unbeatable deals!',
	manifest: '/manifest.webmanifest',
	keywords: ['printer', 'toner', 'ink', 'brother'],
	applicationName: 'CitiWorld',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#2eaafa' },
		{ media: '(prefers-color-scheme: dark)', color: '#001a33' },
	],
	category: 'stationery'
}

const email = 'citiworld@gmail.com'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
			<body>
				<header className="font-primary font-bold shadow-md relative z-5">
					<div className="container flex justify-between items-center text-secondary-950 h-17">
						<Link href="/" className='flex items-center space-x-2'>
							<Image src={Logo} alt="blue globe-like design drawn with longtitude and latitudes" width={60} />
							<span className="text-2xl tracking-widest">CITIWORLD</span>
						</Link>
						<DesktopNavBar className="gap-x-7 max-lg:hidden flex h-full desktop" />
						<MobileNavBar />
					</div>
				</header>
				<main>{children}</main>
				<footer>
					<div className="container font-primary flex py-10 gap-x-10 gap-y-8 flex-wrap md:gap-x-14 md:justify-center lg:gap-x-30 xl:gap-x-14">
						<div className="text-center self-center">
							<Image src={Logo} alt="blue globe-like design drawn with longtitude and latitudes" width={150} className="mx-auto" />
							<p className="text-3xl mt-2 font-bold tracking-widest">CITIWORLD</p>
							<p className="text-sm font-light font-secondary">Business Machines Services Corp.</p>
						</div>
						<nav className="space-y-3 flex flex-col xl:pr-10 xl:border-r-1 font-bold justify-center">
							{navItems.map(item => <Link key={item.link} href={item.link}>{item.text}</Link>)}
						</nav>
						<div className="font-secondary space-y-2 text-sm">
							<p className="font-medium text-base">CONTACT US</p>
							<p><i className="text-base mr-1 i-[material-symbols--alternate-email-rounded]" /> <a className="underline" href={`mailto:${email}`}>{email}</a> </p>
							<p><i className="text-base mr-1 i-[material-symbols--call]" /> 8-723-4894/8-725-7031</p>
							<p><i className="text-base mr-1 i-[material-symbols--location-on-rounded]" /> 3F Grayline Ventures Bldg. 14 Arayat St., Brgy. Malamig, Mandaluyong, Philippines</p>
							<div className="flex gap-x-2 pt-1 footer-icons">
								<a href="https://www.facebook.com/profile.php?id=100094323159645">
									<Image className="w-10" src={FacebookLogo} alt="white f inside a dark blue circle" />
								</a>
								<a href="https://shopee.ph/citiworld2023">
									<Image className="w-10" src={ShopeeLogo} alt="white outline of a bag with an 'S' inside all within a dark blue circle" />
								</a>
							</div>
						</div>
					</div>
				</footer>
			</body>
		</html>
	)
}
