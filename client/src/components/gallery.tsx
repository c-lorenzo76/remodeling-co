import Autoplay from "embla-carousel-autoplay"
import React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {Card, CardContent} from "@/components/ui/card.tsx";

export const Gallery = () => {
    const plugin = React.useRef(
        Autoplay({delay: 10000, stopOnInteraction: true})
    )
    return (
        <div className={"h-fit w-[80%] mx-auto py-5 pb-10"}>
            <div className={"pb-5 text-[#EEEEEE] flex flex-col justify-center items-center z-10 font-afacad"}>
                <h1 className={"text-6xl font-light"}>Gallery</h1>
            </div>
            <div className={"w-[90%] max-w-xl mx-auto flex flex-col mt-16 lg:mt-0  items-center"}>
                <Carousel
                    plugins={[plugin.current]}
                    className={"w-full max-w-full"}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                        {Array.from({length: 5}).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-4xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

        </div>
    )
}