'use client'

import client from "@/tina/__generated__/client"
import { tinaField, useTina } from "tinacms/dist/react"
import { Wave } from '@/components/assets'
import { InfoLayout } from '@/components/layouts'
import Image from 'next/image'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

type AboutPageProps = {
	page: Awaited<ReturnType<typeof client.queries.AboutPage>>
}

const figClassName = 'relative xl:w-48 xl:basis-[40%] 2xl:w-60 2xl:basis-[45%] rounded-2xl shadow-xl overflow-hidden'
const imgClassName = 'object-cover'

export function AboutPage({ page }: AboutPageProps) {
	const { data: { AboutPage } } = useTina(page)

	return (
		<InfoLayout title={AboutPage.title} description={<TinaMarkdown content={AboutPage.description} />} imgSrc={AboutPage.image.src} caption={AboutPage.image.alt}>
			<div className="container max-w-screen-xl space-y-20 text-xl/loose pt-12 pb-32 sm:pb-52 xl:pt-32 xl:pb-60">
				<article className="text-left xl:text-right max-w-prose m-auto xl:mr-unset">
					<h2 className="head-1 text-secondary-900 tracking-wide mb-2">Our Mission</h2>
					<div data-tina-field={tinaField(AboutPage, 'mission')}>
						<TinaMarkdown content={AboutPage.mission} />
					</div>
				</article>
				<article className="text-left xl:text-right max-w-prose m-auto xl:mr-unset">
					<h2 className="head-1 text-secondary-900 tracking-wide mb-2">Our Vision</h2>
					<div data-tina-field={tinaField(AboutPage, 'vision')}>
						<TinaMarkdown content={AboutPage.vision} />
					</div>
				</article>
			</div>
			<div className="absolute bottom-20 -translate-x-10 flex flex-col flex-wrap h-[700px] justify-center gap-8">
				<figure className={figClassName}>
					<Image src={AboutPage.images[0].src} alt={AboutPage.images[0].alt} fill className={imgClassName} />
				</figure>
				<figure className={figClassName}>
					<Image src={AboutPage.images[1].src} alt={AboutPage.images[1].alt} fill className={imgClassName} />
				</figure>
				<figure className={figClassName}>
					<Image src={AboutPage.images[2].src} alt={AboutPage.images[2].alt} fill className={imgClassName} />
				</figure>
			</div>
			<Wave className="translate-y-18 md:translate-y-36 absolute bottom-0 -z-1" />
		</InfoLayout>
	)
}