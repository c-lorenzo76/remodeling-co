import {Link} from "react-router-dom"
import {Button} from "@/components/ui/button";


export const Navigation = () => {
    return (
        <div className={"relative overflow-hidden h-[100vh] background font-afacad"}>
            <nav className="w-full lg:w-[80%] mx-auto py-8 bg-transparent flex justify-center items-center z-10">
                <ul className="flex space-x-0 lg:space-x-6 relative z-10">
                    <li>
                        <Link to={"/About"}>
                            <Button
                                className={"text-lg md:text-xl bg-transparent hover:bg-transparent shadow-none text-[#EEEEEE] hover:text-[#EEEEEE]/40"}
                                style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"}}>
                                ABOUT
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/Services"}>
                            <Button
                                className={"text-lg md:text-xl bg-transparent hover:bg-transparent shadow-none text-[#EEEEEE] hover:text-[#EEEEEE]/40"}
                                style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"}}>
                                SERVICES
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/Gallery"}>
                            <Button
                                className={"text-lg md:text-xl bg-transparent hover:bg-transparent shadow-none text-[#EEEEEE] hover:text-[#EEEEEE]/40"}
                                style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"}}>
                                GALLERY
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/Contact"}>
                            <Button
                                className={"text-lg md:text-xl bg-transparent hover:bg-transparent shadow-none text-[#EEEEEE] hover:text-[#EEEEEE]/40"}
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