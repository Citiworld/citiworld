import { ButtonHTMLAttributes } from "react"
import { LoadingIcon } from "../loading-icon"

type LoadingButtonProps = {
	children: React.ReactNode
	isLoading: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export function LoadingButton({ children, isLoading, className, ...props }: LoadingButtonProps) {
	return (
		<button className={`flex items-center justify-center ${className}`} {...props} disabled={isLoading}>
			{isLoading ? <LoadingIcon className="h-6" /> : children}
		</button>
	)
}