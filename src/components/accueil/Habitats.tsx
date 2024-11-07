import { HabitatCard } from "@/components/common/HabitatCard"
import { Button } from "@/components/ui/button"
import { prismaClient } from "@/utils"
import Link from "next/link"

export const Habitats = async () => {
	const habitats = await prismaClient.habitat.findMany({
		take: 3,
		include: {
			images: true,
		},
	})
	return (
		<div className="py-8">
			<div className="flex flex-col items-center gap-y-4 container mx-auto">
				<p className="text-xl font-semibold">Habitats</p>
				<div className="w-full flex gap-x-4">
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
