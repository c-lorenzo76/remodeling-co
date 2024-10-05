import logo from '../assets/Flores.png'
import {Button} from "@/components/ui/button";

// import {
//     NavigationMenu,
//     NavigationMenuContent,
//     NavigationMenuIndicator,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     NavigationMenuList,
//     NavigationMenuTrigger,
//     NavigationMenuViewport,
// } from "@/components/ui/navigation-menu"


export const Navigation = () => {
    return (
        <div className={"relative font-afacad bg-cover bg-center h-96 md:h-[670px] background"} >
            <div className={"container mx-auto flex flex-col md:flex-row items-center justify-between p-8"}>
                <div className={"md:ml-2 lg:ml-16"}>
                    <img src={logo} alt="Company Logo" className="shadow-lg rounded-full object-cover h-44"/>
                </div>
                <nav className={"mt-16 md:mt-0"}>
                    <ul className={"flex flex-row md:items-center"}>
                        <li>
                            <Button className={"mx-2 text-xl md:text-2xl shadow-none rounded hover:text-gray-300 hover:bg-transparent bg-transparent border-none"}>
                                ABOUT
                            </Button>
                        </li>
                        <li>
                            <Button className={"mx-2 text-xl md:text-2xl shadow-none rounded hover:text-gray-300 hover:bg-transparent bg-transparent border-none"}>
                                SERVICES
                            </Button>
                        </li>
                        <li>
                            <Button className={"mx-2 text-xl md:text-2xl shadow-none rounded hover:text-gray-300 hover:bg-transparent  bg-transparent border-none"}>
                                CONTACT
                            </Button>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={"container mx-auto flex items-center justify-between hidden md:block"}>
                <div className={"w-1/2 md:w-[67%] mx-auto md:ml-2 lg:ml-8"}>
                    <h1 className={"text-zinc-700 font-bold text-7xl max-w-xl"}>RENOVATE YOUR PROPERTY THE EASY WAY</h1>
                    <p className={"text-white md:max-w-xl xl:max-w-fit"}>We specialize in all new residential construction , remodeling,
                        repairs
                        including all interior and exterior home improvement.
                    </p>
                    <Button className={"mt-5 rounded"}>
                        GET A QUOTE
                    </Button>


                </div>
            </div>
        </div>
    )
}