import { Button } from "@/components/ui/button"
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"

export const Navigation = () => {
	return (
		<nav className="border-muted border-b bg-muted">
			<div className="container mx-auto flex items-center py-4">
				<Link href="/" className="font-bold text-2xl">
					Arcadia
				</Link>
				<div className="ml-auto hidden gap-x-8 sm:flex">
					<Link href="/services">Services</Link>
					<Link href="/habitats">Habitats</Link>
					<Link href="/connexion">Connexion</Link>
					<Link href="/contact">Contact</Link>
				</div>
				<Sheet>
					<SheetTrigger asChild={true}>
						<Button variant="outline" className="ml-auto sm:hidden">
							<Menu />
						</Button>
					</SheetTrigger>
					<SheetContent side="left" className="flex flex-col">
						<SheetHeader>
							<SheetTitle>Arcadia</SheetTitle>
						</SheetHeader>
						<div className="flex flex-1 flex-col items-center justify-center gap-y-4">
							<Link href="/services">Services</Link>
							<Link href="/habitats">Habitats</Link>
							<Link href="/connexion">Connexion</Link>
							<Link href="/contact">Contact</Link>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	)
}
