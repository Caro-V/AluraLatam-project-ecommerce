/* eslint-disable react/prop-types */
import { useState } from "react";
import "../Form/Form.css";
import FormInputs from "../FormInputs/FormInputs.jsx";
import "../FormInputs/FormInputs.css";
import OptionsList from "../OptionsList/OptionsList.jsx";
import "../OptionsList/OptionsList.css";
import Button from "../Button/Button.jsx";

function Form(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const {createProduct} = props

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("manejar envio");

    let infoForm = {
      name,
      price,
      photo,
      description,
      category
    };
    createProduct(infoForm);
  };

  return (
    <>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <h2>Ingresar un nuevo producto</h2>
          <FormInputs
            titulo="Nombre"
            placeholder="Ingresar nombre del producto"
            required
            value={name}
            setValue={setName}
          />
          <FormInputs
            titulo="Precio"
            placeholder="Ingresar precio"
            required
            value={price}
            setValue={setPrice}
          />
          <FormInputs
            titulo="Foto"
            placeholder="Ingresar URL"
            required
            value={photo}
            setValue={setPhoto}
          />
          <FormInputs
            titulo="Descripción"
            placeholder="Ingresar una breve descripción del producto"
            required
            value={description}
            setValue={setDescription}
          />
          <OptionsList required value={category} setCategory={setCategory} categories={props.categories} />
          <Button texto="Crear producto" />
        </form>
      </section>
    </>
  );
}

export default Form;
