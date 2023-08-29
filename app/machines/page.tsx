import { Product } from '@/components/product'
import { ProductsLayout } from '@/components/layouts/product-list-layout'
import { SearchForm } from '@/components/search-form'

export default function ProductPage() {
	return (
		<ProductsLayout title="Machines" form={<SearchForm />}>
			{Array.from({ length: 9 }).map((_, i) =>
				<Product key={i} src="/placeholder/printer.png" alt="a black printer" brand="Brother" name="Inkjet Printer" price={8998} url={`/machines/${i}`} />
			)}
		</ProductsLayout>
	)
}