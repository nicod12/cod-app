import { useEffect } from "react";
import { Layout } from "../../components";


const HomePage = () => {

  useEffect(() => {;
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <main>
        contenido
      </main>
    </Layout>
  )
}

export default HomePage;