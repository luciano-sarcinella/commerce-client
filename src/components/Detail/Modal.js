import { Link  } from 'react-router-dom'

export const Modal =({id,onClose }) => {
  console.log('modal');
  const closeModal = () => {
    onClose(true)
  }
  
  return(
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="true" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content rounded-0">
        <button className="btn-close p-4 position-absolute top-0 end-0 z-index-20 shadow-0" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
          <div className="modal-body p-0 card rounded-0">
            <div className="row g-0">
              <div className="col-md-5"> 
                <img  className="img-fluid rounded-start" alt={id} src= {`/images/${id}.png`}/>
              </div>
              <div className="col-md-7 p-4">
                <div className="card-body">
                  <h5 className="h4">{id}</h5>
                  <p className="card-text"><small className="text-muted">$ {id}</small></p>
                  <p className="text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.</p>
                  <div className="row align-items-stretch mb-4 gx-0">
                    <div className="col-sm-7">
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