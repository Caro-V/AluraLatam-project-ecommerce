// import { useState } from "react";
import { useState } from "react";
import "./App.css";
import Header from "./compoments/Header/Header.jsx";
import Form from "./compoments/Form/Form";
import MyProducts from "./compoments/MyProducts/MyProducts";
import SectionCategories from "./compoments/Categories/SectionCategories";

function App() {
  const [showForm, updateShow] = useState(false);



  const changeShow = () => {
    updateShow(!showForm);
  };

  return (
    <>
      <Header />
      {showForm === true ? <Form /> : <div></div>}

      <MyProducts changeShow={changeShow} />
      <SectionCategories />
      <SectionCategories />
      <SectionCategories />
      <SectionCategories />
    </>
  );
}

export default App;
