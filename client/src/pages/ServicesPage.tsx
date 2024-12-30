import {Layout} from "@/pages/Layout"
import {Work} from "@/components/work"

export const ServicesPage = () => {

    return (
        <Layout>
            <div className={"h-fit  w-[80%] mx-auto text-[#EEEEEE] flex flex-col justify-center items-center"}>
                <h1 className={"text-6xl font-light"}>Services</h1>
                <div className={"lg:w-2/3 mx-auto my-2 pb-2"}>
                    <p className={"text-center"}>
                        Have a project idea in mind? Whether it’s a big or small enhancement, we’d love to bring
                        it to life. Give us a call today to discuss your vision and let’s create something amazing
                        together!
                    </p>
                    <br />
                    <p className={"text-center"}>
                        ¿Tienes una idea para un proyecto? Ya sea una mejora grande o pequeña, nos encantaría hacerlo
                        realidad. ¡Llámanos hoy para discutir tu visión y crear algo increíble juntos!
                    </p>
                </div>
            </div>
            <div className={"pb-10"}>
                <Work/>
            </div>

        </Layout>
    )
}