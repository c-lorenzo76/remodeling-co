import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import {Textarea} from "@/components/ui/textarea"
import {IoMdMail} from "react-icons/io";
import {FaPhoneAlt} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import {Button} from "@/components/ui/button.tsx";


export const Contact = () => {

    return (
        <div className={"bg-[#EEEEEE] mx-auto h-fit font-afacad"}>
            <div className={"text-center py-10"}>
                <h1 className={"text-7xl"}>Contact us</h1>
                <p className={"text-2xl font-light"}>We'll connect with you as soon as we can</p>
            </div>
            <div className={"lg:w-[70%] mx-auto flex flex-col lg:flex-row lg:py-10"}>
                <div className={"mx-auto space-y-2"}>
                    <Label htmlFor={"fName"}>First Name *</Label>
                    <Input id={"fName"} type={"text"} placeholder={"First Name"}></Input>
                    <Label htmlFor={"lName"}>Last Name *</Label>
                    <Input id={"lName"} type={"text"} placeholder={"Last Name"}></Input>
                    <Label htmlFor={"phone"}>Phone *</Label>
                    <InputOTP maxLength={10}>
                        <InputOTPGroup>
                            <InputOTPSlot index={0}/>
                            <InputOTPSlot index={1}/>
                            <InputOTPSlot index={2}/>
                        </InputOTPGroup>
                        <InputOTPSeparator/>
                        <InputOTPGroup>
                            <InputOTPSlot index={3}/>
                            <InputOTPSlot index={4}/>
                            <InputOTPSlot index={5}/>
                        </InputOTPGroup>
                        <InputOTPSeparator/>
                        <InputOTPGroup>
                            <InputOTPSlot index={6}/>
                            <InputOTPSlot index={7}/>
                            <InputOTPSlot index={8}/>
                            <InputOTPSlot index={9}/>
                        </InputOTPGroup>
                    </InputOTP>
                    <Label htmlFor={"email"}>Email *</Label>
                    <Input id={"email"} type={"email"} placeholder={"jdoe@gmail.com"}></Input>
                    <Label htmlFor={"address"}>Street Address *</Label>
                    <Input id={"address"} type={"text"} placeholder={"Address"}></Input>
                    <Label htmlFor={"city"}>City *</Label>
                    <Input id={"city"} type={"text"} placeholder={"City"}></Input>
                    <Label htmlFor={"zipcode"}>Zip code*</Label>
                    <Input id={"zipcode"} type={"text"}></Input>
                    <Label htmlFor={"message"}>Message</Label>
                    <Textarea/>
                    <Button className={"w-full"}>Submit</Button>
                </div>
                <div className={"w-[80%] lg:w-[50%] mx-auto py-10 lg:py-0"}>
                    <h2 className={"text-3xl underline"}>Contact information</h2>
                    <ul className={"gap-4"}>
                        <li className={"flex flex-col items-start"}>
                            <div className={"flex flex-row items-center"}>
                                <MdOutlineAccessTimeFilled className={"mx-2"}/>
                                <h1>Office Hours:</h1>
                            </div>
                            <div className={"flex flex-row"}>
                                {/*<MdOutlineAccessTimeFilled className={"mx-2 "}/>*/}
                                <p className={"ml-8"}>Monday - Friday: 9am -5pm</p>
                            </div>
                        </li>
                        <li className={"flex flex-row items-center"}>
                            <FaLocationDot className={"mx-2"}/>
                            <h1>Chatham County, NC</h1>
                        </li>
                        <li className={"flex flex-row items-center"}>
                            <FaPhoneAlt className={"mx-2 h-[14px] w-[14px]"}/>
                            <h1>(919)799-0388</h1>
                        </li>
                        <li className={"flex flex-row items-center"}>
                            <IoMdMail className={"mx-2"} />
                            cristian@gmail.com
                        </li>
                    </ul>
                    {/*<img src={"../src/assets/living-room.webp"} alt={"contact-image"} className={"max-h-fit"} />*/}
                </div>
            </div>
        </div>
    )
}