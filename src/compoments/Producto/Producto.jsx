/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "../Producto/Producto.css";
import { buscar } from "../../api/api";
import { Link } from "react-router-dom";

function Producto({ url }) {
  // console.log(props)
  //     const {colorPrimario} = props

  //   return (
  //     <>
  //       <div className="producto">
  //         <div className="encabezado" style={{backgroundColor:colorPrimario}}>
  //           <img
  //             src="data:image/jpeg;base64,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"
  //             alt="empanada"
  //           />
  //         </div>
  //         <div className="info">
  //           <h4>Empanada</h4>
  //           <h5>Bocaditos</h5>
  //           <h5>S/.12.00</h5>
  //           <h5>Empanadas rellenas de pollo</h5>
  //         </div>
  //       </div>
  //     </>
  //   );

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    buscar(url, setPosts);
    console.log(posts);
  }),
    [url];
  return (
    <>
      <div className="contenedor">
        {posts.map((post) => {
          const { id, nombre, precio, img } = post;
          return (
            <>
              <div className="producto">
                <Link to={`/productos/${id}`} key={id}>
                  <div className="encabezado">
                    <img src={img} alt="" />
                  </div>
                  <div className="info">
                    <h4>{nombre}</h4>
                    <h5>{precio}</h5>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Producto;
