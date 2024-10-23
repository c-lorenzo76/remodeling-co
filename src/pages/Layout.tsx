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
            <div className={"lg:w-[80%] w-full py-4 bg-[#343131] lg:bg-transparent flex flex-row items-center mx-auto h-fit "}>
                <img src={logo} alt="Company Logo" className="shadow-lg rounded-2xl object-cover h-24 mx-4"/>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <Link to="/" className={"text-[#FAF7F0] hover:text-[#FAF7F0]/60 hover:-translate-y-0.5 transform transition duration-200 text-lg"} style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"}}>
                                Home
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className={"text-[#FAF7F0]/70 text-lg"} style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"}}>
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