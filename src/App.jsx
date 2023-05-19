// import { useState } from "react";
import { useState } from "react";
import "./App.css";
import Header from "./compoments/Header/Header.jsx";
import Form from "./compoments/Form/Form";
import MyProducts from "./compoments/MyProducts/MyProducts";
import SectionCategories from "./compoments/Categories/SectionCategories";

function App() {
  const [showForm, updateShow] = useState(false);

  const categories = [
    {
      titulo: "Tortas Decoradas",
      colorPrimario: "#D8B3C1",
      colorSecundario: "#F6C4D7",
    },
    {
      titulo: "Bocaditos",
      colorPrimario: "#D4D8B3",
      colorSecundario: "#F0F6C4",
    },
    {
      titulo: "Postres",
      colorPrimario: "#B3D8CA",
      colorSecundario: "#C4F6E3",
    },
    {
      titulo: "Queques",
      colorPrimario: "#B7B3D8",
      colorSecundario: "#CAC4F6",
    },
  ];

  const changeShow = () => {
    updateShow(!showForm);
  };

  return (
    <>
      <Header />
      {showForm === true ? <Form categories={categories.map((category)=> category.titulo)}/> : <div></div>}

      <MyProducts changeShow={changeShow} />
      {categories.map((category) => {
        return <SectionCategories category={category} key={category.titulo}/>;
      })}
    </>
  );
}

export default App;
