import {Layout} from "@/pages/Layout"
import logo from "@/assets/Flores.png";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import {Link} from "react-router-dom";

export const ServicesPage = () => {

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
                            <BreadcrumbPage className={"text-[#EEEEEE]/60 text-lg"}>Services</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div
                className={"h-fit w-[80%] mx-auto bg-[#393E46] text-[#EEEEEE] flex flex-col justify-center items-center"}>
                <h1 className={"text-6xl font-light"}>Services</h1>
                <div className={"lg:w-2/3 mx-auto my-2"}>
                    <p className={"text-center"}>
                        Since 2018, we have been providing a wide range of remodeling and
                        renovation services for homeowners throughout our community, and we’re
                        always striving to exceed our clients’ expectations. As a locally owned and
                        operated business, we can offer unparalleled customer service and personalization
                        that larger renovation companies simply can’t match. If you’re ready to upgrade,
                        enhance, or expand your house, we encourage you to give us a call.
                    </p>
                </div>
            </div>

        </Layout>
    )
}