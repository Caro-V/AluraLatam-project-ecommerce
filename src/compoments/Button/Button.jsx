/* eslint-disable react/prop-types */
import "../Button/Button.css";

function Button(props) {
  return (
    <>
      <button className="btnCrear">
        {props.texto}
      </button>
    </>
  );
}

export default Button;
