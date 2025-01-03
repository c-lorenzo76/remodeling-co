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

import { Slash } from "lucide-react";

interface LayoutProps {
    children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    const location = useLocation();
    const currentPage = location.pathname.split("/").filter(Boolean).pop() || "Home";

    return (
        // bg-gradient-to-b from-[#393E46] to-[#222831]
        <div className="min-h-screen flex flex-col font-afacad bg-gradient-to-b from-[#42413E] to-[#2E2D2B] ">
            <Header/>
            <div className={"lg:w-[80%] w-full pt-4 bg-[#343131]okay lg:bg-transparent flex flex-row items-center mx-auto h-fit "}>
                <img src={logo} alt="Company Logo" className="shadow-lg rounded-2xl object-cover h-24 mx-4"/>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <Link to="/" className={"text-white z-50 hover:text-[#FAF7F0]/60 hover:-translate-y-0.5 transform transition duration-200 text-lg"} >
                                Home
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator >
                            <Slash />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbPage className={"text-[#FAF7F0]/70 text-lg"}>
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