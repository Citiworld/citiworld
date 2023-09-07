import client from '@/tina/__generated__/client'
import { Metadata } from 'next'
import { AboutPage } from './about-page'

async function getData() {
	try {
		return await client.queries.AboutPage({ relativePath: 'about.md' })
	} catch (err) {
		console.error(err)
	}
}

export const metadata: Metadata = {
	title: 'About'
}

export default async function Page() {
	const data = await getData()

	if (!data) {
		throw new Error('Server error')
	}

	return (
		<AboutPage page={data} />
	)
}