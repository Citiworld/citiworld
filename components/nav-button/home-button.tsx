'use client'
import { useRouter } from "next/navigation"
import { ButtonHTMLAttributes } from "react"

export function HomeButton(props: Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>) {
	const { replace } = useRouter()

	return <button {...props} onClick={() => replace('/')}>Go back</button>
}
