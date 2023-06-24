import { Footer } from "../../components";
import NavBar from "../../components/navbar/NavBar"

const AboutPage = () => {
  return (
    <main className="sm:h-screen">

      <NavBar />

      <section className="flex">
        <aside  className="bg-white h-screen w-[20%] fixed left-0 top-0 bottom-0">
          <img src="" alt="img" />
        </aside>
        <section className="mt-36 flex-grow-1 ml-[20%] mr-[20%]">

        <article className="h-[250px]">
          contenido
        </article>
        <article className="h-[250px]">
          contenido
        </article>
        <article className="h-[250px]"> 
          contenido
        </article>
        <article className="h-[250px]">
          contenido
        </article>


        </section>
        <aside className="bg-white h-screen w-[20%] fixed right-0 top-0 bottom-0">
          <img src="" alt="img" />
        </aside>

      </section>


      <Footer className="bg-[#242222] sm:h-auto h-auto lg:absolute xl:absolute 2xl:absolute 3xl:absolute bottom-0 lg:w-full xl:w-full 2xl:w-full 3xl:w-full " />
    </main>
  )
}

export default AboutPage;
