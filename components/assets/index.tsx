import Image from 'next/image'
import circle from '@/public/assets/circle.svg'
import gear from '@/public/assets/gear.svg'
import pipe from '@/public/assets/pipe.svg'
import pipe2 from '@/public/assets/pipe-2.svg'
import pixel from '@/public/assets/pixel.svg'
import wave from '@/public/assets/wave.svg'

type AssetProps = Omit<React.ComponentProps<typeof Image>, 'alt' | 'src'>

export function Circle(props: AssetProps) {
	return <Image src={circle} alt="" {...props} />
}

export function Gear(props: AssetProps) {
	return <Image src={gear} alt="" {...props} />
}

export function Pipe(props: AssetProps) {
	return <Image src={pipe} alt="" {...props} />
}

export function Pipe2(props: AssetProps) {
	return <Image src={pipe2} alt="" {...props} />
}


export function Pixel(props: AssetProps) {
	return <Image src={pixel} alt="" {...props} />
}

export function Wave(props: AssetProps) {
	return <Image src={wave} alt="" {...props} />
}

