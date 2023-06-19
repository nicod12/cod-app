import { useState } from "react"


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

const Header = () => {
   
    const [showMenu, setShowMenu] = useState("sm:hidden")

  return (
    <section>
        <div className="h-[800px] w-full bg-red-400">
            {/* <img src="" alt="" /> */}
            <nav className="relative top-6 w-[50%] my-0 mx-auto flex items-center justify-between py-1 px-[20px] bg-transparent backdrop-blur-md">
                <h2>logo</h2>
                <div className="flex items-center">
                    <ul className="flex gap-4">
                        <li>Home</li>
                        <li>About</li>
                        <li>Games</li>
                    </ul>
                </div>
            </nav>
        </div>
    </section>
  )
}

export default Header
