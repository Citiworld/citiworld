import Link from 'next/link'
import styles from './home.module.css'
import { Wave, Circle, Pixel, Gear, Pipe, Pipe2 } from '@/components/assets'
import homebg from '@/public/placeholder/home-bg.png'
import Image from 'next/image'

export default function Home() {
	return (
		<>
			<section className="md:min-h-[600px] grid-rows-[1fr_2fr] sm:grid-rows-2 lg:grid-rows-1 grid relative">
				<Pipe2 className="top-[5%] xl:top-[10%] left-0 absolute w-48 opacity-50 lt-lg:hidden" />
				<Pixel className="bottom-0 left-0 absolute rotate-180 w-40 xl:w-48 opacity-50 lt-lg:hidden" />
				<Pipe2 className="bottom-20 right-0 lg:left-[35%] absolute rotate-180 w-48 opacity-50 lt-lg:hidden" />
				<div className="grid static lg:absolute w-full h-full lg:grid-cols-[5fr_7fr]">
					<div className="lt-lg:hidden"></div>
					<div className={styles.slice}>
						<figure>
							<Image src={homebg} alt="brother printer" className="w-full h-full bottom-0 object-bottom object-cover" />
						</figure>
					</div>
				</div>
				<div className="container grid lg:grid-cols-[5fr_7fr] relative">
					<div className="self-center text-center lg:text-left py-16 md:py-24">
						<h1 className="head-1 text-secondary-900">Trusted by the best brands.</h1>
						<p className="subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quaerat debitis vero quos, eaque officia pariatur adipisci molestias culpa. Saepe eveniet totam pariatur quam aut quae consequatur. Qui, quis cupiditate.</p>
					</div>
				</div>
			</section>
			<section className="py-12 lg:py-24 bg-gradient-to-b from-secondary-900 to-accent-400 text-white relative">
				<div className="container">
					<h1 className="head-1 text-white text-center mb-8 md:mb-12">Our Products</h1>
					<div className="grid md:grid-cols-2 text-center max-w-4xl mx-auto gap-8">
						<div className={styles.col}>
							<Circle className="absolute w-32 -left-18 lg:w-40 lg:-left-24 opacity-50 -rotate-80 -z-1" />
							<div className={styles.card}>
								<figure>
									{/* <Image /> */}
								</figure>
								<h2>Machines</h2>
							</div>
							<Link className={styles['transparent-btn']} href="/products">View More</Link>
						</div>
						<div className={styles.col}>
							<div className={styles.card}>
								<figure>
									{/* <Image /> */}
								</figure>
								<h2>Toners and Ink</h2>
							</div>
							<Link className={styles['transparent-btn']} href="/products">View More</Link>
						</div>
					</div>
				</div>
				<Pixel className="absolute right-0 top-0 opacity-50 w-20 xs:w-32 md:w-48 xl:w-60" />
				<Pipe className="absolute bottom-0 opacity-50 right-[10%] w-32 lg:w-48" />
				<Pipe2 className="absolute bottom-32 md:bottom-8 opacity-50 left-0 h-32 xl:h-36 w-auto" />
			</section>
			<section className="py-12 md:py-24 relative">
				<div className="container grid md:grid-cols-2 gap-8 relative z-1">
					<div className={styles['service-grid']}>
						<figure><Gear /></figure>
						<figure><Gear /></figure>
						<figure><Gear /></figure>
						<figure><Gear /></figure>
					</div>
					<div className="self-center text-center md:text-right">
						<h1 className="head-1 text-secondary-900">We offer a wide range of services</h1>
						<p className="subtitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus incidunt, earum repellat explicabo ipsa debitis nam quisquam vero totam iure error exercitationem architecto ad nihil hic eos autem eius tempora?</p>
						<Link href="/services" className="btn highlight has-icons mt-4">Learn More <span className="i-material-symbols-arrow-forward-rounded" /></Link>
					</div>
				</div>
				<div className="absolute w-full bottom-0 lt-md:hidden">
					<Wave />
				</div>
			</section >
		</>
	)
}
