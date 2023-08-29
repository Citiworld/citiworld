import { Pipe2 } from '@/components/assets'
import styles from './products.module.css'

type ProductLayoutProps = {
	title: string
	children: React.ReactNode
	form: React.ReactNode
}

export function ProductsLayout({ title, form, children }: ProductLayoutProps) {
	return (
		<div className="relative">
			<Pipe2 className={styles['asset'] + ' max-xs:hidden w-28 sm:w-40 md:w-56 xl:w-72'} />
			<Pipe2 className={styles['asset'] + ' max-xs:hidden w-28 sm:w-40 md:w-56 xl:w-72 right-0 -scale-x-100'} />
			<h1 className="head-1 text-secondary-900 text-center pt-20 mb-10">{title}</h1>
			<div className="max-w-3xl mx-auto mb-8 px-4">
				{form}
			</div>
			<section className="py-6">
				<div className={styles['product-grid']}>
					{children}
				</div>
			</section>
		</div>
	)
}