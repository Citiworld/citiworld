'use client'

import Link from 'next/link'
import styles from './home.module.css'
import { Wave, Circle, Pixel, Gear, Pipe, Pipe2 } from '@/components/assets'
import Image from 'next/image'
import { PrinterQuery, TonerQuery } from '@/tina/__generated__/types'
import client from '@/tina/__generated__/client'
import { tinaField, useTina } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { Icon } from '@iconify/react'

type HomePageProps = {
	printer?: PrinterQuery['Printer'] | null
	toner?: TonerQuery['Toner'] | null
	page: Awaited<ReturnType<typeof client.queries.HomePage>>
}

export function HomePage({ printer, toner, page }: HomePageProps) {
	const { data: { HomePage } } = useTina(page)

	return (
		<>
			<section className="md:min-h-[600px] grid-rows-[1fr_2fr] sm:grid-rows-2 lg:grid-rows-1 grid relative">
				<Pipe2 className="top-[5%] xl:top-[10%] left-0 absolute w-48 opacity-50 max-lg:hidden" />
				<Pixel className="bottom-0 left-0 absolute rotate-180 w-40 xl:w-48 opacity-50 max-lg:hidden" />
				<Pipe2 className="bottom-20 right-0 lg:left-[35%] absolute rotate-180 w-48 opacity-50 max-lg:hidden" />
				<div className="grid static lg:absolute w-full h-full lg:grid-cols-[5fr_7fr]">
					<div className="max-lg:hidden"></div>
					<div className={styles.slice}>
						<figure>
							<Image
								src={HomePage.heroImage}
								alt=""
								className="w-full h-full bottom-0 object-bottom object-cover"
								fill priority
								sizes="(max-width: 1024px) 100vw, 50vw"
							/>
						</figure>
					</div>
				</div>
				<div className="container grid lg:grid-cols-[5fr_7fr] relative">
					<div className="self-center text-center lg:text-left py-16 md:py-24">
						<h1 className="head-1 text-secondary-900" data-tina-field={tinaField(HomePage, 'heroTitle')}>{HomePage.heroTitle}</h1>
						<div className="subtitle" data-tina-field={tinaField(HomePage, 'heroDescription')}>
							<TinaMarkdown content={HomePage.heroDescription} />
						</div>
					</div>
				</div>
			</section>
			<section className="py-12 lg:py-24 bg-gradient-to-b from-secondary-900 to-accent-400 text-white relative">
				<div className="container">
					<h1 className="head-1 text-white text-center mb-8 md:mb-12" data-tina-field={tinaField(HomePage, 'productTitle')}>{HomePage.productTitle}</h1>
					<div className="grid md:grid-cols-2 text-center max-w-4xl mx-auto gap-8">
						<div className={styles.col}>
							<Circle className="absolute w-32 -left-18 lg:w-40 lg:-left-24 opacity-50 -rotate-[60deg] -z-1" />
							<div className={styles.card}>
								<figure>
									{printer?.images &&
										<Image src={printer.images[0].src} alt={printer.images[0].alt} fill className="w-full h-full object-cover" sizes="(max-width: 400px) 100vw, (max-width: 640px) 368px, 432px" />
									}
								</figure>
								<h2>Machines</h2>
							</div>
							<Link className={styles['transparent-btn']} href="/machines">View More</Link>
						</div>
						<div className={styles.col}>
							<div className={styles.card}>
								<figure>
									{toner?.image &&
										<Image src={toner?.image.src} alt={toner?.image.alt} fill className="w-full h-full object-cover" sizes="(max-width: 400px) 100vw, (max-width: 640px) 368px, 432px" />
									}
								</figure>
								<h2>Toners and Ink</h2>
							</div>
							<Link className={styles['transparent-btn']} href="/toners-ink">View More</Link>
						</div>
					</div>
				</div>
				<Pixel className="absolute right-0 top-0 opacity-50 w-20 xs:w-32 md:w-48 xl:w-60" />
				<Pipe className="absolute bottom-0 opacity-50 right-[10%] w-32 lg:w-48" />
				<Pipe2 className="absolute bottom-32 md:bottom-8 opacity-50 left-0 h-32 xl:h-36 w-auto" />
			</section>
			<section className="py-12 md:py-24 relative">
				<div className="container grid md:grid-cols-2 gap-8 relative z-1">
					<div className={styles['service-grid']}>
						{HomePage.icons.map((icon, i) =>
							<figure key={i} data-tina-field={tinaField(HomePage, 'icons', i)}>
								<Icon icon={icon} />
							</figure>
						)}
					</div>
					<div className="self-center text-center md:text-right">
						<h1 className="head-1 text-secondary-900" data-tina-field={tinaField(HomePage, 'serviceTitle')}>{HomePage.serviceTitle}</h1>
						<div className="subtitle" data-tina-field={tinaField(HomePage, 'serviceDescription')}>
							<TinaMarkdown content={HomePage.serviceDescription} />
						</div>
						<Link href="/services" className="btn highlight has-icons mt-4">Our Services <i className="i-[material-symbols--arrow-forward-rounded] text-xl" /></Link>
					</div>
				</div>
				<div className="absolute w-full bottom-0 max-md:hidden">
					<Wave />
				</div>
			</section >
		</>
	)
}