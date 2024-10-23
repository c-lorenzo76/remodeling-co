import { MdOutlineCopyright } from "react-icons/md";

export const Footer = () => {
    return (
        <div className="h-fit bg-[#4A4947] font-afacad text-[#EEEEEE]">
            <div className={"flex justify-center items-center p-10"}>
                <MdOutlineCopyright className={"mx-1"}/>
                <p className={"text-center"}>
                     2024 Flores and Sons Remodeling
                </p>
            </div>
        </div>

    )
}