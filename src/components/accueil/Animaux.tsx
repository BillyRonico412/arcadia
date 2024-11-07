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
		<div className="bg-muted py-8">
			<div className="container mx-auto flex flex-col items-center gap-y-4">
				<p className="font-semibold text-xl">Animaux</p>
				<div className="grid w-full grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
					{animaux.map((animal) => (
						<AnimalCard key={animal.id} animal={animal} />
					))}
				</div>
			</div>
		</div>
	)
}
