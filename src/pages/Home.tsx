import {Header} from "@/components/header"
import {Navigation} from "@/components/navigation"
import {About} from "@/components/about"
import {Services} from "@/components/services";
import {Contact} from "@/components/contact";

export const Home = () => {

    return (
     <div className={"min-h-screen w-full flex-col"}>
         <Header />
         <Navigation />
         <About />
         <Services />
         <Contact />
     </div>
    )
}