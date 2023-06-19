
import  React, { ReactNode, useEffect } from "react";
import { Footer, Header } from "..";

type ChildrenProps = {
    children: ReactNode
}


const Layout: React.FC<ChildrenProps> = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <Header />
        <section className="font-mont">{children}</section>
      <Footer />
    </section>
  );
};

export default Layout;