import FormInputs from "../FormInputs/FormInputs.jsx";
import '../FormInputs/FormInputs.css'

function Form() {
  return (
    <>
      <section className="form">
        <form action="">
          <h2>Ingresar un nuevo producto</h2>
          <FormInputs titulo='Nombre' placeholder='Ingresar nombre del producto'/>
          <FormInputs titulo='Precio' placeholder='Ingresar precio'/>
          <FormInputs titulo='Foto' placeholder='Ingresar URL'/>
        </form>
      </section>
    </>
  );
}

export default Form;
