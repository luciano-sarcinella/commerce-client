import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from "react-redux"
import { Link} from "react-router-dom"
import { todosFavoritos, cantidadFavoritos, favoritoDeleted } from '../../utils/favoritoSlice'
import { productoAdded } from '../../utils/carritoSlice'

const Producto = ({producto})  => { 
  const dispatch = useDispatch()

  const handleComprar = () => {
    dispatch(
      productoAdded({
       ...producto,
        value:1
      })
    )
  }

  return(
    <tr>
      <th className="ps-0 py-3 border-light" scope="row">
        <div className="d-flex align-items-center"><a className="reset-anchor d-block animsition-link" href="detail.html"><img src={`/images/${producto.id}.png`} alt="..." width="70"/></a>
          <div className="ms-3"><strong className="h6"><a className="reset-anchor animsition-link" href="detail.html">{producto.titulo}</a></strong></div>
        </div>
      </th>
      <td className="p-3 align-middle border-light">
      <div className="col-md-6 text-md-end"><Link className="btn btn-outline-dark btn-sm rounded-0"  onClick={handleComprar}>Agregar al Carrito</Link></div>
      </td>
      <td className="p-3 align-middle border-light"><button className="btn reset-anchor rounded-0"><FontAwesomeIcon icon={faTrashCan} onClick={() => dispatch(favoritoDeleted(producto.id))}/></button></td>
    </tr>
  )
}


const Favoritos = () => {
  const productos = useSelector(todosFavoritos)
  const cantidad = useSelector(cantidadFavoritos)
//   const totalCompra = useSelector(valorTotal) 
//   const subTotal = (totalCompra * 0.79).toFixed(2)
  let vacio
  if (cantidad === 0 ) {
    vacio = true
  } else {
    vacio = false
  }
  const  content = productos.map(producto => (
    <Producto key={producto.id} producto={producto} />

  ))

  return (
    <div className="page-holder py-5" >
      <div className="container">
        {/* ENCABEZADO */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
              <div className="col-lg-6">
                <h1 className="h2 text-uppercase mb-0">favoritos</h1>
              </div>
              <div className="col-lg-6 text-lg-end">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
                    <li className="breadcrumb-item"><a className="text-dark" href="index.html">Inicio</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Favoritos</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {vacio? <div className="my-5">
          <h5>No hay favoritos guardados! Vuelve a la tienda para cumplir tus deseos.</h5>
          <div className="col-md-6 mb-3 mb-md-0 text-md-start"><Link className="btn btn-link p-0 text-dark btn-sm" to="/productos/1" ><FontAwesomeIcon icon={faArrowLeft}/>Volver a la Tienda</Link></div>
          </div>: 
          <section className="py-5">
            <div className="row">
              <div className="col-lg-12 mb-4 mb-lg-0">
                {/* LISTA DE PRODUCTOS */}
                <div className="table-responsive mb-4">
                  <table className="table text-nowrap">
                    <tbody className="border-0">
                      {content}
                    </tbody>
                  </table>
                </div>
                {/* CART NAV */}
                <div className="bg-light px-4 py-3">
                  <div className="row align-items-center text-center">
                    <div className="col-md-6 mb-3 mb-md-0 text-md-start"><Link className="btn btn-link p-0 text-dark btn-sm" to="/productos/1" ><FontAwesomeIcon icon={faArrowLeft}/> Seguir comprando</Link></div>
                    <div className="col-md-6 text-md-end"><Link className="btn btn-outline-dark btn-sm rounded-0" to="carrito" >Ir al Carrito <FontAwesomeIcon icon={faArrowRight}/></Link></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        }
      </div>
    </div>
  )
}

export default Favoritos