import { AvisCard } from "@/components/common/AvisCard"
import { Button } from "@/components/ui/button"
import { prismaClient } from "@/utils"
import Link from "next/link"

export const dynamic = "force-dynamic"

export const Avis = async () => {
	const aviss = await prismaClient.avis.findMany({
		take: 3,
		where: {
			isVisible: true,
		},
	})
	return (
		<div className="py-8">
			<div className="container mx-auto flex flex-col items-center gap-y-4">
				<p className="font-semibold text-xl">Animaux</p>
				<div className="grid w-full grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3">
					{aviss.map((avis) => (
						<AvisCard key={avis.id} avis={avis} />
					))}
				</div>
				<Button variant="outline">
					<Link href="/avis">Voir tous les avis</Link>
				</Button>
			</div>
		</div>
	)
}
