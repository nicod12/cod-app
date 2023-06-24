
interface FooterProps {
  className: string;
}


const Footer:React.FC<FooterProps> = ({ className }) => {
  return (

      <footer className={className}>
        <article className=" sm:text-[10px] sm:w-[60%] my-0 mx-auto p-2  text-white">
          <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam libero voluptate error explicabo labore tempora ab harum recusandae provident cupiditate sunt ipsa, pariatur accusantium autem beatae nostrum.</p>
        </article>
      </footer>

  )
}

export default Footer;
