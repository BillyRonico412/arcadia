import { AvisCard } from "@/components/common/AvisCard"
import { prismaClient } from "@/utils"

export const Avis = async () => {
	const aviss = await prismaClient.avis.findMany({
		take: 3,
		where: {
			isVisible: true,
		},
	})
	return (
		<div className="py-8">
			<div className="flex flex-col items-center gap-y-4 container mx-auto">
				<p className="text-xl font-semibold">Animaux</p>
				<div className="w-full grid grid-cols-3 gap-x-8 gap-y-8">
					{aviss.map((avis) => (
						<AvisCard key={avis.id} avis={avis} />
					))}
				</div>
			</div>
		</div>
	)
}
