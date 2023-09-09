'use client'

import { TinaMarkdown } from 'tinacms/dist/rich-text'
import Link from 'next/link'
import { InfoLayout } from '@/components/layouts'
import { tinaField, useTina } from 'tinacms/dist/react'
import client from '@/tina/__generated__/client'

type ServicePageProps = {
	page: Awaited<ReturnType<typeof client.queries.ServicePage>>
}

export function ServicePage({ page }: ServicePageProps) {
	const { data: { ServicePage } } = useTina(page)

	return (
		<InfoLayout title={ServicePage.title} imgSrc={ServicePage.image.src} description={<TinaMarkdown content={ServicePage.description} />} caption={ServicePage.image.alt}>
			<div className="container max-w-screen-xl [&_p:not(.head-1)]:md:text-xl space-y-20">
				{ServicePage.services.map(s =>
					<div key={s.name} className="flex gap-x-4 lg:gap-x-8">
						<i className="i-[material-symbols--settings-suggest] max-sm:hidden text-9xl text-secondary-900"></i>
						<div className="flex-1">
							<p className="head-1 text-secondary-900 tracking-wider mb-2" data-tina-field={tinaField(s, 'name')}>{s.name}</p>
							<div data-tina-field={tinaField(s, 'description')}>
								<TinaMarkdown content={s.description} />
							</div>
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