import { useEffect, useState } from "react";

function ProductosJson() {

  const [prodJson, setProdJson] = useState([]);

  useEffect(() => {
    fetch('\server\Productos_00002.json')
    .then(response => response.json())
    .then(datos => {
      setProdJson(datos)
    })
  },[])
  return prodJson
}
export default ProductosJson;
