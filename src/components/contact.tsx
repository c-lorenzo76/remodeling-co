import {useState} from "react"
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
import {FaFacebookSquare, FaPhoneAlt} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";
import {MdOutlineAccessTimeFilled} from "react-icons/md";
import {Button} from "@/components/ui/button.tsx";


export const Contact = () => {
    const [formData, setFormData] = useState({
        fName: "",
        lName: "",
        phone: Array(10).fill(""),
        email: "",
        address: "",
        city: "",
        zipcode: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleOTPChange = (index: number, value: string) => {
        const newPhone = [...formData.phone];
        newPhone[index] = value;
        setFormData({ ...formData, phone: newPhone });
    };

    // Submits the form data
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Combine phone array into a full string before submitting
        const phoneNumber = formData.phone.join("");

        const dataToSubmit = {
            ...formData,
            phone: phoneNumber,  // Replace the phone array with the full phone number string
        };

        try {
            const response = await fetch("http://localhost:8080/new-client", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSubmit),
            });

            if (response.ok) {
                alert("Message sent successfully");
            } else {
                alert("Failed to send message");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };


    return (
        <div className={"bg-[#EEEEEE] mx-auto h-fit font-afacad"}>
            <div className={"text-center py-10"}>
                <h1 className={"text-7xl"}>Contact us</h1>
                <p className={"text-2xl font-light"}>We'll connect with you as soon as we can</p>
            </div>
            <div className={"lg:w-[70%] mx-auto flex flex-col lg:flex-row lg:py-10"}>
                <div className={"mx-auto space-y-2"}>
                    <form onSubmit={handleSubmit}>
                        <Label htmlFor={"fName"}>First Name *</Label>
                        <Input id={"fName"} name={"fName"} type={"text"} placeholder={"First Name"} value={formData.fName} onChange={handleChange} />

                        <Label htmlFor={"lName"}>Last Name *</Label>
                        <Input id={"lName"} name={"lName"} type={"text"} placeholder={"Last Name"} value={formData.lName} onChange={handleChange}/>

                        <Label htmlFor={"phone"}>Phone *</Label>
                        <InputOTP maxLength={10}>
                            <InputOTPGroup>
                                <InputOTPSlot index={0} value={formData.phone[0]} onChange={(e) => handleOTPChange(0, e.target.value)} />
                                <InputOTPSlot index={1} value={formData.phone[1]} onChange={(e) => handleOTPChange(1, e.target.value)} />
                                <InputOTPSlot index={2} value={formData.phone[2]} onChange={(e) => handleOTPChange(2, e.target.value)} />
                            </InputOTPGroup>
                            <InputOTPSeparator />
                            <InputOTPGroup>
                                <InputOTPSlot index={3} value={formData.phone[3]} onChange={(e) => handleOTPChange(3, e.target.value)} />
                                <InputOTPSlot index={4} value={formData.phone[4]} onChange={(e) => handleOTPChange(4, e.target.value)} />
                                <InputOTPSlot index={5} value={formData.phone[5]} onChange={(e) => handleOTPChange(5, e.target.value)} />
                            </InputOTPGroup>
                            <InputOTPSeparator />
                            <InputOTPGroup>
                                <InputOTPSlot index={6} value={formData.phone[6]} onChange={(e) => handleOTPChange(6, e.target.value)} />
                                <InputOTPSlot index={7} value={formData.phone[7]} onChange={(e) => handleOTPChange(7, e.target.value)} />
                                <InputOTPSlot index={8} value={formData.phone[8]} onChange={(e) => handleOTPChange(8, e.target.value)} />
                                <InputOTPSlot index={9} value={formData.phone[9]} onChange={(e) => handleOTPChange(9, e.target.value)} />
                            </InputOTPGroup>
                        </InputOTP>

                        <Label htmlFor={"email"}>Email *</Label>
                        <Input id={"email"} name={"email"} type={"email"} placeholder={"jdoe@gmail.com"} value={formData.email} onChange={handleChange}/>

                        <Label htmlFor={"address"}>Street Address *</Label>
                        <Input id={"address"} name={"address"} type={"text"} placeholder={"Address"} value={formData.address} onChange={handleChange}/>

                        <Label htmlFor={"city"}>City *</Label>
                        <Input id={"city"} name={"city"} type={"text"} placeholder={"City"} value={formData.city} onChange={handleChange}/>

                        <Label htmlFor={"zipcode"}>Zip code*</Label>
                        <Input id={"zipcode"} name={"zipcode"} type={"text"} value={formData.zipcode} onChange={handleChange}/>

                        <Label htmlFor={"message"}>Message</Label>
                        <Textarea id={"message"} name={"message"} value={formData.message} onChange={handleChange}/>

                        <Button type={"submit"} className={"w-full mt-4"}>Submit</Button>
                    </form>
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
                            <IoMdMail className={"mx-2"}/>
                            cristian@gmail.com
                        </li>
                        <li className={"flex flex-row items-center"}>
                            <FaFacebookSquare className={"mx-2"}/>
                        </li>
                    </ul>
                    {/*<img src={"../src/assets/living-room.webp"} alt={"contact-image"} className={"max-h-fit"} />*/}
                </div>
            </div>
        </div>
    )
}
