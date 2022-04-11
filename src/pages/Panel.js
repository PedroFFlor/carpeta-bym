import Footer from "../components/Footer";
import Navigator from "../components/Navigator";
import Test from "../components/Test";


function Panel() {
    return (
      <>
        <Navigator />
        <>
          <button>Importar desde archivo</button>
          Tengo que crear un componente para el titulo del rubro y mostrarlo cada vez que pase por primera vez<br/>
          por el rubro.
          Para mostrar la carpeta tengo que hacer un array donde cada objeto tiene de propiedades:<br/>
          cod(id), descripcion, foto y rubro
          recorro el arreglo ordenado por rubro<br/>
          o.. hacer un array por rubro, e ir agregando o modificando objetos del mismo, si no existe el el arreglo que lo cree
          o.. que todo eso se haga importando un archivo, o de una base
        </>
        <Test/>
        <Footer/>
      </>
    );
}
  
export default Panel;