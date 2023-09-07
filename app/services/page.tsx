import client from '@/tina/__generated__/client'
import { ServicePage } from './service-page'

export const metadata = {
	title: 'Services'
}

async function getData() {
	try {
		return await client.queries.ServicePage({ relativePath: 'services.md' })
	} catch (err) {
		console.error(err)
	}
}

export default async function Page() {
	const data = await getData()

	if (!data) {
		throw new Error('Server error')
	}

	return (
		<ServicePage page={data} />
	)
}