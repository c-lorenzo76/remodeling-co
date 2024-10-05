import {Header} from "@/components/header"
import {Navigation} from "@/components/navigation"

export const Home = () => {

    return (
     <div className={"border min-h-screen w-full flex-col"}>
         <Header />
         <Navigation />
         <div>
             hello
         </div>
     </div>

    )
}