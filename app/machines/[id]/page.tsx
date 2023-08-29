import { notFound } from "next/navigation"
import { ProductLayout } from "@/components/layouts/product-layout"
import { client } from '@/tina/__generated__/client'

async function getPrinter({ id }: PrinterPageProps['params']) {
	try {
		const product = await client.queries.Printer({ relativePath: `${id}.md` })
		return product.data.Printer
	} catch(error) {
		return undefined
	}
}

type PrinterPageProps = {
	params: {
		id: string
	}
}

export default async function PrinterPage({ params }: PrinterPageProps) {
	const printer = await getPrinter(params)

	if (!printer) notFound()

	return (
		<ProductLayout product={printer} />
	)
}
