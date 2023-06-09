import "./App.css";
import Inicio from "./pages/Inicio";
import Clientes from "./pages/Clientes";
import Nosotros from "./pages/Nosotros";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page404 from "./pages/Page404";
import Header from "./compoments/Header/Header";
import Footer from "./compoments/Footer/Footer";
import Comprar from "./pages/Comprar";
import SinglePost from "./pages/SinglePost";
function App() {
 

  return (
    <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<Inicio/>}/>
        <Route path='/Clientes' element={<Clientes/>}/>
        <Route path='/Comprar' element={<Comprar/>}/>
        <Route path='/Nosotros' element={<Nosotros/>}/>
        <Route path='/productos/:id' element={<SinglePost/>}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>
<Footer/>
    </Router>
  );
}

export default App;
