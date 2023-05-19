/* eslint-disable react/prop-types */
import "../Categories/SectionCategories.css";
import Producto from "../Producto/Producto";

function SectionCategories(props) {
  // Opción con Destructuración, se agregaría solo colorSecundario a las llaves
  // const {colorSecundario, colorPrimario, titulo } = props.category

  return (
    <>
      <section
        className="category"
        style={{ backgroundColor: props.category.colorSecundario }}
      >
        <h3 style={{ borderColor: props.category.colorPrimario }}>
          {props.category.titulo}
        </h3>
        <div className="producto">
          <Producto/>
          <Producto/>
        </div>
      </section>
    </>
  );
}

export default SectionCategories;
