import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import type { Prisma } from "@prisma/client"

interface AvisCardProps {
	avis: Prisma.AvisGetPayload<{
		select: {
			pseudo: true
			commentaire: true
		}
	}>
}

export const AvisCard = (props: AvisCardProps) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{props.avis.pseudo}</CardTitle>
				<CardDescription>{props.avis.commentaire}</CardDescription>
			</CardHeader>
		</Card>
	)
}
