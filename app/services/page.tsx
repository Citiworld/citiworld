import client from '@/tina/__generated__/client'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import Link from 'next/link'
import { InfoLayout } from '@/components/layouts'

export const metadata = {
	title: 'Services'
}

async function getData() {
	try {
		const { data } = await client.queries.Page({ relativePath: 'pages.md' })
		return data.Page.services
	} catch (err) {
		console.error(err)
	}
}

export default async function ServicePage() {
	const data = await getData()

	if (!data) {
		throw new Error('Server error')
	}

	return (
		<InfoLayout title={data.title} imgSrc={data.image.src} description={<TinaMarkdown content={data.description} />} caption={data.image.alt}>
			<div className="container max-w-screen-xl [&_p:not(.head-1)]:md:text-xl space-y-20">
				{data.services.map(s =>
					<div key={s.name} className="flex gap-x-4 lg:gap-x-8">
						<i className="i-[material-symbols--settings-suggest] max-sm:hidden text-9xl text-secondary-900"></i>
						<div>
							<p className="head-1 text-secondary-900 tracking-wider mb-2">{s.name}</p>
							<TinaMarkdown content={s.description} />
							<Link className="btn highlight has-icons px-8 mt-6" href={`/contact-us?subject=${s.name} Inquiry`}>
								Inquire now <i className="i-[material-symbols--arrow-forward] text-xl" />
							</Link>
						</div>
					</div>
				)}
			</div>
		</InfoLayout>
	)
}