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
} & Omit<HTMLAttributes<HTMLDivElement>, 'className'>

export function Product({ src, alt, brand, name, price, url, ...props }: ProductProps) {
	return (
		<div className="flex flex-col" {...props}>
			<figure className="overflow-hidden rounded-t-xl">
				<Image src={src} alt={alt} height={256} width={600} className="w-full h-64 object-cover" />
			</figure>
			<div className="px-4 mt-4">
				<p className="font-bold leading-none">{name}</p>
				<p className="font-medium">{brand}</p>
			</div>
			<div className="mt-auto">
				<p className="font-secondary font-medium mt-2">{formatPrice(price)}</p>
				<Link className="btn highlight mt-2" href={url}>View More</Link>
			</div>
		</div>
	)
}
