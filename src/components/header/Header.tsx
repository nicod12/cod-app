import { useState } from "react"
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Items {
    title:string
    key:string
}

const menuItems:Items[] = [
    {
        title: "Home",
        key: "/"
    },
    {
        title: "About",
        key: "/about"
    },
    {
        title: "Games",
        key: "/games"
    }

]

const logo = "https://i.postimg.cc/j5BMHz78/logo.png"

const MenuMob = () => {
    const [showMenu, setShowMenu] = useState("sm:hidden")
    const pathname = window.location.pathname;
    return(

        <div className="my-0 mx-auto text-[20px] flex items-center gap-40 md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:hidden">
            <h2 className="uppercase font-bold">Cod</h2>
            <FaBars 
                onClick={() => {
                    if (showMenu == "sm:hidden") {
                      setShowMenu("");
                    } else {
                      setShowMenu("sm:hidden");
                    }
                  }}
            />
            

        <article
            className={`mt-5 sm:flex items-start justify-start w-full flex-col lg:hidden md:hidden 3xl:hidden  2xl:hidden xl:hidden ${showMenu}`}
        >
            {menuItems.map((item,index) => {
                return (
                <li
                key={index}
                    className={`list-none mt-5 ${
                    item.key == pathname && "bg-white text-black rounded-md px-5"
                    }`}
                >
                    <Link to={`${item.key}`}>{item.title}</Link>
                </li>
                );
            })}
         </article>


         </div>
    )
}


const MenuNorm = () => {
    return(
        <section className="sm:hidden flex gap-[400px] my-0 mx-auto justify-between">
            <img
                className="w-[200px] h-12 " 
                src={logo} 
                alt="logo" 
            />
            <article className="flex gap-8 items-center uppercase">
                {
                    menuItems.map(item => {
                        return(
                            <ul 
                                key={item.key}
                                
                            >
                            <li><Link to={`${item.key}`}>{item.title}</Link></li>
                            </ul>
                        )
                    })
                }
            </article>
        </section>
    )
}

const Header = () => {
     
    
    const imgBg = "https://i.postimg.cc/MZ3DHtMp/cod.png"


  return (
    <section className="relative" >
        <article className="relative sm:h-600px] h-[800px] w-full xl:text-[20px]">
            <img 
                className="bg-cover bg-no-repeat bg-center bg-fixed sm:h-[800px] h-[800px] w-full"
                src={imgBg} 
                alt="imgBG" 
            /> 
            <nav className="fixed top-6 left-1/2   -translate-x-1/2 flex items-center justify-between py-[2px] px-[20px] bg-transparent backdrop-blur-[5px]">      
                <MenuMob />
                <MenuNorm />
            </nav>

           <section className="absolute sm:top-16 sm:w-36 top-12 left-12">

           <img 
                className="w-96"
                src={logo} 
                alt="logo" 
            />

            <article>
                <h2 className="uppercase font-bold text-[25px]">About the game</h2>

                <section className="w-[25.5%] sm:w-auto">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestiae, eos ipsam beatae vitae atque! Repudiandae, voluptatem facere. Numquam accusamus vel laboriosam consequatur dignissimos necessitatibus aperiam rerum dolor, adipisci perspiciatis.</p>    
                </section>    
            
            </article>    

           </section>

        </article>

    </section>
  )
}

export default Header
