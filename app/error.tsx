'use client'

import { ErrorLayout } from "@/components/layouts/error-layout"

export default function ErrorPage() {
	return (
		<ErrorLayout code={500} caption="Server Error" message="Something went wrong on our end! Please try again." />
	)
}