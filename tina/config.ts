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
				name: 'Page',
				label: 'Pages',
				path: 'content/pages',
				fields: [
					{
						name: 'services',
						label: 'Services',
						type: 'object',
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
						name: 'about',
						label: 'About Us',
						type: 'object',
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
					}
				],
				ui: {
					allowedActions: {
						create: false,
						delete: false,
					},
				}
			},
			{
				name: 'Printer',
				label: 'Printers',
				path: 'content/printers',
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
