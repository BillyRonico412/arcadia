import { Animaux } from "@/components/accueil/Animaux"
import { Avis } from "@/components/accueil/Avis"
import { DescriptionAndPhotos } from "@/components/accueil/DescriptionAndPhotos"
import { Habitats } from "@/components/accueil/Habitats"
import { Navigation } from "@/components/accueil/Navigation"
import { Services } from "@/components/accueil/Services"

export default function Home() {
	return (
		<main>
			<Navigation />
			<DescriptionAndPhotos />
			<Services />
			<Habitats />
			<Animaux />
			<Avis />
		</main>
	)
}
