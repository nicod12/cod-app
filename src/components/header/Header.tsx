import { useEffect, useState } from "react"
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

const MenuMob = () => {
    return(

        <div className="my-0 mx-auto flex items-center gap-40 md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:hidden">
            <h2>logo</h2>
            <FaBars/>
         </div>
    )
}


const MenuNorm = () => {
    return(
        <div className="sm:hidden flex gap-[400px] my-0 mx-auto justify-between">
         <h2>logo</h2>
         <div className="flex gap-8 items-center">
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
        </div>
        </div>
    )
}

const Header = () => {
   
 
    const [showMenu, setShowMenu] = useState("sm:hidden")



  return (
    <section>
        <div className="h-[800px] w-full bg-red-400">
            {/* <img src="" alt="" /> */}
            <nav className="relative top-6 w-[50%] my-0 mx-auto flex items-center justify-between py-1 px-[20px] bg-transparent backdrop-blur-md">      
                <MenuMob />
                <MenuNorm />
            </nav>
        </div>
    </section>
  )
}

export default Header
