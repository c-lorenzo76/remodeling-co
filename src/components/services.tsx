import {
    Card,
    CardContent, CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export const Services = () => {

    return (
        <div className={"h-fit w-full font-afacad"}>
            <div className={"w-[90%] lg:w-[85%] mx-auto"}>
                <Card className={"bg-transparent shadow-none text-black flex flex-col lg:flex-row items-center justify-center border-none"} >
                    <CardHeader className={"lg:w-[60%]"}>
                        <CardTitle className={"font-light text-4xl text-center lg:text-left"}>
                            Our Services
                        </CardTitle>
                        <CardDescription className={"text-black font-bold text-4xl lg:text-5xl lg:ml-4"}>
                            WHAT WE OFFER
                        </CardDescription>
                    </CardHeader>
                    <CardContent className={"lg:w-[85%] text-lg "}>
                        Since 2018, we have been providing a wide range of remodeling and
                        renovation services for homeowners throughout our community, and we’re
                        always striving to exceed our clients’ expectations. As a locally owned and
                        operated business, we can offer unparalleled customer service and personalization
                        that larger renovation companies simply can’t match. If you’re ready to upgrade,
                        enhance, or expand your house, we encourage you to give us a call.
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}