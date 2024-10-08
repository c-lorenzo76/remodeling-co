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
        <div className={"bg-[#EEEEEE] h-fit font-afacad"}>
            <div className={"lg:w-[90%] mx-auto flex flex-col lg:flex-row py-10"}>
                <div className={"lg:mx-10 flex flex-col mx-auto space-y-2"}>
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
                    <Input id={"zipcode"} type={"text"} ></Input>
                    <Label htmlFor={"message"}>Message</Label>
                    <Textarea/>
                </div>
                <div className={"w-[80%] mr-20 border hidden lg:block"}>
                    <img src={"../src/assets/living-room.webp"} alt={"contact-image"} className={"max-h-fit"} />
                </div>
            </div>
        </div>
    )
}