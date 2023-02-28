import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Carrito from './components/Carrito/Carrito';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';
import Productos from './components/Productos/ProductosList';
import Detail from './components/Detail/Detail';
import Favoritos from './components/Favoritos/Favoritos';
import ScrollToTop from './utils/ScrollToTop';


function App() {
  return (
    <BrowserRouter>
        <ScrollToTop />
        <NavBar/>  
        <Routes>
          <Route path="/" element={<Navigate replace to="/inicio" />} />
          <Route path="/inicio" element ={<Home/>}/>
          <Route path="/productos/:pageId" element ={<Productos/>}/>
          <Route path="/detail/:pageId" element ={<Detail/>}/>
          <Route path="/carrito" element ={<Carrito/>}/>
          <Route path="/productos/1/carrito" element={<Navigate replace to="/carrito" />} />
          <Route path="/productos/auriculares" element={<Navigate replace to="/productos/headphones" />} />
          <Route path="/productos/hoodies" element={<Navigate replace to="/productos/buzos" />} />
          <Route path="/productos/smart" element={<Navigate replace to="/productos/smartwatch" />} />
          <Route path="/carrito/checkout" element ={<Checkout/>}/>
          <Route path="/ingresar" element ={<Login/>}/>
          <Route path="/favoritos" element ={<Favoritos/>}/>
        </Routes>
        <Footer/>

    </BrowserRouter>
  );
}

export default App;
