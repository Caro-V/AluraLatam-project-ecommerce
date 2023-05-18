/* eslint-disable react/prop-types */
import "../OptionsList/OptionsList.css";

function OptionsList(props) {
  const categories = ["Tortas decoradas", "Bocaditos", "Postres", "Queques"];

  const handleChange = (e) => {
    console.log("cambio", e.target.value);
    props.setCategory(e.target.value);
  };

  return (
    <>
      <div className="optionList">
        <label htmlFor="">Categorías</label>
        <select name="" id="" value={props.value} onChange={handleChange}>
          <option value="" disabled defaultValue="" hidden>
            Elegir una categoría
          </option>
          {categories.map((category, index) => {
            return (
              <option required={props.required} key={index} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}

export default OptionsList;
