export function LoadingIcon({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {

	return (
		<div className={`lds-ring ${className}`} {...props}><div></div><div></div><div></div><div></div></div>
	)
}
