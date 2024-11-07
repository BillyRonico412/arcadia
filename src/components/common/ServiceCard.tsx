import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card"
import type { Prisma } from "@prisma/client"

interface ServiceCardProps {
	service: Prisma.ServiceGetPayload<{
		select: {
			nom: true
			description: true
		}
	}>
}

export const ServiceCard = (props: ServiceCardProps) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{props.service.nom}</CardTitle>
				<CardDescription>{props.service.description}</CardDescription>
			</CardHeader>
		</Card>
	)
}