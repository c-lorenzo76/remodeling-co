// import {Link} from "react-router-dom";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaFacebookSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const Header = () => {
    return (
        <header className={"font-afacad flex justify-center bg-green-700/40"}>
            <div className={"grid grid-cols-2 w-full max-w-6xl mx-2 h-9"}>
                <div className={"flex justify-start"}>
                    <a className={"flex items-center"}>
                        <FaLocationDot className={"mr-2"}/>
                        <strong>
                            Chatham County, NC
                        </strong>
                    </a>
                </div>
                <div className={"flex justify-end"}>
                    <a className={"flex items-center"}>
                        <FaPhoneAlt className={"mr-2 h-[14px] w-[14px]"}/>
                        <p className={"font-light hidden md:block"}>
                            (919) 799-0388
                        </p>
                        <IoMdMail className={"mx-2"} />
                        <FaFacebookSquare className={"mx-2"} />

                    </a>
                </div>
            </div>
        </header>

    )
}
