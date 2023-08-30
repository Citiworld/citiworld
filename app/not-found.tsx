import { ErrorLayout } from "@/components/layouts/error-layout"

export const metadata = {
	title: 'Page not found | CitiWorld'
}

export default function NotFoundPage() {
	return (
		<ErrorLayout code={404} caption="Page not found" message="Sorry, the page you're looking for does not exist." />
	)
}
