import {  Layout } from "../../components"
import NavBar from "../../components/navbar/NavBar"


const GamesPage = () => {
  return (
    <Layout>
      <NavBar />
      <section className="relative top-44 sm:w-[70%]  my-0 mx-auto grid gap-4 grid-flow-row sm:grid-cols-1 sm:gap-6 p-1">
        <article className="my-0 mx-auto ">
          <img 
            className="bg-cover bg-no-repeat bg-center bg-fixed sm:h-[350px] sm:w-[250px]"
            src="https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw2/meta-images/reveal/mw2-reveal-meta-share.jpg"
            alt="imagen" 
          />
        </article>
        <article className="my-0 mx-auto">
          <img 
            className="bg-cover bg-no-repeat bg-center sm:h-[350px] sm:w-[250px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGf1CeuJ7ZnqWA3i_dsghCeQ7nRMQJnVozisGOvIcjjstF2Id6cBbmiOG-ukfxsI3RgPQ&usqp=CAU" 
            alt="imagen"
          />
        </article>
        <article className="my-0 mx-auto ">
          <img 
            className="bg-cover bg-no-repeat bg-center bg-fixed sm:h-[350px] sm:w-[250px]"
            src="https://i0.wp.com/cloud.estacaonerd.com/wp-content/uploads/2021/08/19154942/Call-of-Duty-Vanguard.jpg?fit=1600%2C900&ssl=1" 
            alt="imagen" 
          />
        </article>
      </section>

    </Layout>
  )
}

export default GamesPage
