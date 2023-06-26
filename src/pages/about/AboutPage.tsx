import { Footer } from "../../components";
import NavBar from "../../components/navbar/NavBar"

const AboutPage = () => {
  return (
    <main className="flex flex-col min-h-screen">

      <NavBar />

      {/* https://i.pinimg.com/564x/91/33/24/913324ebeb067c45f13d4471983bded2.jpg */}

      <section className="flex-grow flex">
        <aside  className="sm:hidden w-[20%] bg-gray-200">
          <img 
              className="bg-center bg-fixed bg-cover h-full"
              src="https://i.pinimg.com/564x/5a/9f/4d/5a9f4df31603207cb46dcb3f359dbf74.jpg" 
              alt="img" 
          />
        </aside>
        <section className="sm:mt-[150px] mt-[250px] flex-1 overflow-y-auto ">
          <article className="lg:flex xl:flex 2xl:flex 3xl:flex h-[250px] sm:w-[100%] sm:my-0 sm:mx-auto sm:px-10">
              <div className="flex justify-center sm:w-52 sm:my-0 sm:mx-auto sm:h-40">
                <img 
                  className="bg-cover bg-no-repeat bg-fixed bg-center w-full"
                  src="" 
                  alt="imgage" 
                />
              </div>
              <section className="sm:text-center sm:p-4">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, labore? Ratione commodi</p>
              </section>
          </article>

          <article className="lg:flex xl:flex 2xl:flex 3xl:flex h-[250px] sm:mt-10  sm:w-[100%] sm:my-0 sm:mx-auto sm:px-10 ">
              <div className="flex justify-center sm:w-52 sm:my-0 sm:mx-auto sm:h-40">
                <img 
                  className="bg-cover bg-no-repeat bg-fixed bg-center w-full"
                  src="" 
                  alt="imgage" 
                />
              </div>

              <section className="sm:text-center sm:p-4">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, labore? Ratione commodi</p>
              </section>
          </article>

          <article className="lg:flex xl:flex 2xl:flex 3xl:flex h-[250px] sm:mt-10 sm:mb-10 sm:w-[100%] sm:my-0 sm:mx-auto sm:px-10 ">
              <div className="flex justify-center sm:w-52 sm:my-0 sm:mx-auto sm:h-40">
                <img 
                  className="bg-cover bg-no-repeat bg-fixed bg-center w-full"
                  src="" 
                  alt="imgage" 
                />
              </div>
              <section className="sm:text-center sm:p-4">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, labore? Ratione commodi</p>
              </section>
          </article>
        </section>

        <aside className="sm:hidden w-[20%] bg-gray-200">
          <img 
               className="bg-center bg-fixed bg-cover h-full"
              src="https://i.pinimg.com/564x/66/fe/4f/66fe4f0664f3e9ff23a019794b7d910c.jpg" 
              alt="img" 
          />
        </aside>

      </section>


      <Footer className="bg-[#242222] h-auto " />
    </main>
  )
}

export default AboutPage;
