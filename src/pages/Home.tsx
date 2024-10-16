import {Header} from "@/components/header"
import {Navigation} from "@/components/navigation"
import {About} from "@/components/about"
import {Services} from "@/components/services";
import {Contact} from "@/components/contact";
import {Work} from "@/components/work";
import {Footer} from "@/components/footer";
import {Reviews} from "@/components/reviews";
import {Toaster} from "@/components/ui/toaster"

export const Home = () => {

    return (
        <div className={"min-h-screen w-full flex-col"}>
            <Header/>
            <div className={"space-y-8 lg:space-y-10 bg-gradient-to-b from-gray-600 to-gray-950"}>
                <Navigation/>
                <About/>
                <Services/>
                <Work/>
                <Reviews />
                <Contact/>
            </div>
            <Footer />
            <Toaster />
        </div>
    )
}