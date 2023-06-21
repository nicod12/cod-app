import { FC, useEffect } from "react";
import { Layout } from "../../components";


interface Article {
  readonly id:number
  image:string
  description:string

}


const HomePage = () => {

  const articleItem: Article[] = [
    {
      id:1,
      image: "https://i.pinimg.com/564x/4c/4f/46/4c4f463a700aa75432ff6151d6c31a55.jpg",
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas facilis quis, molestiae tempora ut natus modi iure aut libero a accusantium, quos quibusdam vero eveniet recusandae, ullam perspiciatis inventore similique.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas facilis quis, molestiae tempora ut natus modi iure aut libero a accusantium, quos quibusdam vero eveniet recusandae, ullam perspiciatis inventore similique"
    },
    {
      id:2,
      image: "https://i.pinimg.com/564x/aa/df/43/aadf438ae1fa181be6a3f81af94dadfd.jpg",
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas facilis quis, molestiae tempora ut natus modi iure aut libero a accusantium, quos quibusdam vero eveniet recusandae, ullam perspiciatis inventore similique.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas facilis quis, molestiae tempora ut natus modi iure aut libero a accusantium, quos quibusdam vero eveniet recusandae, ullam perspiciatis inventore similique"
    },
    {
      id:3,
      image: "https://i.pinimg.com/564x/d4/17/4f/d4174f534aae53b8da52b82883d64f80.jpg",
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas facilis quis, molestiae tempora ut natus modi iure aut libero a accusantium, quos quibusdam vero eveniet recusandae, ullam perspiciatis inventore similique.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas facilis quis, molestiae tempora ut natus modi iure aut libero a accusantium, quos quibusdam vero eveniet recusandae, ullam perspiciatis inventore similique"
    },
    {
      id:4,
      image: "https://i.pinimg.com/736x/f2/b6/57/f2b657a085cc863ca9697a21f197873a.jpg",
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas facilis quis, molestiae tempora ut natus modi iure aut libero a accusantium, quos quibusdam vero eveniet recusandae, ullam perspiciatis inventore similique.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas facilis quis, molestiae tempora ut natus modi iure aut libero a accusantium, quos quibusdam vero eveniet recusandae, ullam perspiciatis inventore similique"
    }
  ]

  useEffect(() => {;
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <main>

       <h2 className="font-bold text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo voluptate consequuntur</h2>    


        <section className="mt-28 grid grid-cols-1 gap-14">
          
          {
            articleItem.map(item => {
              return(
                  <article 
                    key={item.id} 
                    className="flex gap-2 sm:w-[90%] sm:my-0 sm:mx-auto shadow-sm shadow-gray-400"
                  >
                    <div className="sm:w-[40%]">
                      <img 
                        className="sm:h-[300px] w-full bg-cover bg-no-repeat bg-center bg-fixed "
                        src={item.image} 
                        alt="img01" 
                      />
                    </div>
                    <div className="sm:w-[60%] sm:p-2">
                      <p>{item.description}</p>
                    </div>
                </article>
              )
            })
          }
       

        </section>
      </main>
    </Layout>
  )
}

export default HomePage;