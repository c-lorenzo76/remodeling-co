import {
    Card,
    CardContent, CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export const Work = () => {

    return (
        <div className={"h-fit border"}>
            <div className={"mx-auto w-[80%] flex flex-col lg:flex-row items-center justify-center"}>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Kitchen
                        </CardTitle>
                        <CardDescription>
                            Kitchen Remodeling
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        We can provide new table counters, sink, cabinets to style your kitchen into a more modern look
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>

                        </CardTitle>
                        <CardDescription>

                        </CardDescription>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>

                        </CardTitle>
                        <CardDescription>

                        </CardDescription>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>

                        </CardTitle>
                        <CardDescription>

                        </CardDescription>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                </Card>
            </div>
        </div>
    )
}