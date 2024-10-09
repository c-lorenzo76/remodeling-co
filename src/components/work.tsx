import {
    Card,
    CardContent, CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export const Work = () => {

    return (
        <div className={"h-fit bg-[#393E46] w-[80%] max-w-7xl mx-auto"}>
            <div className={"grid grid-cols-1 lg:grid-cols-2 gap-4"}>
                <Card className={"mx-auto w-full max-w-[350px] bg-[#EEEEEE]"}>
                    <CardHeader>
                        <CardTitle>
                            Kitchen
                        </CardTitle>
                        <CardDescription>
                            Kitchen Remodeling
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        add image background later
                    </CardContent>
                </Card>
                <Card className={"mx-auto w-full max-w-[350px] bg-[#EEEEEE]"}>
                    <CardHeader>
                        <CardTitle>
                            Bathroom
                        </CardTitle>
                        <CardDescription>
                            Bathroom Remodel
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        add image background later
                    </CardContent>
                </Card>
                <Card className={"mx-auto w-full max-w-[350px] bg-[#EEEEEE]"}>
                    <CardHeader>
                        <CardTitle>
                            Living room
                        </CardTitle>
                        <CardDescription>
                            Living room remodels
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        add image background later
                    </CardContent>
                </Card>
                <Card className={"mx-auto w-full max-w-[350px] bg-[#EEEEEE]"}>
                    <CardHeader>
                        <CardTitle>
                            Additions
                        </CardTitle>
                        <CardDescription>
                            Room Additions
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        add image background later
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}