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
    const [showMenu, setShowMenu] = useState(false);
    const pathname = window.location.pathname;

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };

    return (
      <nav className="w-full bg-transparent backdrop-blur-[5px] md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:hidden">
        <div className="flex w-[220px] items-center justify-between py-[2px] px-[20px]">
          <img className="w-[30%] h-12" src={logo} alt="logo" />
          <FaBars onClick={toggleMenu} />
        </div>

        {showMenu && (
          <article className="mt-5 font-bold sm:flex items-start justify-end w-full flex-col lg:hidden md:hidden 2lx:hidden xl:hidden">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`list-none mt-5 ${
                  item.key === pathname ? "bg-gray-800 text-gray-400 rounded-md px-5" : ""
                }`}
              >
                <Link to={item.key}>{item.title}</Link>
              </li>
            ))}
          </article>
        )}
      </nav>
    );
  };

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
    <nav className="fixed z-50 top-6 left-1/2 font-bold  -translate-x-1/2 flex items-center justify-between py-[2px] px-[20px] bg-transparent backdrop-blur-[5px]">      
        <MenuMob />
        <MenuNorm />
    </nav>
  )
}

export default NavBar
