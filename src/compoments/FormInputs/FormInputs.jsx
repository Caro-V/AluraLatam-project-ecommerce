/* eslint-disable react/prop-types */

import "../FormInputs/FormInputs.css";

function FormInputs(props) {

  const handleChange = (e) => {
    props.setValue(e.target.value);
  };
  return (
    <>
      <div className="formInputs">
        <label>{props.titulo}</label>
        <input
          placeholder={props.placeholder}
          required={props.required}
          value={props.value}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default FormInputs;
