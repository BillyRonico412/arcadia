import { HabitatCard } from "@/components/common/HabitatCard"
import { Button } from "@/components/ui/button"
import { prismaClient } from "@/utils"
import Link from "next/link"

export const dynamic = "force-dynamic"

export const Habitats = async () => {
	const habitats = await prismaClient.habitat.findMany({
		take: 3,
		include: {
			images: true,
		},
	})
	return (
		<div className="py-8">
			<div className="container mx-auto flex flex-col items-center gap-y-4">
				<p className="font-semibold text-xl">Habitats</p>
				<div className="flex w-full flex-col gap-x-4 gap-y-4 lg:flex-row">
					{habitats.map((habitat) => (
						<HabitatCard key={habitat.id} habitat={habitat} />
					))}
				</div>
				<Button variant="outline">
					<Link href="/services">Voir tous les habitats</Link>
				</Button>
			</div>
		</div>
	)
}
