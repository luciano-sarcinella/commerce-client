import { Link, useParams } from "react-router-dom"
import { useSelector,useDispatch } from 'react-redux'
import { selectDetail } from "../../utils/detailSlice";
import { productoAdded } from '../../utils/carritoSlice'
import { favoritoAdded } from '../../utils/favoritoSlice'
import { useState } from "react";

const Detail = () => {
  const {pageId} =useParams()
  const id = Number(pageId)
  const producto = useSelector(state => selectDetail(state, id))
  const dispatch = useDispatch()

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleComprar = () => {
    dispatch(
      productoAdded({
        ...producto,
        value:1
      })
    )
  }
  const handleFav = () => {
    dispatch(
      favoritoAdded({
        ...producto
      })
    )
  }


  let urlCat
  let talles
  let urlTag
  if (producto.categoria === 'zapatilla') {
    urlCat = 's'
    talles = [30,31,32,33,34,35,36,37,38,39,40,41,42,43,44]
  } else if (producto.categoria === 'reloj'){
    urlCat = 'es'
    talles = ['Blanco', 'Negro', 'Plateado']
  } else {
    urlCat = ''
  }

  if (producto.categoria === 'indumentaria') {
    talles = ['XXS','XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL']
  }
  if (producto.categoria === 'electronica') {
    talles = ['Blanco', 'Negro', 'Plateado']
  }

  if(producto.tag === 'remera' || producto.tag === 'hoodie' || producto.tag === 'deportiva' || producto.tag === 'urbana' || producto.tag === 'analogico'){
    urlTag = 's'
  } else {
    urlTag = ''
  }
    
  
  return (
    <>
      <section className="py-5">
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-6">
              {/* PRODUCT SLIDER */}
            <div className="row m-sm-0">
            <div className="col-sm-2 p-sm-0 order-2 order-sm-1 mt-2 mt-sm-0 px-xl-2">
                <div className="swiper product-slider-thumbs">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide h-auto swiper-thumb-item mb-3"><img className="w-100" src={`/images/${producto.id}.png`} alt="..."/></div>
                    {/* <div className="swiper-slide h-auto swiper-thumb-item mb-3"><img className="w-100" src={`/images/${producto.id}.png`} alt="..."/></div> */}
                  </div>
                </div>
              </div>
              <div className="col-sm-10 order-1 order-sm-2">
                <div className="swiper product-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide h-auto" onClick={toggleModal}><img className="img-fluid" src={`/images/${producto.id}.png`} alt="..."/></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            {/* PRODUCT DETAILS */}
          <div className="col-lg-6">
            <ul className="list-inline mb-2 text-sm">
              <li className="list-inline-item m-0"><Link  className="reset-anchor text-uppercase" to='../../inicio' relative="path">Inicio / </Link></li>
              <li className="list-inline-item m-0 1"><Link className="reset-anchor text-uppercase" to={`../../productos/${producto.categoria}${urlCat}`} relative="path"> {producto.categoria}{urlCat} /</Link></li>
              <li className="list-inline-item m-0 1"><Link className="reset-anchor text-uppercase" relative="path" to={`../../productos/${producto.tag}${urlTag}`}>{producto.tag}{urlTag} </Link></li>
            </ul>
            <h1>{producto.titulo}</h1>
            <p className="text-muted text-decoration-line-through">${(producto.precio *1.15).toFixed(2)} </p><p className="text-muted lead">${producto.precio}</p>
            <p className="text-sm mb-4">{producto.descripcion}</p>
            <div className="row align-items-stretch mb-4">
              <div className="col-sm-5 pr-sm-0">
              <button className="btn btn-outline-dark btn-sm rounded-0"  onClick={handleFav}>Agregar a Favoritos</button>
              </div>
              <div className="col-sm-3 pl-sm-0"><button className="px-3 btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0 rounded-0" onClick={handleComprar}>Comprar</button></div>
            </div>
            <ul className="list-unstyled small d-inline-block">
              {producto.categoria ==='reloj' || producto.categoria ==='electronica' ? (
              <li className="pr-3 py-2 mb-1 bg-white"><strong className="text-uppercase mx-1">Color: </strong>
              {talles.map(talle => <button className="btn btn-outline-dark btn-sm rounded-0 m-1">{talle}</button>)}
              </li>):(
              <li className="pr-3 py-2 mb-1 bg-white"><strong className="text-uppercase mx-1">Talle: </strong>
              {talles.map(talle => <button className="btn btn-outline-dark btn-sm rounded-0 m-1">{talle}</button>)}
              </li>
              )}
              <li className="pr-3 py-2 mb-1 bg-white text-muted"><strong className="text-uppercase text-dark">Categoria:</strong><Link className="reset-anchor ms-2">{producto.categoria}{urlCat}</Link></li>
              <li className="pr-3 py-2 mb-1 bg-white text-muted"><strong className="text-uppercase text-dark">Tag:</strong><Link className="reset-anchor ms-2">{producto.tag}{urlTag}</Link></li>
            </ul>
          </div>
        </div>
          {/* RELATED PRODUCTS */}
        <h2 className="h5 text-uppercase mb-4">Related products</h2>
        <div className="row">
            {/* PRODUCT */}
          {/* <div className="col-lg-3 col-sm-6">
            <div className="product text-center skel-loader">
              <div className="d-block mb-3 position-relative"><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-1.jpg" alt="..."/></a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#!"><i className="far fa-heart"></i></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="#!">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-bs-toggle="modal"><i className="fas fa-expand"></i></a></li>
                  </ul>
                </div>
              </div>
              <h6> <a className="reset-anchor" href="detail.html">Kui Ye Chen’s AirPods</a></h6>
              <p className="small text-muted">$250</p>
            </div>
          </div> */}
        </div>
      </div>      
    </section>
          {/* Modal */}
          {showModal && (
        <div className="modal-container-detail" onClick={toggleModal}>
          <div className="modal-content-detail">
            <img className="img-fluid" src={`/images/${producto.id}.png`} alt="..." />
          </div>
        </div>
      )}
    </>
  )
}

export default Detail