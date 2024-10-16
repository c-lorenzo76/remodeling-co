// import {AuroraBackground} from "@/components/ui/aurora-background";
import {Link} from "react-router-dom"
import {Button} from "@/components/ui/button";
// import {image} from "@/assets/nav-pic.webp"

// const links = [
//     {name: 'About', to: "/About"},
//     {name: 'Services', to: "/Services"},
//     {name: 'Gallery', to: "/Services"},
//     {name: 'Contact', to: "/Contact"},
// ]
// const stats = [
//     {name: 'Office hours', value: '9:00 - 5:00'},
//     {name: 'Projects completed', value: '200+'},
//     {name: 'Employees', value: '10+'},
//     {name: 'Counties', value: '5'},
//
//
// ]

export const Navigation = () => {
    return (
        <div className={"relative overflow-hidden h-[100vh] background font-afacad"}>
            <nav className="w-full lg:w-[80%] mx-auto py-8 bg-transparent flex justify-center items-center z-10">
                <ul className="flex space-x-6 relative z-10">
                    <li>
                        <Link to={"/About"}>
                            <Button
                                className={"text-xl bg-transparent hover:bg-transparent shadow-none text-[#EEEEEE] hover:text-[#EEEEEE]/40"}
                                style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"}}>
                                ABOUT
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/Services"}>
                            <Button
                                className={"text-xl bg-transparent hover:bg-transparent shadow-none text-[#EEEEEE] hover:text-[#EEEEEE]/40"}
                                style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"}}>
                                SERVICES
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/Services"}>
                            <Button
                                className={"text-xl bg-transparent hover:bg-transparent shadow-none text-[#EEEEEE] hover:text-[#EEEEEE]/40"}
                                style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"}}>
                                GALLERY
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/Contact"}>
                            <Button
                                className={"text-xl bg-transparent hover:bg-transparent shadow-none text-[#EEEEEE] hover:text-[#EEEEEE]/40"}
                                style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"}}>
                                CONTACT
                            </Button>
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="flex flex-col justify-center items-center h-full space-y-4 mt-[-100px]">
                <h1 className="text-white text-5xl lg:text-7xl font-bold text-center relative z-10"
                    style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"}}>
                    FLORES AND SONS REMODELING
                </h1>
                <p className={"w-[90%] text-center text-[#EEEEEE] text-xl lg:text-2xl z-10"}
                   style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"}}>
                    Ready to start a new project? We are the best to do it, Contact us for a free quote!
                </p>
                <Link to={"/Contact"} className={"z-10"}>
                    <Button
                        className={"rounded text-lg border-white bg-[#B17457] hover:bg-[#4A4947] text-[#EEEEEE] z-10 shadow-none"}
                        style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"}}>
                        Get a quote
                    </Button>
                </Link>
            </div>
        </div>

    )
}
// <div className={""}>
//     <img
//         alt="alt"
//         src="https://new.express.adobe.com/webpage/DMVgkp7CXqbrJ/resources/4aae8b4d-a428-4343-9429-540d155aa3b5-4568px?asset_id=4aae8b4d-a428-4343-9429-540d155aa3b5&image_assets=false&size=4568"
//         className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
//     />
// </div>
// <div className="relative h-[100vh] overflow-hidden isolate bg-gray-900 font-afacad py-24 sm:py-32">
//     {/*<AuroraBackground>*/}
//         <img
//             alt="alt"
//             src="https://new.express.adobe.com/webpage/DMVgkp7CXqbrJ/resources/4aae8b4d-a428-4343-9429-540d155aa3b5-4568px?asset_id=4aae8b4d-a428-4343-9429-540d155aa3b5&image_assets=false&size=4568"
//             className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
//         />
//         <div className={"relative justify-center"}>
//             <div
//                 aria-hidden="true"
//                 className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
//             >
//                 <div
//                     style={{
//                         clipPath:
//                             'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//                     }}
//                     className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
//                 />
//             </div>
//             <div
//                 aria-hidden="true"
//                 className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
//             >
//                 <div
//                     style={{
//                         clipPath:
//                             'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//                     }}
//                     className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
//                 />
//             </div>
//             <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
//                 <div className="mx-auto max-w-2xl lg:mx-0">
//                     <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Flores and Sons
//                         Remodeling</h2>
//                     <p className="mt-6 text-lg leading-8 text-gray-300">
//                         Ready to start a new project? We are the best to do it, Contact us for a free quote!
//                     </p>
//                 </div>
//                 <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
//                     <div
//                         className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
//                         {links.map((link) => (
//                             <Link key={link.name} to={link.to}>
//                                 <Button
//                                     className={"bg-transparent hover:bg-transparent hover:-translate-y-1 transform transition duration-200 shadow-none"}>
//                                     {link.name} <span aria-hidden="true" className={"mx-1"}>&rarr;</span>
//                                 </Button>
//                             </Link>
//                         ))}
//                     </div>
//                     <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
//                         {stats.map((stat) => (
//                             <div key={stat.name} className="flex flex-col-reverse">
//                                 <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
//                                 <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
//                             </div>
//                         ))}
//                     </dl>
//                 </div>
//             </div>
//         </div>
//     {/*</AuroraBackground>*/}
// </div>