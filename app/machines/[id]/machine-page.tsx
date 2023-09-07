'use client'

import { TinaMarkdown } from "tinacms/dist/rich-text"
import { ProductSwiper } from "@/components/product-swiper"
import { ProductLayout } from "@/components/layouts/product-layout"
import Link from "next/link"
import client from "@/tina/__generated__/client"
import { useTina } from "tinacms/dist/react"

type MachinePageProps = {
	printer: Awaited<ReturnType<typeof client.queries.Printer>>
}

export function MachinePage({ printer }: MachinePageProps) {
	const { data: { Printer } } = useTina(printer)
	return (
		<ProductLayout product={Printer} preview={<ProductSwiper images={Printer.images} />}>
			<TinaMarkdown content={Printer.description} />
			<Link href={`/contact-us?subject=${Printer.name}`} className="btn highlight w-full mt-8 text-center">Inquire Now</Link>
		</ProductLayout>
	)
}