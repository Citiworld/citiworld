'use client'
import { ProductLayout } from "@/components/layouts/product-layout"
import { TinaMarkdown } from "tinacms/dist/rich-text"
import Image from "next/image"
import Link from "next/link"
import client from "@/tina/__generated__/client"
import { useTina } from "tinacms/dist/react"

type TonerPageProps = {
	toner: Awaited<ReturnType<typeof client.queries.Toner>>
}

export function TonerPage({ toner }: TonerPageProps) {
	const { data: { Toner } } = useTina(toner)

	return (
		<ProductLayout
			product={Toner}
			preview={<Image className="shadow-xl object-cover rounded block" src={Toner.image.src} alt={Toner.image.alt} width={600} height={600} />}
		>
			<TinaMarkdown content={Toner.description} />
			<Link href={Toner.url ?? `/contact-us?subject=${Toner.name}`} className="btn highlight w-full mt-8 text-center">
				{Toner.url ? 'Buy now' : 'Inquire Now'}
			</Link>
		</ProductLayout>
	)
}