import { useState, useEffect } from "react";
import "../compoments/Producto/Producto.css";
import { useParams, useNavigate } from "react-router-dom";
import { buscar } from "../api/api";

function SinglePost() {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const navigate = useNavigate()
useEffect(() => {
buscar(`/productos/${id}`, setPost).catch(() => {
    navigate("/not-found")
})
}, [id])
  return (
    <>
      <div className="producto">
        <div className="encabezado">
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <h3>{post.categoria}</h3>
          <h4>{post.nombre}</h4>
          <h5>{post.precio}</h5>
          <h5>{post.descripcion}</h5>
        </div>
      </div>
    </>
  );
}

export default SinglePost;
