
import client from '@/tina/__generated__/client'
import { HomePage } from './home-page'

async function getPrinter() {
	const res = await client.queries.PrinterConnection()
	return res.data.PrinterConnection.edges?.[0]?.node
}

async function getToner() {
	const res = await client.queries.TonerConnection()
	return res.data.TonerConnection.edges?.[0]?.node
}

async function getPageData() {
	return await client.queries.HomePage({ relativePath: 'home.md' })
}

export default async function Page() {
	const [printer, toner, page] = await Promise.all([getPrinter(), getToner(), getPageData()])

	return (
		<HomePage printer={printer} toner={toner} page={page} />
	)
}
