import { AnimalCard } from "@/components/common/AnimalCard"
import { prismaClient } from "@/utils"

export const Animaux = async () => {
	const animaux = await prismaClient.animal.findMany({
		take: 8,
		include: {
			images: true,
		},
	})
	return (
		<div className="py-8 bg-muted">
			<div className="flex flex-col items-center gap-y-4 container mx-auto">
				<p className="text-xl font-semibold">Animaux</p>
				<div className="w-full grid grid-cols-4 gap-x-8 gap-y-8">
					{animaux.map((animal) => (
						<AnimalCard key={animal.id} animal={animal} />
					))}
				</div>
			</div>
		</div>
	)
}
