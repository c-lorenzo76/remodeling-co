import {AuroraBackground} from "@/components/ui/aurora-background";
import {Link} from "react-router-dom"
import {Button} from "@/components/ui/button";


// import background from "../assets/nav-pic.webp"

// const links = [
//     {name: 'About', to: "/About"},
//     {name: 'Services', to: "/Services"},
//     {name: 'Gallery', to: "/Services"},
//     {name: 'Contact', to: "/Contact"},
// ]


export const Navigation = () => {
    return (
        <div className={""}>
            <AuroraBackground>
                <div>
                    <Link to={"/About"}>
                        <Button>test</Button>
                    </Link>
                </div>
            </AuroraBackground>
        </div>
    )
}