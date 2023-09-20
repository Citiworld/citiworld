import { defineConfig } from 'tinacms'
import { imageArraySchema, imageSchema } from './schema/image'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main'

export default defineConfig({
	branch,
	clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
	token: process.env.TINA_TOKEN,
	build: {
		outputFolder: 'admin',
		publicFolder: 'public',
	},
	media: {
		tina: {
			mediaRoot: '',
			publicFolder: 'public',
		},
	},
	schema: {
		collections: [
			{
				name: 'Global',
				label: 'Global',
				path: 'content/global',
				fields: [
					{
						type: 'object',
						name: 'addresses',
						label: 'Addresses',
						list: true,
						fields: [
							{
								type: 'string',
								name: 'name',
								label: 'Name',
								required: true,
							},
							{
								type: 'string',
								name: 'address',
								label: 'Address',
								required: true,
							},
							{
								type: 'string',
								name: 'tel',
								label: 'Telephone Number(s)',
								required: true
							},
						],
						required: true,
						ui: {
							itemProps(props) {
								return { label: props.name }
							}
						}
					}
				],
				ui: {
					allowedActions: {
						create: false,
						delete: false
					},
				},
			},
			{
				name: 'HomePage',
				label: 'Home Page',
				path: 'content/pages/home',
				fields: [
					{
						type: 'string',
						name: 'heroTitle',
						label: 'Hero Title',
						required: true,
					},
					{
						type: 'rich-text',
						name: 'heroDescription',
						label: 'Hero Description',
						required: true,
					},
					{
						type: 'image',
						name: 'heroImage',
						label: 'Hero Image',
						required: true,
					},
					{
						type: 'string',
						name: 'productTitle',
						label: 'Product Section Title',
						required: true,
					},
					{
						type: 'string',
						name: 'serviceTitle',
						label: 'Service Title',
						required: true,
					},
					{
						type: 'rich-text',
						name: 'serviceDescription',
						label: 'Service Description',
						required: true,
					},
					{
						type: 'string',
						name: 'icons',
						label: 'Icons',
						required: true,
						list: true,
						ui: {
							min: 4,
							max: 4,
						}
					}
				],
				ui: {
					allowedActions: {
						create: false,
						delete: false,
					},
					router: () => '/'
				}
			},
			{
				name: 'ServicePage',
				label: 'Services Page',
				path: 'content/pages/services',
				ui: {
					allowedActions: {
						create: false,
						delete: false,
					},
					router: () => '/services'
				},
				fields: [
					{
						type: 'string',
						name: 'title',
						label: 'Page title',
						required: true
					},
					{
						type: 'rich-text',
						name: 'description',
						label: 'Page description',
						required: true,
					},
					imageSchema,
					{
						type: 'object',
						name: 'services',
						label: 'Services',
						list: true,
						required: true,
						fields: [
							{
								type: 'string',
								name: 'name',
								label: 'Name',
								required: true,
							},
							{
								type: 'rich-text',
								name: 'description',
								label: 'Description',
								required: true,
							}
						],
						ui: {
							itemProps(item) {
								return { label: item.name }
							}
						}
					},
				],
			},
			{
				name: 'AboutPage',
				label: 'About Page',
				path: 'content/pages/about',
				ui: {
					allowedActions: {
						create: false,
						delete: false,
					},
				},
				fields: [
					{
						type: 'string',
						name: 'title',
						label: 'Page title',
						required: true
					},
					{
						type: 'rich-text',
						name: 'description',
						label: 'Page description',
						required: true,
					},
					imageSchema,
					{
						type: 'rich-text',
						name: 'mission',
						label: 'Mission',
						required: true,
					},
					{
						type: 'rich-text',
						name: 'vision',
						label: 'Vision',
						required: true,
					},
					{
						...imageArraySchema,
						ui: {
							...imageArraySchema.ui,
							min: 3,
							max: 3,
						}
					}
				]
			},
			{
				name: 'Printer',
				label: 'Printers',
				path: 'content/printers',
				ui: {
					router: props => `/machines/${props.document._sys.filename}`
				},
				fields: [
					{
						type: 'string',
						name: 'name',
						label: 'Name',
						isTitle: true,
						required: true,
					},
					{
						type: 'string',
						name: 'brand',
						label: 'Brand',
						required: true,
					},
					{
						type: 'number',
						name: 'price',
						label: 'Price',
						required: true,
					},
					{
						...imageArraySchema,
						ui: {
							...imageArraySchema.ui,
							min: 1
						}
					},
					{
						type: 'rich-text',
						name: 'description',
						label: 'Description',
						isBody: true,
						required: true,
					},
				],
			},
			{
				name: 'Toner',
				label: 'Toners and Ink',
				path: 'content/toners-ink',
				ui: {
					router: props => `/toners-ink/${props.document._sys.filename}`
				},
				fields: [
					{
						type: 'string',
						name: 'name',
						label: 'Name',
						isTitle: true,
						required: true,
					},
					{
						type: 'string',
						name: 'brand',
						label: 'Brand',
						required: true,
					},
					{
						type: 'number',
						name: 'price',
						label: 'Price',
						required: true,
					},
					imageSchema,
					{
						type: 'string',
						name: 'url',
						label: 'URL',
					},
					{
						type: 'rich-text',
						name: 'description',
						label: 'Description',
						isBody: true,
						required: true,
					},
				]
			}
		],
	},
});
