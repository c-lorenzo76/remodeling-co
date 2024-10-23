import {Layout} from "@/pages/Layout"
import {Work} from "@/components/work"

export const ServicesPage = () => {

    return (
        <Layout>
            <div className={"h-fit py-10 w-[80%] mx-auto text-[#EEEEEE] flex flex-col justify-center items-center"}>
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
            <div className={"pb-10"}>
                <Work />
            </div>

        </Layout>
    )
}