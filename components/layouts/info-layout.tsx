import Image from 'next/image'

type InfoLayoutProps = {
	title: string
	description: React.ReactNode
	imgSrc: string
	caption: string
	children: React.ReactNode
}

export function InfoLayout({ title, description, imgSrc, caption, children }: InfoLayoutProps) {
	return (
		<>
			<section className="bg-gradient-to-b from-secondary-900 to-accent-500">
				<div className="container max-w-screen-xl flex flex-col justify-end lg:h-36">
					<figure className="relative lg:hidden my-8 h-92 md:h-[28rem] rounded-3xl overflow-hidden shadow-xl">
						<Image src={imgSrc} alt={caption} className="object-cover" fill priority sizes="95vw" />
					</figure>
					<h1 className="head-1 text-white leading-none translate-y-2">{title}</h1>
				</div>
			</section>
			<div className="grid container gap-x-8 max-w-screen-xl lg:grid-cols-2 relative -top-28">
				<div className="max-w-prose pt-32 text-xl/loose">{description}</div>
				<div className="max-lg:hidden">
					<figure className="h-92 rounded-3xl overflow-hidden relative shadow-xl">
						<Image src={imgSrc} alt={caption} className="object-cover" fill priority sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 608px" />
					</figure>
				</div>
			</div>
			<section className="-translate-y-20 relative">
				{children}
			</section>
		</>
	)
}