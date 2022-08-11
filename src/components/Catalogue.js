
function Catalogue() {
  const products = [
    {
      id:310101,
      nombre:"9 de oro clasica",
      ruta:"img/310101.jpg",
      rubro:"Galletitas"
    },{
      id:310102,
      nombre:"9 de oro azucarada",
      ruta:"img/310101.jpg",
      rubro:"Galletitas"
    },{	
      id:30101,
      nombre:"Chacabuco harina comun",
      ruta:"img/310101.jpg",
      rubro:"Harinas"
    },{
      id:3762,
      nombre:"asdasd",
      ruta:"img/310101.jpg",
      rubro:"Hogar"
    },{
      id:3764,
      nombre:"porducto2papapap",
      ruta:"img/310101.jpg",
      rubro:"Harinas"
    },{
      id:37321,
      nombre:"porducto2lellelele",
      ruta:"img/310101.jpg",
      rubro:"Aceites"
    },{
      id:1231231,
      nombre:"sadasdasdasde",
      ruta:"img/310101.jpg",
      rubro:"Hogar"
    },{
      id:123122431,
      nombre:"sadasdasdasde",
      ruta:"img/310101.jpg",
      rubro:"Hogar"
    },{
      id:123123423231,
      nombre:"sadasdasdasde",
      ruta:"img/310101.jpg",
      rubro:"Hogar"
    },{
      id:1231234234231,
      nombre:"sadasdasdasde",
      ruta:"img/310101.jpg",
      rubro:"Hogar"
    },{
      id:3,
      nombre:"sadasdasdasde",
      ruta:"img/310101.jpg",
      rubro:"Hogar"
    },{
      id:1231423231,
      nombre:"sadasdasdasde",
      ruta:"img/310101.jpg",
      rubro:"Hogar"
    },{
      id:1231234231,
      nombre:"sadasdasdasde",
      ruta:"img/310101.jpg",
      rubro:"Hogar"
    },{
      id:1231443231,
      nombre:"sadasdasdasde",
      ruta:"img/310101.jpg",
      rubro:"Hogar"
    },{
      id:1231626231,
      nombre:"sadasdasdasde",
      ruta:"img/310101.jpg",
      rubro:"Hogar"
    }];

    const rubros = products.reduce((allRubros,producto) => {      //el array.from inicia y forma un array con el 2do parametro
      return Array.from(new Set([...allRubros, producto.rubro]));//devuelve un arreglo con todos los rubros sin repetir de todos los objetos del array
    },[]);                                                        //el set va poniendo el 2do parametro en el array son duplicados
  

    return (
        <article className="catalogue">
          {         
            rubros.map((rub,index) =>{
              return (
                <section className="rubro" key={index}> 
                  <div className="rubro__tittle"><h2>{rub}</h2></div>  
                  <div className="image-container">
                    {
                      products.map(item => {
                        return item.rubro == rub && (
                          <div className="image-container__flex-item"> 
                            <div className="file_img"><img src="img/9 de oro.jpg"/></div>
                            <div className="tittle-img">{item.nombre}</div>
                          </div>
                        )
                      })
                    }
                  </div>
                </section>
              )
            })
          }
        </article>
    );
}


export default Catalogue;