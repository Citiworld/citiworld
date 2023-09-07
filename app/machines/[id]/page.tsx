import { notFound } from "next/navigation"
import { client } from '@/tina/__generated__/client'
import { getPrinters } from "../page"
import { Metadata, ResolvingMetadata } from "next"
import { MachinePage } from "./machine-page"

export const dynamicParams = false

export async function generateStaticParams() {
	const printers = await getPrinters()
	return printers?.map(t => ({ id: t._sys.filename })) ?? []
}

async function getPrinter({ id }: PrinterPageProps['params']) {
	try {
		return await client.queries.Printer({ relativePath: `${id}.md` })
	} catch (error) {
		return undefined
	}
}

type PrinterPageProps = {
	params: {
		id: string
	}
}

export async function generateMetadata({ params }: PrinterPageProps, parent: ResolvingMetadata): Promise<Metadata> {

	const printer = await getPrinter(params)

	if (!printer) notFound()

	const prevImages = (await parent).openGraph?.images || []
	const data = printer?.data.Printer

	return {
		title: data.name,
		description: data.description,
		openGraph: {
			images: [data.images[0].src, ...prevImages],
		}
	} as Metadata
}

export default async function Page({ params }: PrinterPageProps) {
	const printer = await getPrinter(params)

	if (!printer) notFound()

	return (
		<MachinePage printer={printer} />
	)
}
