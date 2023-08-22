import Image from 'next/image'
import circle from '@/public/assets/circle.svg'
import gear from '@/public/assets/gear.svg'
import pipe from '@/public/assets/pipe.svg'
import pipe2 from '@/public/assets/pipe-2.svg'
import pixel from '@/public/assets/pixel.svg'
import wave from '@/public/assets/wave.svg'

type AssetProps = Omit<React.ComponentProps<typeof Image>, 'alt' | 'src'>

export function Circle(props: AssetProps) {
	return <Image src={circle} alt="wave gradient" {...props} />
}

export function Gear(props: AssetProps) {
	return <Image src={gear} alt="two white gears on top of each other" {...props} />
}

export function Pipe(props: AssetProps) {
	return <Image src={pipe} alt="three finger-link shapes of the same height" {...props} />
}

export function Pipe2(props: AssetProps) {
	return <Image src={pipe2} alt="two finger-like shapes" {...props} />
}


export function Pixel(props: AssetProps) {
	return <Image src={pixel} alt="square tiles of different colors together" {...props} />
}

export function Wave(props: AssetProps) {
	return <Image src={wave} alt="wavy shape that is filled with gradient color" {...props} />
}

