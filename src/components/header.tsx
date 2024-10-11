import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaFacebookSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const Header = () => {
    return (
        <header className={"bg-[#222831] text-[#EEEEEE] font-afacad flex justify-center"}>
            <div className={"grid grid-cols-2 w-full max-w-6xl mx-2 h-9"}>
                <div className={"flex justify-start"}>
                    <Link to={"https://www.google.com/maps/place/Chatham+County,+NC/@35.6941264,-79.8903502,275566m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89acbc9393c41479:0xda597fa59834ed64!8m2!3d35.6978371!4d-79.2902133!16zL20vMG40aHM?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"} className={"flex items-center"}>
                        <FaLocationDot className={"mr-2"} />
                        <strong className={"font-semibold"}>
                            Chatham County, NC
                        </strong>
                    </Link>
                </div>
                <div className={"flex justify-end"}>
                    <a className={"flex items-center mx-2"}>
                        <FaPhoneAlt className={"mx-2 h-[14px] w-[14px]"} />
                        <p className={"font-light hidden md:block"}>
                            (919) 799-0388
                        </p>
                        <IoMdMail className={"mx-2"} />
                        <FaFacebookSquare className={""} />
                    </a>
                </div>
            </div>
        </header>
    );
};
