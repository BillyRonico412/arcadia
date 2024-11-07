"use client"

import { CarouselIndicator } from "@/components/common/CarouselIndicator"
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel"
import type { Prisma } from "@prisma/client"
import Image from "next/image"
import { useState } from "react"

interface AnimalCardProps {
	animal: Prisma.AnimalGetPayload<{
		select: {
			prenom: true
			race: true
			images: {
				select: {
					url: true
				}
			}
		}
	}>
}

export const AnimalCard = (props: AnimalCardProps) => {
	const [api, setApi] = useState<CarouselApi>()
	return (
		<Card className="w-full overflow-hidden">
			<Carousel setApi={setApi}>
				<CarouselContent>
					{props.animal.images.map((image) => (
						<CarouselItem key={image.url}>
							<div className="relative aspect-square w-full">
								<Image
									src={image.url}
									alt={props.animal.prenom}
									className="object-cover"
									fill={true}
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselIndicator api={api} />
			</Carousel>
			<CardHeader>
				<CardTitle>{props.animal.prenom}</CardTitle>
				<CardDescription>{props.animal.race}</CardDescription>
			</CardHeader>
		</Card>
	)
}
