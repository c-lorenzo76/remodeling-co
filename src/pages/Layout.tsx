import {Link, Outlet, useLocation} from "react-router-dom";
import {Header} from "@/components/header"
import {Footer} from "@/components/footer";
import {Toaster} from "@/components/ui/toaster"
import { ReactNode } from "react"
import logo from "@/assets/Flores.png";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";

interface LayoutProps {
    children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    const location = useLocation();
    const currentPage = location.pathname.split("/").filter(Boolean).pop() || "Home";

    return (
        <div className="min-h-screen flex flex-col font-afacad bg-gradient-to-b from-[#393E46] to-[#222831]">
            <Header/>
            <div className={"lg:w-[80%] w-full py-4 lg:bg-transparent flex flex-row items-center mx-auto h-fit bg-[#393E46]"}>
                <img src={logo} alt="Company Logo" className="shadow-lg rounded-2xl object-cover h-24 mx-4"/>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <Link to="/" className={"text-[#EEEEEE] hover:text-[#EEEEEE]/60 hover:-translate-y-0.5 transform transition duration-200 text-lg"}>
                                Home
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className={"text-[#EEEEEE]/60 text-lg"}>
                                {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="flex-grow">
                {children ? (
                    children
                ) : (
                    <Outlet/>
                )}
            </div>
            <Toaster/>
            <Footer/>
        </div>
    )
}


// bg-gradient-to-b from-[#393E46] to-[#222831]