import { ServiceCard } from "@/components/common/ServiceCard"
import { Button } from "@/components/ui/button"
import { prismaClient } from "@/utils"
import Link from "next/link"

export const Services = async () => {
	const services = await prismaClient.service.findMany({
		take: 3,
	})
	return (
		<div className="py-8 bg-muted">
			<div className="flex flex-col items-center gap-y-4 container mx-auto">
				<p className="text-xl font-semibold">Services</p>
				<div className="flex gap-x-4">
					{services.map((service) => (
						<ServiceCard key={service.id} service={service} />
					))}
				</div>
				<Button variant="outline">
					<Link href="/services">Voir tous les services</Link>
				</Button>
			</div>
		</div>
	)
}
