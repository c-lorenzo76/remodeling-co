import {Header} from "@/components/header"
import {Navigation} from "@/components/navigation"
import {About} from "@/components/about"
import {Services} from "@/components/services";
import {Contact} from "@/components/contact";
import {Work} from "@/components/work";
import {Footer} from "@/components/footer";
import {Reviews} from "@/components/reviews";

export const Home = () => {

    return (
        <div className={"min-h-screen w-full flex-col"}>
            <Header/>
            <div className={"space-y-8 lg:space-y-10 bg-[#393E46] "}>
                <Navigation/>
                <About/>
                <Services/>
                <Work/>
                <Reviews />
                <Contact/>
                <Footer />
            </div>
        </div>
    )
}