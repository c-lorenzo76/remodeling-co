import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import {Textarea} from "@/components/ui/textarea"

export const Contact = () => {

    return (
        <div className={"bg-[#EEEEEE] h-[422px] lg:h-[691px] font-afacad"}>
            <div className={"w-[85%] lg:w-[90%] mx-auto flex flex-col lg:flex-row"}>
                <div className={"ml-20 flex flex-col justify-center mx-auto  space-y-2"}>
                    <Label htmlFor={"fName"}>First Name</Label>
                    <Input id={"fName"} type={"text"} placeholder={"John"}></Input>
                    <Label htmlFor={"lName"}>Last Name</Label>
                    <Input id={"lName"} type={"text"} placeholder={"Doe"}></Input>
                    <Label htmlFor={"email"}>Email</Label>
                    <Input id={"email"} type={"email"} placeholder={"jdoe@gmail.com"}></Input>
                    <Label htmlFor={"phone"}>Phone</Label>
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
                    <Label htmlFor={"message"}>Message</Label>
                    <Textarea/>
                </div>
                <div className={"w-[80%] mr-20 border"}>
                    <img src={"../src/assets/living-room.webp"} alt={"contact-image"} className={"max-h-fit"} />
                </div>
            </div>
        </div>
    )
}