import { ProductoCard} from './ProductoCard'
import { Spinner} from '../Spinner/Spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableCellsLarge } from '@fortawesome/free-solid-svg-icons'
import { faTableCells } from '@fortawesome/free-solid-svg-icons'
import { useGetProductosQuery } from "../../utils/apiSlice"
import { small, large } from '../../utils/gridSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux' 
import { Link, useParams } from "react-router-dom"

const ProductosList = () => {
  const dispatch = useDispatch()
  const [selected, setSelected] = useState('popularidad');
  const {pageId} = useParams()
  const pageIdAsNumber = parseInt(pageId);
  const [precioMaximo, setPrecioMaximo] = useState(1000);

  
  const { 
    data: productos = [],
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetProductosQuery(pageId)

  const [envio, setEnvio] = useState(false);
  const [llega, setLlega] = useState(false);
  const [oferta, setOferta] = useState(false);

  let listaFiltrada = productos;
  
  if (envio) {
    listaFiltrada = listaFiltrada.filter(producto => producto.sold === 1);
  }

  if (llega) {
    listaFiltrada = listaFiltrada.filter(producto => producto.new === 1);
  }

  if (oferta) {
    listaFiltrada = listaFiltrada.filter(producto => producto.sale === 1);
  }

  listaFiltrada = listaFiltrada.filter(producto => producto.precio <= precioMaximo);


  const handleChange = event => {
    setSelected(event.target.value);
  }

  const handleMaximo = (event) => {
    setPrecioMaximo(event.target.value);
  };

  let content
  if (isLoading) {
    content = <Spinner/>
  } else if (isSuccess & selected === 'popularidad' ) {
    content = listaFiltrada.map(producto =>
      <ProductoCard
        key = {producto.id} 
        id = {producto.id}
        titulo = {producto.titulo}
        descripcion = {producto.descripcion}
        precio = {producto.precio}
        categoria = {producto.categoria}
        tag = {producto.tag}
        url = {producto.url}
        new = {producto.new}
        sale = {producto.sale}
        sold = {producto.sold}
      />
    )
  } else if(isSuccess & selected === 'low-high'){
    const productosSlice = listaFiltrada.slice()
    const productosMenor = productosSlice.sort((a,b) =>a.precio -b.precio)
    content = productosMenor.map(producto =>
      <ProductoCard
        key = {producto.id} 
        id = {producto.id}
        titulo = {producto.titulo}
        descripcion = {producto.descripcion}
        precio = {producto.precio}
        categoria = {producto.categoria}
        tag = {producto.tag}
        url = {producto.url}
        new = {producto.new}
        sale = {producto.sale}
        sold = {producto.sold}
      />
    )
  } else if (isSuccess & selected === 'high-low') {
    const productosSlice = listaFiltrada.slice()
    const productosMenor = productosSlice.sort((a,b) =>b.precio -a.precio)
    content = productosMenor.map(producto => 
      <ProductoCard
        key = {producto.id} 
        id = {producto.id}
        titulo = {producto.titulo}
        descripcion = {producto.descripcion}
        precio = {producto.precio}
        categoria = {producto.categoria}
        tag = {producto.tag}
        url = {producto.url}
        new = {producto.new}
        sale = {producto.sale}
        sold = {producto.sold}
      />
    )
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }
  
  return (
    <div className="container px-lg-3 py-5">
      <div className="container">
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
              <div className="col-lg-6">
                <h1 className="h2 text-uppercase mb-0">Productos</h1>
              </div>
              <div className="col-lg-6 text-lg-end">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
                    <li className="breadcrumb-item"><Link className="text-dark" to="/">Inicio</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Productos</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container p-0">
            <div className="row">
              <div className="col-lg-3 order-2 order-lg-1">
                {/* BARRA LATERAL */}
                <h5 className="text-uppercase mb-4">Categorias</h5>
                  <div className="py-2 px-4 bg-dark text-white mb-3"><strong className="small text-uppercase fw-bold">Indumentaria</strong></div>
                  <ul className="list-unstyled small text-muted ps-lg-4 font-weight-normal">
                    <li className="mb-2"><Link className="reset-anchor" to="/productos/remeras">Remeras</Link></li>
                    <li className="mb-2"><Link className="reset-anchor" to="/productos/buzos">Buzos</Link></li>
                  </ul>
                  <div className="py-2 px-4 bg-light mb-3"><strong className="small text-uppercase fw-bold">Zapatillas</strong></div>
                  <ul className="list-unstyled small text-muted ps-lg-4 font-weight-normal">
                    <li className="mb-2"><Link className="reset-anchor" to="/productos/deportivas">Deportivas</Link></li>
                    <li className="mb-2"><Link className="reset-anchor" to="/productos/urbanas">Urbanas</Link></li>
                  </ul>
                  <div className="py-2 px-4 bg-light mb-3"><strong className="small text-uppercase fw-bold">Relojes</strong></div>
                  <ul className="list-unstyled small text-muted ps-lg-4 font-weight-normal mb-5">
                    <li className="mb-2"><Link className="reset-anchor" to="/productos/analogicos">Analogicos</Link></li>
                    <li className="mb-2"><Link className="reset-anchor" to="/productos/smartwatch">SmartWatch</Link></li>
                  </ul>
                  <div className="py-2 px-4 bg-light mb-3"><strong className="small text-uppercase fw-bold">Electronica</strong></div>
                  <ul className="list-unstyled small text-muted ps-lg-4 font-weight-normal mb-5">
                    <li className="mb-2"><Link className="reset-anchor" to="/productos/headphones">Headpones</Link></li>
                    <li className="mb-2"><Link className="reset-anchor" to="/productos/earbuds">Earbuds</Link></li>
                    <li className="mb-2"><Link className="reset-anchor" to="/productos/speakers">Speakers</Link></li>
                  </ul>

                  <h6 className="text-uppercase mb-4">Rango de Precio</h6>
                  <div className="price-range pt-4 mb-5">
                    <span className="me-2 small fw-bold text-uppercase">Mostrar hasta: ${precioMaximo}</span>
                    <input type="range" className="form-range" min="0" max="1000" id="customRange2" value={precioMaximo} onChange={handleMaximo}/>
                    <div className="row pt-2">
                      <div className="col-6"><strong className="small fw-bold text-uppercase">$0</strong></div>
                      <div className="col-6 text-end"><strong className="small fw-bold text-uppercase">$1.000</strong></div>
                    </div>
                  </div>

                  <h6 className="text-uppercase mb-3">Mostrar Solo</h6>
                  <div className="form-check mb-1">
                    <input className="form-check-input" type="checkbox" id="envio"  checked={envio} onChange={() => setEnvio(!envio)}/>
                    <label className="form-check-label" htmlFor="checkbox_2">Envio gratis</label>
                  </div>
                  <div className="form-check mb-1">
                    <input className="form-check-input" type="checkbox" id="llega" checked={llega}onChange={() => setLlega(!llega)}/>
                    <label className="form-check-label" htmlFor="checkbox_4">Llega mañana</label>
                  </div>
                  <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" id="oferta"  checked={oferta} onChange={() => setOferta(!oferta)}/>
                    <label className="form-check-label" htmlFor="checkbox_6">Ofertas de la semana</label>
                  </div>
                </div>

              <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
                <div className="row mb-3 align-items-center">
                  <div className="col-lg-6 mb-2 mb-lg-0">
                    <p className="text-sm text-muted mb-0">Mostrando 12 de 61 resultados</p>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list-inline d-flex align-items-center justify-content-lg-end mb-0"> 
                      <li className="list-inline-item text-muted me-3"><button className="btn reset-anchor rounded-0" onClick={()=>dispatch(small())}><FontAwesomeIcon icon={faTableCells}/></button></li>
                      <li className="list-inline-item text-muted me-3"><button className="btn reset-anchor rounded-0" onClick={()=>dispatch(large())}><FontAwesomeIcon icon={faTableCellsLarge}/></button></li>
                      <li className="list-inline-item">
                        <select className="selectpicker text-sm text-muted mb-0" value={selected} onChange={handleChange} data-customclass="form-control form-control-sm"> 
                          <option value="popularidad">Ordenar por </option>
                          <option value="popularidad">Popularidad</option>
                          <option value="low-high">Precio: Menor a Mayor</option>
                          <option value="high-low">Precio: Mayor a menor </option>
                        </select> 
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="row">
                  {content}
                </div>

                {pageIdAsNumber ?
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center justify-content-lg-end">
                    {pageId >1 &&<li className="page-item mx-1"><Link className="page-link" to={`/productos/${pageId - 1}`}>«</Link></li>}
                    <li className="page-item mx-1"><Link className="page-link"  to="/productos/1">1</Link></li>
                    <li className="page-item mx-1"><Link className="page-link"  to="/productos/2">2</Link></li>
                    <li className="page-item mx-1"><Link className="page-link"  to="/productos/3">3</Link></li>
                    <li className="page-item mx-1"><Link className="page-link"  to="/productos/4">4</Link></li>
                    <li className="page-item mx-1"><Link className="page-link"  to="/productos/5">5</Link></li>
                    <li className="page-item mx-1"><Link className="page-link"  to="/productos/6">6</Link></li>
                    {pageId < 6 &&<li className="page-item mx-1"><Link className="page-link" to={`/productos/${Number(pageId) + 1}`}>»</Link></li>}
                  </ul>
                </nav>
                : ''
                }
              </div>
            </div>
          </div>
        </section>
      </div>  
    </div>
  )
}
  
export default ProductosList