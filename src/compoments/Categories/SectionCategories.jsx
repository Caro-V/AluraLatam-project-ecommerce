/* eslint-disable react/prop-types */
import "../Categories/SectionCategories.css";
import Producto from "../Producto/Producto";

function SectionCategories(props) {
  // Opción con Destructuración, se agregaría solo colorSecundario a las llaves
  // const {colorSecundario, colorPrimario, titulo } = props.category

  console.log(props);
  return (
    <>
      <section
        className="category"
        style={{ backgroundColor: props.category.colorSecundario }}
      >
        <h3 style={{ borderColor: props.category.colorPrimario }}>
          {props.category.titulo}
        </h3>

        <div className="productos">
          {/* <Producto colorPrimario={props.colorPrimario} /> */}
          <Producto url={"/productos"}/>
        </div>
      </section>
    </>
  );
}

export default SectionCategories;
