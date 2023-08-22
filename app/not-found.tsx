import { Circle, Pipe, Pixel } from "@/components/assets"
import { BackButton } from "./back-button"

export const metadata = {
	title: 'Page not found | CitiWorld'
}

export default function NotFoundPage() {
	return (
		<section className="min-h-screen/1 flex items-center relative">
			<Pixel className="absolute top-0 opacity-75 left-[25%] w-75 2xl:w-92 hidden lg:block" />
			<Circle className="absolute -left-16 -rotate-135 opacity-75 w-80 2xl:w-92 hidden lg:block" />
			<Pipe className="absolute bottom-0 opacity-75 left-[20%] w-52 2xl:w-75 hidden lg:block" />
			<div className="container text-center lg:text-right">
				<p
					className="font-bold text-[9.25rem] lg:text-[20rem] leading-none text-gradient bg-gradient-to-b from-secondary-900 to-highlight-400"
				>
					404
				</p>
				<p className="text-4xl lg:text-8xl font-secondary mb-4 font-medium">Page not found</p>
				<p className="text-xl font-secondary mb-8">Sorry, the page you&apos;re looking for does not exist.</p>
				<BackButton className="btn highlight text-2xl !px-8" />
			</div>
		</section>
	)
}
