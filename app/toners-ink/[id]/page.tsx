import { notFound } from "next/navigation"
import { ProductLayout } from "@/components/layouts/product-layout"
import { client } from '@/tina/__generated__/client'
import { TinaMarkdown } from "tinacms/dist/rich-text"
import Image from "next/image"
import { getToners } from "../page"

export const dynamicParams = false

export async function generateStaticParams() {
	const toners = await getToners()
	console.log(toners)
	return toners?.map(t => ({ id: t._sys.filename })) ?? []
}

async function getToner({ id }: TonerPageProps['params']) {
	try {
		const product = await client.queries.Toner({ relativePath: `${id}.md` })
		return product.data.Toner
	} catch (error) {
		return undefined
	}
}

type TonerPageProps = {
	params: {
		id: string
	}
}

export default async function TonerPage({ params }: TonerPageProps) {
	const toner = await getToner(params)

	if (!toner) notFound()

	return (
		<ProductLayout
			product={toner}
			preview={<Image className="shadow-xl object-cover rounded block" src={toner.image.src} alt={toner.image.alt} width={600} height={600} />}
		>
			<TinaMarkdown content={toner.description} />
			<button className="btn highlight w-full mt-8">Inquire Now</button>
		</ProductLayout>
	)
}
