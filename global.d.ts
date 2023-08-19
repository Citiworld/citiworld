declare global {
	namespace NodeJS {
		interface ProcessEnv {
			MAIL_USER: string
			MAIL_PASS: string
		}
	}
}

export { }
