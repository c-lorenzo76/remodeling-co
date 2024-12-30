import {Layout} from "@/pages/Layout";


export const AboutPage = () => {
    return (
        <Layout>
            <div
                className={"h-fit py-10 w-[80%] mx-auto  text-[#EEEEEE] flex flex-col justify-center items-center z-10"}>
                <h1 className={"text-6xl font-light"}>About</h1>
                <div className={"lg:w-2/3 mx-auto my-2"}>
                    <p className={"text-center"}>
                        Since 2014, we have proudly delivered a range of remodeling and renovation services to homes
                        within
                        our community. As a locally owned family business, we prioritize building relationships
                        with our clients by offering customer service and personalized solutions to their unique needs.
                        We have a strong commitment to provide quality craftsmanship and keen to detail. Whether you're
                        looking to modernize your home, or add new functionality, we're here to bring your vision to
                        life.
                        Contact us today to start your next project!
                    </p>
                    <br />
                    <p className={"text-center"}>
                        Desde 2014, hemos ofrecido con orgullo una variedad de servicios de remodelación y renovación
                        para los hogares
                        de nuestra comunidad. Como una empresa familiar de propiedad local, damos prioridad a construir
                        relaciones con
                        nuestros clientes mediante un servicio al cliente excepcional y soluciones personalizadas que se
                        adaptan a sus
                        necesidades únicas. Tenemos un fuerte compromiso con la calidad en la artesanía y una atención
                        meticulosa a los
                        detalles. Ya sea que desee modernizar su hogar o añadir nueva funcionalidad, estamos aquí para
                        hacer realidad su visión.
                        ¡Contáctenos hoy para comenzar su próximo proyecto!
                    </p>
                </div>
            </div>
        </Layout>
    )
}