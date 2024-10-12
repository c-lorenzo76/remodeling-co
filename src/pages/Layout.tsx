import {Outlet} from "react-router-dom";
import {Header} from "@/components/header"
import {Footer} from "@/components/footer";
import {Toaster} from "@/components/ui/toaster"
import { ReactNode } from "react"

interface LayoutProps {
    children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={"min-h-screen w-full flex-col font-afacad"}>
            <Header/>
            <div className={"space-y-8 lg:space-y-10 bg-white "}>
                {children}
                <Toaster />
                <Footer />
            </div>
            <Outlet/>
        </div>
    )
}