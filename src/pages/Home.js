
import Catalogue from "../components/Catalogue";
import Footer from "../components/Footer";
import Navigator from "../components/Navigator";
import ProdJson from "../components/ProdJson";


function Home() {
    return (
      <>
        <Navigator />
        <ProdJson/>
        <Catalogue/>
        <Footer/>
      </>
    );
}
  
export default Home;