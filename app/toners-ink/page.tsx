import { Product } from '@/components/product'
import { ProductsLayout } from '@/components/layouts/product-list-layout'
import client from '@/tina/__generated__/client'
import { Metadata } from 'next'
import { filterFalsy } from '@/lib/utils'

export async function getToners() {
	try {
		const res = await client.queries.TonerConnection()
		const toners = res.data.TonerConnection.edges?.map(toner => toner?.node)

		return toners?.filter(filterFalsy)
	} catch (err) {
		console.error(err)
	}
}

export const metadata: Metadata = {
	title: 'Toners and Ink',
	description: 'The catalog of toners and ink that CitiWorld offers.'
}

export default async function ProductPage() {
	const toners = await getToners()

	if (!toners) {
		throw new Error('server error')
	}

	return (
		<ProductsLayout title="Toners and Ink">
			{toners.map(toner =>
				<Product key={toner.id}
					src={toner.image.src}
					alt={toner.image.alt}
					brand={toner.brand}
					name={toner.name}
					price={toner.price}
					url={`/toners-ink/${toner._sys.filename}`}
				/>
			)}
		</ProductsLayout>
	)
}