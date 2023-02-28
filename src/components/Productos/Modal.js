import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate  } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { productoAdded } from '../../utils/carritoSlice'
import { favoritoAdded } from '../../utils/favoritoSlice'


export const Modal =({ titulo, precio, url, onClose,id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  
  const closeModal = () => {
    onClose(true)
    dispatch(
      productoAdded({
        titulo,
        precio,
        url,
        id,
        value:1
      })
    )
    navigate('/carrito')
  }

  const handleFav = () => {
    dispatch(
      favoritoAdded({
        titulo,
        precio,
        url,
        id,
      })
    )
  }
  
  return(
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="true" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content rounded-0">
        <button className="btn-close p-4 position-absolute top-0 end-0 z-index-20 shadow-0" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
          <div className="modal-body p-0 card rounded-0">
            <div className="row g-0">
              <div className="col-md-5"> 
                <img  className="img-fluid rounded-start" alt={titulo} src= {url}/>
              </div>
              <div className="col-md-7 p-4">
                <div className="card-body">
                  <h5 className="h4">{titulo}</h5>
                  <p className="card-text"><small className="text-muted">$ {precio}</small></p>
                  <p className="text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.</p>
                  <div className="row align-items-stretch mb-4 gx-0">
                    <div className="col-sm-7">
                      <div className="d-flex align-items-center justify-content-between py-1 px-3 rounded-0">
                        <Link className="btn btn-link text-dark text-decoration-none p-0" onClick={handleFav}><FontAwesomeIcon icon={faHeart}/> Agregar a Favoritos</Link> 
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <Link className="btn btn-dark btn-sm w-100 h-100 d-flex align-items-center justify-content-center px-0 rounded-0" onClick={closeModal}  data-bs-dismiss="modal" aria-label="Close">Agragar al Carrito</Link>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}