import { Footer } from "../../components";
import NavBar from "../../components/navbar/NavBar"


const GamesPage = () => {
  return (

    <main className="sm:h-screen">
      <NavBar />
        <section className="my-48">
          <h3 className="sm:text-[15px] sm:px-4 text-center font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam  adipisicing elit. Obcae adipisicing elit. Magnamcati fugiat ratione aliquid est quia rem temporibus sequi.</h3>
          <section className="grid lg:grid-cols-3  xl:grid-cols-3  2xl:grid-cols-3 3xl:grid-cols-3  gap-5 mt-24 my-0 mx-auto sm:w-60 w-[900px]" >
            <article className="bg-white h-60 w-52">
              <img
                className="h-60 w-52 bg-cover bg-fixed bg-center border-x-2 rounded-md" 
                src="https://culturageek.com.ar/wp-content/uploads/2022/10/Diseno-sin-titulo-2022-10-17T142813.259.jpg" 
                alt="img" 
              />
            </article>
            <article className="bg-white h-60 w-52">
              <img 
                className="h-60 w-52 bg-cover bg-fixed bg-center border-x-2 rounded-md" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNCl8iobd0GXdSOheCqulLjizc4F1jO_ovZR_m3EQtzJWotF4-ijrZRMztV5eR57mDdtI&usqp=CAU" 
                alt="img"
              />
            </article>
            <article className="bg-white h-60 w-52 border-x-2 rounded-md">
              <img 
                className="h-60 w-52 bg-cover bg-fixed bg-center" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRilXsD_EywDJsfqPXj4zoIjzWEZtFWgXeohI5lnIwgIbkDq1uaMvmiSRnrNnZXueYO920&usqp=CAU" 
                alt="img" 
              />
            </article>
          </section>
        </section>
          <Footer className="bg-[#242222] sm:h-auto h-auto lg:absolute xl:absolute 2xl:absolute 3xl:absolute bottom-0 lg:w-full xl:w-full 2xl:w-full 3xl:w-full " />
    </main>

  )
}

export default GamesPage
