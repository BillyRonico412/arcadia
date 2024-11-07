"use client"

import { Button } from "@/components/ui/button"
import type { CarouselApi } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface CarouselIndicatorProps {
	api: CarouselApi
}

export const CarouselIndicator = (props: CarouselIndicatorProps) => {
	const [current, setCurrent] = useState(0)
	const [count, setCount] = useState(0)
	useEffect(() => {
		if (!props.api) {
			return
		}
		setCount(props.api.scrollSnapList().length)
		setCurrent(props.api.selectedScrollSnap())

		props.api.on("select", () => {
			if (!props.api) {
				return
			}
			setCurrent(props.api.selectedScrollSnap())
		})
	}, [props.api])
	if (!props.api) {
		return <></>
	}
	return (
		<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-x-1">
			{Array.from({ length: count }, (_, i) => i).map((i) => (
				<div
					key={i}
					className={cn("w-2 aspect-square rounded-full bg-muted", {
						"bg-primary": i === current,
					})}
				/>
			))}
		</div>
	)
}