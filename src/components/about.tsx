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
                    // src={"../src/assets/images/IMG_4145.JPG"}
                    src={"https://new.express.adobe.com/webpage/DMVgkp7CXqbrJ/resources/036eac26-4a6a-44e0-a75d-73dc335dd568-3840px?asset_id=036eac26-4a6a-44e0-a75d-73dc335dd568&image_assets=false&size=3840"}
                    alt={"Living Room"} className={"rounded shadow-2xl"}/>

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
// <div className="section bg-gray-100 py-8">
//     <div className="container mx-auto flex flex-wrap md:flex-nowrap">
//
//         <div className="w-full md:w-3/5">
//             <img
//                 src="https://b3451453.smushcdn.com/3451453/wp-content/uploads/2023/12/iStock-1388074598.jpg?lossy=1&strip=0&webp=1"
//                 alt="Southern Contracting Company"
//                 className="object-cover w-full h-auto"
//             />
//         </div>
//
//         <div className="w-full md:w-2/5 flex flex-col justify-center pl-6">
//             <h2 className="text-3xl font-bold mb-4">Southern Contracting Company</h2>
//             <p className="text-gray-600 mb-6">
//                 Whether you’re a first-time homeowner or you’ve been in your home for several years,
//                 there are probably some things about your house that you simply don’t like.
//                 Perhaps the kitchen lacks storage space, the living room is too small, or your bathroom
//                 is woefully outdated. If you’re tired of living in a space that doesn’t match your
//                 needs and design preferences, our team at <strong>Southern Contracting Company</strong>
//                 is ready to help.
//             </p>
//             <a
//                 href="/about-southern-contracting-company/"
//                 className="bg-blue-500 text-white py-2 px-4 rounded-lg text-center inline-block hover:bg-blue-600 transition">
//                 More About Us
//             </a>
//         </div>
//     </div>
//
//
//     <div className="container mx-auto mt-8 text-center md:hidden">
//         <h2 className="text-3xl font-bold mb-4">Southern Contracting Company</h2>
//         <p className="text-gray-600 mb-6">
//             Whether you’re a first-time homeowner or you’ve been in your home for several years,
//             there are probably some things about your house that you simply don’t like.
//             Perhaps the kitchen lacks storage space, the living room is too small, or your bathroom
//             is woefully outdated. If you’re tired of living in a space that doesn’t match your
//             needs and design preferences, our team at <strong>Southern Contracting Company</strong>
//             is ready to help.
//         </p>
//         <a
//             href="/about-southern-contracting-company/"
//             className="bg-blue-500 text-white py-2 px-4 rounded-lg inline-block hover:bg-blue-600 transition">
//             More About Us
//         </a>
//     </div>
// </div>