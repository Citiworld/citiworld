import { HTMLAttributes } from "react"
import Image from 'next/image'
import Link from "next/link"
import { formatPrice } from "@/lib/utils"

type ProductProps = {
	src: string
	alt: string
	brand: string
	name: string
	price: number
	url: string
} & HTMLAttributes<HTMLDivElement>

export function Product({ src, alt, brand, name, price, url, ...props }: ProductProps) {
	return (
		<div {...props}>
			<figure className="relative h-64">
				<Image src={src} alt={alt} fill className="object-contain" />
			</figure>
			<div className="px-4">
				<p className="font-bold">{brand}</p>
				<p className="font-bold leading-none">{name}</p>
				<p className="font-secondary font-medium mt-2">{formatPrice(price)}</p>
				<Link className="btn highlight mt-2" href={url}>View More</Link>
			</div>
		</div>
	)
}
