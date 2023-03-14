import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { cantidadProductos} from '../../utils/carritoSlice';
import { cantidadFavoritos } from "../../utils/favoritoSlice"
import { useState } from "react"

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const count = useSelector(cantidadProductos);
  const countFav = useSelector(cantidadFavoritos);

  return (
    <header className="header bg-white fixed-top">
      <div className="container px-lg-3">
        <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0 "><Link to="/" className="navbar-brand"><span className="fw-bold text-uppercase text-dark">Boutique</span></Link>
          <button className="navbar-toggler navbar-toggler-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setIsMenuOpen(!isMenuOpen)}><span className="navbar-toggler-icon"></span></button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/" onClick={() => setIsMenuOpen(!isMenuOpen)}>Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="productos/1" onClick={() => setIsMenuOpen(!isMenuOpen)}>Productos</Link>
              </li>
              <li className="nav-item dropdown"><Link className="nav-link dropdown-toggle" id="pagesDropdown" href="/" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categorias</Link>
                <div className="dropdown-menu mt-3 shadow-sm" aria-labelledby="pagesDropdown">
                  <Link className="dropdown-item border-0 transition-link"  to="/productos/indumentaria" onClick={() => setIsMenuOpen(!isMenuOpen)}>Indumentaria</Link>
                  <Link className="dropdown-item border-0 transition-link"  to="/productos/zapatillas" onClick={() => setIsMenuOpen(!isMenuOpen)}>Zapatillas</Link>
                  <Link className="dropdown-item border-0 transition-link"  to="/productos/relojes" onClick={() => setIsMenuOpen(!isMenuOpen)}>Relojes</Link>
                  <Link className="dropdown-item border-0 transition-link"  to="/productos/electronica" onClick={() => setIsMenuOpen(!isMenuOpen)}>Electronica</Link>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">               
              <li className="nav-item"><Link className="nav-link" to="carrito"  onClick={() => setIsMenuOpen(!isMenuOpen)}> <FontAwesomeIcon icon={faCartShopping} /> Carrito<small className="text-gray fw-normal">({count})</small></Link></li>
              <li className="nav-item"><Link className="nav-link"  to="favoritos" onClick={() => setIsMenuOpen(!isMenuOpen)}> <FontAwesomeIcon icon={faHeart} /><small className="text-gray fw-normal"> ({countFav})</small></Link></li>
              <li className="nav-item"><Link className="nav-link" to="ingresar"  onClick={() => setIsMenuOpen(!isMenuOpen)}><FontAwesomeIcon icon={faUser}/> Ingresar</Link></li>
            </ul>
          </div>
        </nav>
      </div>

    </header>
  )
}

export default NavBar