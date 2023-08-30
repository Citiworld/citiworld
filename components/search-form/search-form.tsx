'use client'

import { FormEventHandler } from "react"

export function SearchForm() {
	const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()
	}

	return (
		<form className="relative" onSubmit={handleSubmit} role="search" aria-label="On this page">
			<input type="search" name="search" id="search" placeholder="What are you looking for?" className="block w-full p-2 border rounded-md shadow-inner outline-primary-700 outline-offset-2" />
			<button type="submit" className="absolute right-0 h-full top-0 rounded-r-lg aspect-square btn-highlight" aria-label="" title="search">
				<i className="i-[material-symbols--search] text-3xl text-white" />
			</button>
		</form>
	)
}
