import NavBar from "../navbar/NavBar"


const Header = () => {
    const logo = "https://i.postimg.cc/wTdy2tWb/logoW.png"
    
    const imgBg = "https://i.postimg.cc/MZ3DHtMp/cod.png"


  return (
    <section className="relative" >
        <article className="relative sm:h-600px] h-[800px] w-full xl:text-[20px]">
            <img 
                className="bg-cover bg-no-repeat bg-center bg-fixed sm:h-[800px] h-[800px] w-full"
                src={imgBg} 
                alt="imgBG" 
            /> 

           <NavBar /> 

           <section className="absolute sm:top-16 sm:w-36 top-12 left-12">

           <img 
                className="w-96"
                src={logo} 
                alt="logo" 
            />

            <article>
                <h2 className="uppercase font-bold text-[25px]">About the game</h2>

                <section className="w-[25.5%] sm:text-[13px] mt-6 sm:w-auto">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestiae, eos ipsam beatae vitae atque! Repudiandae, voluptatem facere. Numquam accusamus vel laboriosam consequatur dignissimos necessitatibus aperiam rerum dolor, adipisci perspiciatis.</p>    
                </section>    
            
            </article>    

           </section>

        </article>

    </section>
  )
}

export default Header
