// import {Button} from "@/components/ui/button";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export const About = () => {
    return (
        <div className={"bg-[#393E46] h-fit flex flex-col justify-center md:flex-row font-afacad"}>
            <div className={"hidden lg:block lg:flex items-center justify-center ml-14"}>
                <img src={"../src/assets/living-room.webp"} alt={"Living Room" } className={"rounded shadow-xl"}/>
            </div>
            <div className={"flex flex-col justify-center text-center lg:w-[90%]"}>
                <Card className={"overflow-x-visible bg-[#222831] text-[#EEEEEE] w-[80%] mx-auto shadow-lg"}>
                    <CardHeader>
                        <CardTitle className={"text-4xl font-semibold"}>
                            Flores and Sons Remodeling
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        Ready to bring your vision to life? Let us handle the hard work while you enjoy your dream home.
                        We take pride in our work, we treat every project as if it were our own, ensuring top craftsmanship and attention to detail.
                        We are a family-owned business located in <span className={"font-bold underline mr-1"}> Chatham County, NC</span>.
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

// <p>Home Projects, Florring, Painting, Carpentry, & etc. </p>

// {/*<div className={"bg-blue-400/30 w-[80%] mx-auto rounded shadow-lg"}>*/}
// {/*    <h1 className={"text-4xl lg:text-4xl font-semibold mt-10 mb-5 mx-2"}>Flores and Sons Remodeling</h1>*/}
// {/*    <p className={"w-[90%] mx-auto mb-10"}>*/}
// {/*        If you're in need of a renovation or new living space give us a call.*/}
// {/*        Whether you’re a first-time homeowner or you’ve been in your home for several years, there are*/}
// {/*        probably some things about your house that you simply don’t like.*/}
// {/*    </p>*/}
// {/*</div>*/}

// <div
//     className={"bg-blue-500/5 h-[422px] lg:h-[691px] flex flex-col justify-center md:flex-row font-afacad border-b-4 "}>
//     <div className={"border hidden lg:block lg:flex items-center justify-center ml-14"}>
//         <img src={"../src/assets/living-room.webp"} alt={"image"}/>
//     </div>
//     <div className={"flex flex-col justify-center text-center lg:w-[90%]"}>
//         <div className={"border bg-blue-400/30 w-[80%] mx-auto rounded"}>
//             <h1 className={"text-4xl lg:text-4xl font-semibold mt-10 mb-5 mx-2"}>Flores and Sons Remodeling</h1>
//             <p className={"w-[90%] mx-auto mb-10"}>If you're in need of a renovation or new living space give us a call
//                 at
//                 Whether you’re a first-time homeowner or you’ve been in your home for several years, there are probably
//                 some things about your house that you simply don’t like. Perhaps the kitchen lacks storage space, the
//                 living room is too small, or your bathroom is woefully outdated. If you’re tired of living in a space
//                 that doesn’t match your needs and design preferences, our team at Southern Contracting Company is ready
//                 to help.
//             </p>
//         </div>
//     </div>
// </div>