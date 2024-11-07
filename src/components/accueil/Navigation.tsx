import Link from "next/link"

export const Navigation = () => {
	return (
		<nav className="border-b border-muted">
			<div className="flex items-center py-4 container mx-auto">

			<Link
				href="/"
				className="text-2xl font-bold"
			>
				Arcadia
			</Link>
			<div className="ml-auto flex gap-x-8">
				<Link href="/services">Services</Link>
				<Link href="/habitats">Habitats</Link>
				<Link href="/connexion">Connexion</Link>
				<Link href="/contact">Contact</Link>
			</div>
			</div>
		</nav>
	)
}
