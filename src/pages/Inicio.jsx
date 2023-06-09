// import { useState } from "react";
import { useState } from "react";
import Form from "../compoments/Form/Form";
import MyProducts from "../compoments/MyProducts/MyProducts";
import SectionCategories from "../compoments/Categories/SectionCategories";
import Header_img from "../compoments/Header/Header_img";

function Inicio() {
  const [showForm, updateShow] = useState(false);
  const [products, setProducts] = useState([]);

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

  // Registrar un nuevo producto
  const createProduct = (product) => {
    console.log("producto nuevo", product);
    setProducts([...products, product]);
  };

  return (
    <>
      <Header_img />
      {showForm === true ? (
        <Form
          categories={categories.map((category) => category.titulo)}
          createProduct={createProduct}
        />
      ) : (
        <div></div>
      )}

      <MyProducts changeShow={changeShow} />
      {categories.map((category) => {
        return <SectionCategories category={category} key={category.titulo} />;
      })}
    </>
  );
}

export default Inicio;
