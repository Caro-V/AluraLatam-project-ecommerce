/* eslint-disable react/prop-types */
import "../MyProducts/MyProducts.css";

function MyProducts(props) {
  //     const [show, updateShow] = useState(true)

  //   const handleClick = () => {
  //     console.log('mostrar elemento')
  //   };

  return (
    <>
      <section className="productsSection">
        <h3 className="title">Productos</h3>
        <img
          onClick={props.changeShow}
          src="/img/add.png"
          alt="ícono para agregar productos"
        />
      </section>
    </>
  );
}

export default MyProducts;
