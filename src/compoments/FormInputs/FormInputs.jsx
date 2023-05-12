/* eslint-disable react/prop-types */


function FormInputs(props) {
    console.log('Datos', props)
  return (
    <>
    <div className="formInputs">
        <label>{props.titulo}</label>
        <input placeholder={props.placeholder}/>
    </div>
    </>
  )
}

export default FormInputs