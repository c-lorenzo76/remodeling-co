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
            <div className={"hidden relative md:block md:w-3/4 items-center justify-center"}>
                <img
                    // src={"../src/assets/work_images/IMG_4145.JPG"}
                    src={'/images/about_bg.png'}
                    alt={"Living Room"} className={"rounded shadow-2xl"}
                    loading={"lazy"}
                />

                {/*from-[#6D6B68] to-[#2C2B28]*/}
                <div className={"absolute bottom-0 right-0 w-3/5 mx-auto"}>
                    <Card
                        className={"rounded-none border-none bg-[#4A4947] text-[#EEEEEE] w-full shadow-md"}>
                        <CardHeader>
                            <CardTitle className={"text-4xl text-white font-semibold"}
                            >
                                Flores and Sons Remodeling
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            Bring your vision to life! Let us handle the hard work while you enjoy your dream home.
                            We take pride in our work, treating every project as if it were our own, ensuring top
                            craftsmanship and attention to detail.
                            We are a family-owned business located in
                            <span className={"font-bold underline ml-1"}>Chatham County, NC</span>.
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className={"md:hidden flex flex-col justify-center text-center w-full md:w-3/4 lg:w-2/5"}>
                <Card
                    className={"rounded-none border-none bg-[#4A4947] text-[#EEEEEE] w-[90%] md:w-2/3 mx-auto shadow-md"}>
                    <CardHeader>
                        <CardTitle className={"text-4xl font-semibold text-white"}
                        >
                            Flores and Sons Remodeling
                        </CardTitle>
                    </CardHeader>
                    <CardContent className={"text-center"} >
                        Bring your vision to life! Let us handle the hard work while you enjoy your dream home.
                        We take pride in our work, we treat every project as if it were our own, ensuring top
                        craftsmanship and attention to detail.
                        We are a family-owned business located in <span className={"font-bold underline mr-1"}> Chatham County, NC</span>.
                    </CardContent>

                </Card>
            </div>
        </div>
    )
}
