declare global {
	namespace NodeJS {
		interface ProcessEnv {
			MAIL_USER: string
			MAIL_PASS: string
			TINA_CLIENT_ID: string
			TINA_TOKEN: string
		}
	}
}

export { }
