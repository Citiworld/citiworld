import { Suspense } from 'react'
import styles from './contact-us.module.css'
import { ContactForm } from './form'

export const metadata = {
	title: 'Contact Us'
}

export default function ContactPage() {
	return (
		<section className={styles.section}>
			<div>
				<Suspense fallback={<FormFallback />}>
					<ContactForm />
				</Suspense>
				<div>
					<iframe title="our google maps location" className="w-full h-full" src="https://www.google.com/maps/embed/v1/place?q=Citiworld,+Grayline+ventures,+Arayat,+Mandaluyong,+Metro+Manila,+Philippines&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" />
				</div>
			</div>
		</section>
	)
}

function FormFallback() {
	return (
		<div className="h-[36rem] animate-pulse p-8 space-y-6 [&_*]:bg-secondary-100">
			<div className="rounded-lg w-32 h-4"></div>
			<div className="rounded-lg w-full h-6"></div>
			<div className="rounded-lg w-full h-6"></div>
			<div className="rounded-lg w-32 h-4"></div>
			<div className="rounded-lg w-full h-6"></div>
			<div className="rounded-lg w-full h-6"></div>
			<div className="rounded-lg w-32 h-4"></div>
			<div className="rounded-lg w-full h-6"></div>
			<div className="rounded-lg w-32 h-4"></div>
			<div className="rounded-lg w-full h-6"></div>
			<div className="rounded-lg w-full h-6"></div>
		</div>
	)
}
