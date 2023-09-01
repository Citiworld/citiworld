import { Wave } from '@/components/assets'
import { InfoLayout } from '@/components/layouts'
import client from '@/tina/__generated__/client'
import { Metadata } from 'next'
import Image from 'next/image'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

async function getData() {
	try {
		const { data } = await client.queries.Page({ relativePath: 'pages.md' })
		return data.Page.about
	} catch (err) {
		console.error(err)
	}
}

export const metadata: Metadata = {
	title: 'About'
}

export default async function AboutPage() {
	const data = await getData()

	if (!data) {
		throw new Error('Server error')
	}

	const figClassName = 'relative xl:w-48 xl:basis-[40%] 2xl:w-60 2xl:basis-[45%] rounded-2xl shadow-xl overflow-hidden'
	const imgClassName = 'object-cover'

	return (
		<InfoLayout title={data.title} description={<TinaMarkdown content={data.description} />} imgSrc={data.image.src} caption={data.image.alt}>
			<div className="container max-w-screen-xl space-y-20 text-xl/loose pt-12 pb-32 sm:pb-52 xl:pt-32 xl:pb-60">
				<article className="text-left xl:text-right max-w-prose m-auto xl:mr-unset">
					<h2 className="head-1 text-secondary-900 tracking-wide mb-2">Our Mission</h2>
					<TinaMarkdown content={data.mission} />
				</article>
				<article className="text-left xl:text-right max-w-prose m-auto xl:mr-unset">
					<h2 className="head-1 text-secondary-900 tracking-wide mb-2">Our Vision</h2>
					<TinaMarkdown content={data.vision} />
				</article>
			</div>
			<div className="absolute bottom-20 -translate-x-10 flex flex-col flex-wrap h-[700px] justify-center gap-8">
				<figure className={figClassName}>
					<Image src={data.images[0].src} alt={data.images[0].alt} fill className={imgClassName} />
				</figure>
				<figure className={figClassName}>
					<Image src={data.images[1].src} alt={data.images[1].alt} fill className={imgClassName} />
				</figure>
				<figure className={figClassName}>
					<Image src={data.images[2].src} alt={data.images[2].alt} fill className={imgClassName} />
				</figure>
			</div>
			<Wave className="translate-y-18 md:translate-y-36 absolute bottom-0 -z-1" />
		</InfoLayout>
	)
}