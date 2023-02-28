import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faGift } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from "react-redux"
import { Link} from "react-router-dom"
import { todosProductos,cantidadProductos, productoDeleted,increment,decrement,selectCount,valorTotal  } from "../../utils/carritoSlice"

const Producto = ({producto})  => {
  
  const dispatch = useDispatch()
  const count = useSelector(state => selectCount(state, producto.id));
  const totalParcial = () => producto.precio * count;
  const totalProducto = totalParcial(producto.precio, count);

  return(
    <tr>
      <th className="ps-0 py-3 border-light" scope="row">
        <div className="d-flex align-items-center"><a className="reset-anchor d-block animsition-link" href="detail.html"><img src={`/images/${producto.id}.png`} alt="..." width="70"/></a>
          <div className="ms-3"><strong className="h6"><a className="reset-anchor animsition-link" href="detail.html">{producto.titulo}</a></strong></div>
        </div>
      </th>
      <td className="p-3 align-middle border-light">
        <p className="mb-0 small">$ {producto.precio}</p>
      </td>
      <td className="p-3 align-middle border-light">
        <div className="border d-flex align-items-center justify-content-between px-3"><span className="small text-uppercase text-gray headings-font-family">Cantidad</span>
          <div className="quantity">
            <button className="dec-btn p-0"><FontAwesomeIcon icon={faCaretLeft} onClick={() => dispatch(decrement(producto.id))}/></button>
            <span>{count}</span>
            <button className="inc-btn p-0"><FontAwesomeIcon icon={faCaretRight} onClick={() => dispatch(increment(producto.id))}/></button>
          </div>
        </div>
      </td>
      <td className="p-3 align-middle border-light">
        <p className="mb-0 small">${totalProducto}</p>
      </td>
      <td className="p-3 align-middle border-light"><button className="btn reset-anchor rounded-0"><FontAwesomeIcon icon={faTrashCan} onClick={() => dispatch(productoDeleted(producto.id))}/></button></td>
    </tr>
  )
}


const Carrito = () => {
  const productos = useSelector(todosProductos)
  const cantidad = useSelector(cantidadProductos)
  const totalCompra = useSelector(valorTotal) 
  const subTotal = (totalCompra * 0.79).toFixed(2)
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
                <h1 className="h2 text-uppercase mb-0">Tu Carrito</h1>
              </div>
              <div className="col-lg-6 text-lg-end">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
                    <li className="breadcrumb-item"><a className="text-dark" href="index.html">Inicio</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Carrito</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {vacio? <div className="my-5">
          <h5>El carrito esta vacio! Vuelve a la tienda para elegir algun producto</h5>
          <div className="col-md-6 mb-3 mb-md-0 text-md-start"><Link className="btn btn-link p-0 text-dark btn-sm" to="/productos/1" ><FontAwesomeIcon icon={faArrowLeft}/>Volver a la Tienda</Link></div>
          </div>: 
          <section className="py-5">
            <h2 className="h5 text-uppercase mb-4">Shopping cart</h2>
            <div className="row">
              <div className="col-lg-8 mb-4 mb-lg-0">
                {/* LISTA DE PRODUCTOS */}
                <div className="table-responsive mb-4">
                  <table className="table text-nowrap">
                    <thead className="bg-light">
                      <tr>
                        <th className="border-0 p-3" scope="col"> <strong className="text-sm text-uppercase">Producto</strong></th>
                        <th className="border-0 p-3" scope="col"> <strong className="text-sm text-uppercase">Precio</strong></th>
                        <th className="border-0 p-3" scope="col"> <strong className="text-sm text-uppercase">Cantidad</strong></th>
                        <th className="border-0 p-3" scope="col"> <strong className="text-sm text-uppercase">Total</strong></th>
                        <th className="border-0 p-3" scope="col"> <strong className="text-sm text-uppercase"></strong></th>
                      </tr>
                    </thead>
                    <tbody className="border-0">
                      {content}
                    </tbody>
                  </table>
                </div>
                {/* CART NAV */}
                <div className="bg-light px-4 py-3">
                  <div className="row align-items-center text-center">
                    <div className="col-md-6 mb-3 mb-md-0 text-md-start"><Link className="btn btn-link p-0 text-dark btn-sm" to="/productos/1" ><FontAwesomeIcon icon={faArrowLeft}/> Seguir comprando</Link></div>
                    <div className="col-md-6 text-md-end"><Link className="btn btn-outline-dark btn-sm rounded-0" to="checkout" >Terminar compra <FontAwesomeIcon icon={faArrowRight}/></Link></div>
                  </div>
                </div>
              </div>
              {/* <ORDER TOTAL */}
              <div className="col-lg-4">
                <div className="card border-0 rounded-0 p-lg-4 bg-light">
                  <div className="card-body">
                    <h5 className="text-uppercase mb-4">Compra Total</h5>
                    <ul className="list-unstyled mb-0">
                      <li className="d-flex align-items-center justify-content-between"><strong className="text-uppercase small font-weight-bold">Subtotal</strong><span className="text-muted small">$ {subTotal}</span></li>
                      <li className="border-bottom my-2"></li>
                      <li className="d-flex align-items-center justify-content-between mb-4"><strong className="text-uppercase small font-weight-bold">Total</strong><span>$ {totalCompra}</span></li>
                      <li>
                        <form action="#">
                          <div className="input-group mb-0">
                            <input className="form-control" type="text" placeholder="Tengo un cupon!"/>
                            <button className="btn btn-dark btn-sm w-100" type="submit"> <FontAwesomeIcon icon={faGift}/> Aplicar cupon</button>
                          </div>
                        </form>
                      </li>
                    </ul>
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

export default Carrito
