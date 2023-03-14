import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faExpand } from '@fortawesome/free-solid-svg-icons'
import { Modal } from './Modal'
import { useState } from 'react'
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux'
import { productoAdded } from '../../utils/carritoSlice'
import { favoritoAdded } from '../../utils/favoritoSlice'
import { detailAdded } from '../../utils/detailSlice'
import toast, { Toaster } from 'react-hot-toast';


export const ProductoCard = (props) => {

  const { titulo, precio, url, id, descripcion, categoria,tag } = props;
  const [showModal, setShowModal] = useState(false);
  const cuadrilla = useSelector(state => state.grid.value)
  const dispatch = useDispatch()
  const [mostrarToast, setMostrarToast] = useState(false)
  const mensajeFavoritos = 'Producto agregado a favoritos!'
  const mensajeCarrito = 'Producto agregado al carrito!'
    
  const handleComprar = () => {
    dispatch(
      productoAdded({
        titulo,
        precio,
        url,
        id,
        value:1
      })
    )
    toast.success(mensajeCarrito)
    setMostrarToast(true);
    setTimeout(function(){setMostrarToast(false)} , 2000);
  }
  const handleFav = () => {
    dispatch(
      favoritoAdded({
        titulo,
        precio,
        url,
        id
      })
    )
    toast.success(mensajeFavoritos)
    setMostrarToast(true);
    setTimeout(function(){setMostrarToast(false)} , 2000);

  }
  const handleDetail = () => {
    dispatch(
      detailAdded({
        titulo,
        precio,
        url,
        id,
        descripcion,
        categoria,
        tag
      })
    )
  }

  let content = <>
    <div className="product text-center">
      <div className="position-relative mb-3">
        <Link className="d-block" to={`/detail/${id}`} onClick={handleDetail}><img className="img-fluid w-100" src={`/images/${id}.png`} alt={titulo}/></Link>
        <div className="product-overlay">
          <ul className="mb-0 list-inline">
            <li className="list-inline-item m-0 p-0"><button className="btn btn-sm btn-outline-dark rounded-0" onClick={handleFav}><FontAwesomeIcon icon={faHeart}/></button></li>
            <li className="list-inline-item m-0 p-0"><Link  className="btn btn-sm btn-dark rounded-0" onClick={handleComprar}>Comprar</Link></li>
            <li className="list-inline-item me-0"><Link className="btn btn-sm btn-outline-dark rounded-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop"  onClick={() => setShowModal(true)}><FontAwesomeIcon icon={faExpand}/></Link></li>
          </ul>
        </div>
      </div>
      <h6> <Link className="reset-anchor" to={`/detail/${id}`} onClick={handleDetail}>{titulo}</Link></h6>
      <p className="small text-muted">$ {precio}</p>
    </div>

    {showModal && (
      <Modal
        titulo={titulo}
        precio={precio}
        url={url}
        key = {id}
        id = {id}
        onClose={() => setShowModal(false)}
      />
    )}
    {mostrarToast && <Toaster position="bottom-right" toastOptions={{duration:2000}}/>}

  </>

  if(cuadrilla === 'large'){
    return(
      <div className="col-lg-4 col-sm-6">
        {content}
      </div>

    )
  }
  
  return(
    <div className="col-lg-3 col-sm-6">
      {content}
    </div>
  )
  
}