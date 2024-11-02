import {
    Card,
    CardContent, CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export const Work = () => {

    return (
        <div className={"h-fit font-afacad"}>
            <div className={"w-[90%] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4"}>
                <Card className={"mx-auto w-full max-w-[400px] bg-[#EEEEEE] shadow-xl border-none"}>
                    <CardHeader className={"p-4"} />
                    <CardContent>
                        {/*../src/assets/images/IMG_4145.JPG*/}
                        {/*https://plus.unsplash.com/premium_photo-1680382578857-c331ead9ed51?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2l0Y2hlbiUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D*/}
                        <img alt={"kitchen_img"} className={"aspect-square rounded object-cover"} src={"/images/IMG_4145.JPG"} />
                    </CardContent>
                    <CardFooter className={"flex justify-center"}>
                        <CardTitle className={"text-center font-normal text-3xl"}>
                            Kitchen remodeling
                        </CardTitle>
                    </CardFooter>
                </Card>
                <Card className={"mx-auto w-full max-w-[400px] bg-[#EEEEEE] shadow-xl border-none"}>
                    <CardHeader className={"p-4"} />
                    <CardContent>
                        {/*src={"data:image/jpeg;base64,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"}*/}
                        <img alt={"bathroom_img"} className={"aspect-square rounded object-cover"} src={"/images/IMG_4142.JPG"}/>
                    </CardContent>
                    <CardFooter className={"flex justify-center"}>
                        <CardTitle className={"text-center font-normal text-3xl"}>
                            Bathroom remodeling
                        </CardTitle >
                    </CardFooter>
                </Card>
                <Card className={"mx-auto w-full max-w-[400px] bg-[#EEEEEE] shadow-xl border-none"}>
                    <CardHeader className={"p-4"} />
                    <CardContent>
                        {/*src={"https://plus.unsplash.com/premium_photo-1706140675031-1e0548986ad1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGl2aW5ncm9vbXxlbnwwfHwwfHx8MA%3D%3D"}*/}
                        <img alt={"living-room_img"} className={"aspect-square rounded object-cover"} src={"/images/IMG_4149.JPG"} />
                    </CardContent>
                    <CardFooter className={"flex justify-center"}>
                        <CardTitle className={"text-center font-normal text-3xl"}>
                            Room additions
                        </CardTitle>
                    </CardFooter>
                </Card>
                {/*<Card className={"mx-auto w-full max-w-[350px] bg-[#EEEEEE]"}>*/}
                {/*    <CardHeader>*/}
                {/*        <CardTitle>*/}
                {/*            Additions*/}
                {/*        </CardTitle>*/}
                {/*        <CardDescription>*/}
                {/*            Room Additions*/}
                {/*        </CardDescription>*/}
                {/*    </CardHeader>*/}
                {/*    <CardContent>*/}
                {/*        add image background later*/}
                {/*    </CardContent>*/}
                {/*</Card>*/}
            </div>
        </div>
    )
}