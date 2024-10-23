
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export const Reviews = () => {

    const testimonials = [
        {
            quote:
                "Love the work this company does! I have used them and stand by their quality, professionalism, and timeliness. If you want the work done right the first time use them!",
            name: "Alexandria Lawson",
            date: "Oct 12, 2023",
        },
        {
            quote:
                "Absolutely LOVE my new bathroom retreat! Can't wait for cesar to transform the rest of our home. I 100% recommend him for any job!",
            name: "Jaime Mohr Williamson",
            date: "Oct 7, 2023",
        },
        {
            quote:
                "Flores and Sons remodeling did an excellent job and left me more than satisfied.",
            name: "Maria Del Carmen Ruiz",
            date: "May 11, 2021",
        },
        {
            quote: "Very good experience from them and delivered excellent work!",
            name: "Maribel Menendez",
            date: "Mar 5, 2021",
        },
        {
            quote:
                "Cesar has taken our old house and made it amazing again. I highly recommend him for any remodeling project. He is very professional and dependable and there isn't anything he can't do, even in our old house.",
            name: "Melanie Bridges Webster",
            date: "Nov 10, 2020",
        },
    ];

    return (
        <div className={"h-fit pt-1 w-full text-black font-afacad"}>
            <div className={"w-[90%] lg:w-[80%] mx-auto"}>
                <div className={"bg-[#4A4947] text-[#EEEEEE] w-full lg:w-[70%] mx-auto h-fit p-4"}>
                    <h1 className={"font-light text-4xl text-center"}>Reviews</h1>
                    <p className={"font-bold text-5xl text-center"}>See what people say about us!</p>
                </div>
                <div
                    className="mt-4 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}