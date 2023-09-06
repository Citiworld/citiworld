import { Product } from '@/components/product'
import { ProductsLayout } from '@/components/layouts/product-list-layout'
import client from '@/tina/__generated__/client'
import { Metadata } from 'next'
import { filterFalsy } from '@/lib/utils'

export async function getPrinters() {
	try {
		const res = await client.queries.PrinterConnection()
		const printers = res.data.PrinterConnection.edges?.map(printer => printer?.node)

		return printers?.filter(filterFalsy)
	} catch (err) {
		console.error(err)
	}
}

export const metadata: Metadata = {
	title: 'Machines',
	description: 'The catalog of printers that CitiWorld offers.'
}

export default async function ProductPage() {
	const printers = await getPrinters()

	if (!printers) {
		throw new Error('server error')
	}

	return (
		<ProductsLayout title="Machines">
			{printers.map(printer =>
				<Product key={printer.id}
					src={printer.images[0].src}
					alt={printer.images[0].alt}
					brand={printer.brand}
					name={printer.name}
					price={printer.price}
					url={`/machines/${printer._sys.filename}`}
				/>
			)}
		</ProductsLayout>
	)
}