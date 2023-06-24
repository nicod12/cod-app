import {  useEffect } from "react";
import { Footer, Header } from "../../components";


interface Article {
  readonly id:number
  image:string
  description:string

}


const HomePage = () => {

  const articleItem: Article[] = [
    {
      id:1,
      image: "https://i.postimg.cc/bJRvbRWP/11.png",
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas facilis quis, molestiae tempora ut natus modi iure aut libero a accusantium, quos quibusdam vero eveniet recusandae, ullam perspiciatis inventore similique.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas facilis quis, molestiae tempora ut natus modi iure aut libero a accusantium, quos quibusdam vero eveniet recusandae, ullam perspiciatis inventore similique"
    },
    {
      id:2,
      image: "https://i.postimg.cc/G2vyfYfg/12.png",
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas facilis quis, molestiae tempora ut natus modi iure aut libero a accusantium, quos quibusdam vero eveniet recusandae, ullam perspiciatis inventore similique.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas facilis quis, molestiae tempora ut natus modi iure aut libero a accusantium, quos quibusdam vero eveniet recusandae, ullam perspiciatis inventore similique"
    },
    {
      id:3,
      image: "https://i.postimg.cc/cHdxsnHb/13.png",
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas facilis quis, molestiae tempora ut natus modi iure aut libero a accusantium, quos quibusdam vero eveniet recusandae, ullam perspiciatis inventore similique.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas facilis quis, molestiae tempora ut natus modi iure aut libero a accusantium, quos quibusdam vero eveniet recusandae, ullam perspiciatis inventore similique"
    },
    {
      id:4,
      image: "https://i.postimg.cc/k4wnDgRX/14.png",
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas facilis quis, molestiae tempora ut natus modi iure aut libero a accusantium, quos quibusdam vero eveniet recusandae, ullam perspiciatis inventore similique.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas facilis quis, molestiae tempora ut natus modi iure aut libero a accusantium, quos quibusdam vero eveniet recusandae, ullam perspiciatis inventore similique"
    }
  ]

  useEffect(() => {;
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="h-screen" >
      <Header />



       <h2 className="mt-24 px-2 font-bold text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo voluptate consequuntur</h2>    


        <section className="my-28 grid grid-cols-2 sm:grid sm:grid-cols-1 gap-14">
          
          {
            articleItem.map(item => {
              return(
                 <section  key={item.id} >
                    <article                   
                      className="flex sm:items-center sm:p-0 px-24 gap-2 sm:w-[90%] sm:my-0 sm:mx-auto sm:border-none "
                    >
                      <div className="sm:w-[40%] w-[50%]">
                        <img 
                          className="sm:h-[230px] h-[300px] w-full bg-cover bg-no-repeat bg-center bg-fixed "
                          src={item.image} 
                          alt="img01" 
                        />
                      </div>
                      <div className=" sm:w-full sm:p-2 w-[80%] text-center ">
                        <p className="sm:text-[15px] text-[20px]">{item.description}</p>
                      </div>
                  </article>
                    <div className="card-gradient mt-11 w-[80%] my-0 mx-auto"></div>
                  </section>
              )
            })
          }
       

        </section>
      <Footer className="bg-[#242222] sm:h-auto h-auto " />

    </main>
   
  )
}

export default HomePage;