import { BackButton } from "@/components/nav-button"
import Image from "next/image"

type Product = {
	name: string
	price: number
	description: string
}

type ProductLayoutProps = {
	product: Product
}

export function ProductLayout({ product }: ProductLayoutProps) {
	return (
		<>
			<div className="container">
				<BackButton className="text-secondary-900 hover:text-secondary-950 font-secondary font-medium text-xl transition-colors">
					<i className="i-[material-symbols--arrow-back]" /> Back
				</BackButton>
			</div>

			<section>
				<div className="container grid grid-cols-2">
					<aside>
						<figure>
							{/* <Image src="" /> */}
						</figure>
					</aside>
					<article>
						<h1 className="head-1">{product.name}</h1>
						{/* <p>{product.description}</p> */}
						<button className="btn highlight">Inquire Now</button>
					</article>
				</div>
			</section>
		</>
	)
}
