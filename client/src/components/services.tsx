import {
    Card,
    CardContent, CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export const Services = () => {

    return (
        <div className={"h-fit w-full font-afacad "}>
            <div className={"w-[90%] md:w-3/4 mx-auto"}>
                <Card
                    className={"bg-[#F5F5F5] rounded-none shadow-none text-black flex flex-col lg:flex-row items-center justify-center border-none"}>
                    <CardHeader className={"lg:w-[60%]"}>
                        <CardTitle className={"font-light text-4xl text-center lg:text-left"}>
                            Our Services
                        </CardTitle>
                        <CardDescription className={"text-black font-bold text-4xl lg:text-5xl lg:ml-4"}>
                            WHAT WE OFFER
                        </CardDescription>
                    </CardHeader>
                    <CardContent className={"lg:w-[85%] text-lg flex pt-0 lg:pt-5 "}>
                        Since 2014, our remodeling company has been transforming homes into beautiful, functional
                        spaces that reflect our clients' styles and needs. Specializing in remodeling, we bring a
                        blend of creativity,
                        precision, and craftsmanship to every project we undertake. Whether it's a complete remodeling
                        overhaul or a simple
                        renovation, our team is dedicated to delivering exceptional quality and design. We pride
                        ourselves on listening to our clients,
                        offering solutions, and turning visions into reality. From start to finish, we offer great customer
                        experience that
                        exceeds expectations.
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}