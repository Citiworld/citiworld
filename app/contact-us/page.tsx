import styles from './contact-us.module.css'
import { ContactForm } from './form'

export const metadata = {
	title: 'Contact Us'
}

export default function ContactPage() {
	return (
		<section className={styles.section}>
			<div>
				<ContactForm />
				<div>
					<iframe className="w-full h-full" src="https://www.google.com/maps/embed/v1/place?q=Citiworld,+Grayline+ventures,+Arayat,+Mandaluyong,+Metro+Manila,+Philippines&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" />
				</div>
			</div>
		</section>
	)
}
