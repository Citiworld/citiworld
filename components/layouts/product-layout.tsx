import { BackButton } from "@/components/nav-button"
import { formatPrice } from "@/lib/utils"
import styles from './product-view.module.css'


type ProductLayoutProps = {
	product: {
		name: string
		brand: string
		price: number
	}
	preview: React.ReactNode
	children: React.ReactNode
}

export function ProductLayout({ product, preview, children }: ProductLayoutProps) {
	return (
		<>
			<div className="container mt-8 max-w-screen-xl">
				<BackButton className="text-secondary-900 hover:text-secondary-950 font-secondary font-medium text-xl transition-colors">
					<i className="i-[material-symbols--arrow-back]" /> Back
				</BackButton>
			</div>

			<section className="my-8">
				<div className="container grid grid-cols-1 md:grid-cols-10 gap-x-8 lg:gap-x-12 xl:gap-x-16 gap-y-10 max-w-screen-xl">
					<aside className={`${styles.swiper} md:col-span-5 lg:col-span-4`}>
						<div className="max-md:max-w-sm mx-auto">
							{preview}
						</div>
					</aside>
					<article className="text-secondary-900 md:col-span-5 lg:col-span-6 place-self-center">
						<h1 className="head-1">{product.name}</h1>
						<p className="text-3xl font-secondary font-medium tracking-wide my-2">{product.brand}</p>
						<p className="text-2xl font-secondary font-medium">{formatPrice(product.price)}</p>
						<div className={styles['description']}>
							{children}
						</div>
					</article>
				</div>
			</section>
		</>
	)
}
