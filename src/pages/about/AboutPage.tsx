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
        <section className="sm:mt-[150px] mt-[250px] sm:mb-5  mb-16 flex-1 overflow-y-auto grid gap-10">

          <article className="bg-gray-950 sm:border-none border-[1px] border-double border-gray-200  border-opacity-25 rounded-md sm:bg-transparent md:w-[80%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%] 3xl:w-[80%] md:flex lg:flex xl:flex 2xl:flex 3xl:flex gap-4
                              lg:items-center xl:items-center  2xl:items-center  3xl:items-center h-[250px] sm:w-[100%] my-0 mx-auto sm:px-10 p-4"
          >
              <div className="flex justify-center  sm:w-52 w-[30%] h-40 sm:my-0 sm:mx-auto">
                <img 
                  className="bg-cover bg-no-repeat bg-fixed bg-center w-full"
                  src="https://i.pinimg.com/564x/db/c7/39/dbc7392abdfcd47ca2ad53d27d209a48.jpg" 
                  alt="imgage" 
                />
              </div>
              <section className="text-center sm:p-4 lg:w-[70%] xl:w-[70%] 2xl:w-[70%] 3xl:w-[70%]">
                <p>Lorem, ipsum dolor sit ame  adipisicing elit. Quisquam, labore? Ratione commodit consectetur  adipisicing elit. Quisquam, labore? Ratione commodi adipisicing elit. Quisquam, labore?</p>
              </section>
          </article>


          <article className="bg-gray-950 sm:border-none border-[1px] border-double border-gray-200  border-opacity-25 rounded-md sm:bg-transparent md:w-[80%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%] 3xl:w-[80%] md:flex lg:flex xl:flex 2xl:flex 3xl:flex gap-4
                              lg:items-center xl:items-center  2xl:items-center  3xl:items-center h-[250px] sm:w-[100%] my-0 mx-auto sm:px-10 p-4"
          >
              <div className="flex justify-center  sm:w-52 w-[30%] h-40 sm:my-0 sm:mx-auto">
                <img 
                  className="bg-cover bg-no-repeat bg-fixed bg-center w-full"
                  src="https://i.pinimg.com/736x/cf/f7/9f/cff79f44f1d5ba74bdc6580af955c8a5.jpg" 
                  alt="imgage" 
                />
              </div>
              <section className="text-center sm:p-4 lg:w-[70%] xl:w-[70%] 2xl:w-[70%] 3xl:w-[70%]">
                <p>Lorem, ipsum dolor sit ame  adipisicing elit. Quisquam, labore? R atione commodit consectetur  adipisicing elit. Quisquam, labore? Ratione commodi ame  adipisicing elit. Quisquam, labore? Ratione commodit consectetur  adipisicing elit. Quisquam</p>
              </section>
          </article>


          <article className="bg-gray-950 sm:border-none border-[1px] border-double border-gray-200  border-opacity-25 rounded-md sm:bg-transparent md:w-[80%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%] 3xl:w-[80%] md:flex lg:flex xl:flex 2xl:flex 3xl:flex gap-4
                              lg:items-center xl:items-center  2xl:items-center  3xl:items-center h-[250px] sm:w-[100%] my-0 mx-auto sm:px-10 p-4"
          >
              <div className="flex justify-center  sm:w-52 w-[30%] h-40 sm:my-0 sm:mx-auto">
                <img 
                  className="bg-cover bg-no-repeat bg-fixed bg-center w-full"
                  src="https://i.pinimg.com/564x/f3/f8/36/f3f83623687b39875a8670952ba55de1.jpg" 
                  alt="imgage" 
                />
              </div>
              <section className="text-center sm:p-4 md:w-[70%] lg:w-[70%] xl:w-[70%] 2xl:w-[70%] 3xl:w-[70%]">
                <p>Lorem, ipsum dolor sit ame  adipisicing elit. Quisquam, labore? Ratione commodit consectetur  adipisicing elit. Quisquam, labore? Ratione commodi</p>
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
