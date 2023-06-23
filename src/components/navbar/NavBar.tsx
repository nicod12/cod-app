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

const logo = "https://i.postimg.cc/wTdy2tWb/logoW.png"

const MenuMob = () => {
    const [showMenu, setShowMenu] = useState("sm:hidden")
    const pathname = window.location.pathname;
    return(

        <div className="my-0 mx-auto text-[20px] flex items-center gap-40 md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:hidden">
            <img
                className="w-[100px] h-12 " 
                src={logo} 
                alt="logo" 
            />
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



const NavBar = () => {
  return (
    <nav className="fixed z-50 top-6 left-1/2   -translate-x-1/2 flex items-center justify-between py-[2px] px-[20px] bg-transparent backdrop-blur-[5px]">      
        <MenuMob />
        <MenuNorm />
    </nav>
  )
}

export default NavBar
