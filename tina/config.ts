import { defineConfig } from 'tinacms'
import dotenv from 'dotenv'

dotenv.config({ path: `.env.local` })

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main'

export default defineConfig({
	branch,
	clientId: process.env.TINA_CLIENT_ID,
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
							{
								type: 'string',
								name: 'caption',
								label: 'Image caption',
								required: true,
							},
							{
								type: 'image',
								name: 'image',
								label: 'Image',
								required: true,
							},
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
						type: 'rich-text',
						name: 'description',
						label: 'Description',
						isBody: true,
						required: true,
					},
				],
				ui: {
					// This is an DEMO router. You can remove this to fit your site
					router: ({ document }) => `/demo/blog/${document._sys.filename}`,
				},
			},
		],
	},
});
