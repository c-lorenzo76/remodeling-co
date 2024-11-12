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

const images = [
    "/work_images/IMG_4136.JPG",
    "/work_images/IMG_4137.JPG",
    "/work_images/IMG_4138.JPG",
    "/work_images/IMG_4139.JPG",
    "/work_images/IMG_4140.JPG",
    "/work_images/IMG_4141.JPG",
    "/work_images/IMG_4143.JPG",
    "/work_images/IMG_4146.JPG",
    "/work_images/IMG_4147.JPG",
    "/work_images/IMG_4148.JPG",
]

export const Gallery = () => {
    const plugin = React.useRef(
        Autoplay({delay: 5000, stopOnInteraction: true})
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
                        {images.map((image, index) => (
                            <CarouselItem key={index}>
                                <Card>
                                    <CardContent
                                        className="flex aspect-square w-full max-w-full h-full max-h-full items-center justify-center p-6">
                                        <img src={image} alt={`Gallery image ${index + 1}`}
                                             className="w-full h-full object-cover"/>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}

                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>
            </div>

        </div>
    )
}
{/*{Array.from({length: 5}).map((_, index) => (*/
}
{/*    <CarouselItem key={index}>*/
}
{/*        <div className="p-1">*/
}
{/*            <Card>*/
}
{/*                <CardContent className="flex aspect-square items-center justify-center p-6">*/
}
{/*                    <span className="text-4xl font-semibold">{index + 1}</span>*/
}
{/*                </CardContent>*/
}
{/*            </Card>*/
}
{/*        </div>*/
}
{/*    </CarouselItem>*/
}
{/*))}*/
}