import { Link } from "react-router-dom";


function Test() {
  const products = [
    {
      id: 30201,
      name: "Chacabuco Harina 0000 x 1kg",
      rutaimg: "#",
      rubro: "Harinas",
    },
    {
      id: 310101,
      name: "9 de oro clasica x 200grs",
      rutaimg: "#",
      rubro: "Galletitas",
    },
    {
      id: 30101,
      name: "Chacabuco Harina x 1 kg",
      rutaimg: "#",
      rubro: "Harinas",
    },
    {
      id: 30501,
      name: "Pureza harina p/pizza x 1kg",
      rutaimg: "#",
      rubro: "Harinas",
    },
    {
      id: 400001,
      name: "Branca Fernet x 1l",
      rutaimg: "#",
      rubro: "Bebidas"
    },
    {
      id: 440101,
      name: "Fresh agua savorizada pomelo x 1,5l",
      rutaimg: "#",
      rubro: "Bebidas",
    },
    {
      id: 310102,
      name: "9 de oro azucaradas x 200grs",
      rutaimg: "#",
      rubro: "Galletitas",
    },
  ];
    return (
      <>
        {
          products.map((item) => {
            return(
              <>
                <span> itasdem:{item} </span>
              </>
            )
          })
        }
      </>
    );
}
  
export default Test;