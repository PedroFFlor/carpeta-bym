import Catalogue from "../components/Catalogue";
import Footer from "../components/Footer";
import Navigator from "../components/Navigator";


function Home() {
    return (
      <>
        <Navigator />
        <article className="catalogue">
          <section className="rubro"> 
            <div className="rubro__tittle"><h2>Perfumeria</h2></div> 
            <div className="image-container"> 
              <div className="image-container__flex-item"> 
                <div className="file_img"><img src="img/9 de oro.jpg"/></div>
                <div className="tittle-img">Nombre producto1</div>
              </div>  
            </div>
          </section>
        </article>
        <Catalogue/>
        <Footer/>
      </>
    );
}
  
export default Home;