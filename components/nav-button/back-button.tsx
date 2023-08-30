'use client'

import { useRouter } from "next/navigation"
import { ButtonHTMLAttributes } from "react"

type BackButtonProps = {
	children: React.ReactNode
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>

export function BackButton({ children, ...props }: BackButtonProps) {
	const { back } = useRouter()
	return (
		<button onClick={back} {...props}>
			{children}
		</button>
	)
}
