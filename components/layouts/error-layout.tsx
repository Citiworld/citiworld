import { Circle, Pipe, Pixel } from "@/components/assets"
import { HomeButton } from "@/components/nav-button"

type ErrorLayoutProps = {
	code: number
	caption: string
	message: string
}

export function ErrorLayout({ code, caption, message }: ErrorLayoutProps) {
	return (
		<section className="min-h-screen flex items-center relative">
			<Pixel className="absolute top-0 opacity-75 left-[25%] w-75 2xl:w-92 max-lg:hidden" />
			<Circle className="absolute -left-16 -rotate-[135deg] opacity-75 w-80 2xl:w-92 max-lg:hidden" />
			<Pipe className="absolute bottom-0 opacity-75 left-[20%] w-52 2xl:w-75 max-lg:hidden" />
			<div className="container text-center lg:text-right">
				<p
					className="font-bold text-[9.25rem] lg:text-[20rem] leading-none text-gradient bg-gradient-to-b from-secondary-900 to-highlight-400"
				>
					{code}
				</p>
				<p className="text-4xl lg:text-8xl font-secondary mb-4 font-medium">{caption}</p>
				<p className="text-xl font-secondary mb-8">{message}</p>
				<HomeButton className="btn highlight text-2xl px-8" />
			</div>
		</section>
	)
}