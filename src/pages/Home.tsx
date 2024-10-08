import {Header} from "@/components/header"
import {Navigation} from "@/components/navigation"
import {About} from "@/components/about"
import {Services} from "@/components/services";
import {Contact} from "@/components/contact";
import {Work} from "@/components/work";

export const Home = () => {

    return (
        <div className={"min-h-screen w-full flex-col "}>
            <Header/>
            <div className={"space-y-8 lg:space-y-10"}>
                <Navigation/>
                <About/>
                <Services/>
                <Work/>
                <Contact/>
            </div>
        </div>
    )
}