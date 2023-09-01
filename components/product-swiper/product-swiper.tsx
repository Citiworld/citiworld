'use client'

import { ImageSchema } from '@/tina/schema/image'
import Image from 'next/image'
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from 'swiper/react'
import { useState } from 'react'

import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Controller } from 'swiper/modules'

type ProductSwiperProps = {
	images: Array<ImageSchema>
}

export function ProductSwiper({ images }: ProductSwiperProps) {
	const [mainSwiper, setMainSwiper] = useState<SwiperClass>()
	const [thumbsSwiper, setThumbSwiper] = useState<SwiperClass>()

	return (
		<>
			<Swiper
				spaceBetween={0}
				centeredSlides
				loop
				direction="horizontal"
				loopedSlides={5}
				modules={[Navigation, Controller]}
				navigation
				onSwiper={setMainSwiper}
				controller={{ control: thumbsSwiper }}
				grabCursor
				resizeObserver
				className="select-none mb-4"
			>
				{images.map((img, i) =>
					<SwiperSlide key={i} className="aspect-square">
						<Image src={img.src} alt={img.alt} width={422} height={422} className="object-cover w-full h-full" />
					</SwiperSlide>
				)}
			</Swiper>
			<Swiper
				modules={[Controller]}
				slidesPerView={5}
				centeredSlides
				className="thumbs"
				onSwiper={setThumbSwiper}
				controller={{ control: mainSwiper }}
				slideToClickedSlide
				loop
				loopedSlides={5}
				spaceBetween={10}
				direction="horizontal"
			>
				{images.map((img, i) =>
					<SwiperSlide key={i} className="aspect-square">
						<Image src={img.src} alt={img.alt} width={85} height={85} className="w-full h-full object-cover" />
					</SwiperSlide>
				)}
			</Swiper>
		</>
	)
}
