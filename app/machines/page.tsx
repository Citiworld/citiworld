import { Product } from '@/components/product'
import { ProductsLayout } from '@/components/layouts/product-list-layout'
import { SearchForm } from '@/components/search-form'
import client from '@/tina/__generated__/client'

function filterFalsy<T>(item?: T | null): item is T {
	return !!item;
}

async function getData() {
	try {
		const res = await client.queries.PrinterConnection()
		const printers = res.data.PrinterConnection.edges?.map(printer => printer?.node)

		return printers?.filter(filterFalsy)
	} catch (err) {
		console.error(err)
	}
}

export default async function ProductPage() {
	const data = await getData()

	if (!data) {
		throw new Error('server error')
	}

	return (
		<ProductsLayout title="Machines" form={<SearchForm />}>
			{data.map(printer =>
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