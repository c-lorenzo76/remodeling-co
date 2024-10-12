import {Layout} from "@/pages/Layout.tsx";
import logo from "@/assets/Flores.png";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import {Contact} from "@/components/contact";
import {Link} from "react-router-dom";

export const ContactPage = () => {
    return (
        <Layout>
            <div className={"lg:w-[80%] flex flex-row items-center mx-auto h-fit bg-[#393E46]"}>
                <img src={logo} alt="Company Logo" className="shadow-lg rounded-2xl object-cover h-24 mx-4"/>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <Link to={"/"}
                                  className={"text-[#EEEEEE] hover:text-[#EEEEEE]/60 hover:-translate-y-0.5 transform transition duration-200 text-lg"}>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator/>
                        <BreadcrumbItem>
                            <BreadcrumbPage className={"text-[#EEEEEE]/60 text-lg"}>Contact</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <Contact />
        </Layout>
    )
}