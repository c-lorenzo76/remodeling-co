// import {Button} from "@/components/ui/button";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export const About = () => {
    return (
        <div className={"h-fit mx-auto flex flex-col justify-center md:flex-row font-afacad"}>

            <div className={"hidden lg:block  items-center justify-center ml-14"}>
                <img src={"../src/assets/living-room.webp"} alt={"Living Room"} className={"rounded shadow-xl"}/>
            </div>
            <div className={"flex flex-col justify-center text-center lg:w-[90%] "}>
                <Card
                    className={"bg-gradient-to-tr from-slate-700 to-slate-800 text-[#EEEEEE] w-[80%] mx-auto shadow-lg"}>
                    <div className={"bg-dot-white/[0.2]"}>
                        <CardHeader>
                            <CardTitle className={"text-4xl font-semibold"}>
                                Flores and Sons Remodeling
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            Bring your vision to life! Let us handle the hard work while you enjoy your dream home.
                            We take pride in our work, we treat every project as if it were our own, ensuring top
                            craftsmanship and attention to detail.
                            We are a family-owned business located in <span className={"font-bold underline mr-1"}> Chatham County, NC</span>.
                        </CardContent>
                    </div>

                </Card>
            </div>

        </div>
    )
}