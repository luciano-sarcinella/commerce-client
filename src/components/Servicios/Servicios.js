import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faTag } from '@fortawesome/free-solid-svg-icons'

const Servicios = () => {
    return (
        <div className="container px-lg-3">
            <section className="py-5 bg-light">
            <div className="container">
                <div className="row text-center gy-3">
                <div className="col-lg-4">
                    <div className="d-inline-block">
                    <div className="d-flex align-items-end">
                    <FontAwesomeIcon icon={faTruckFast} size = '3x'/>
                        <div className="text-start ms-3">
                        <h6 className="text-uppercase mb-1">Envio Gratis</h6>
                        <p className="text-sm mb-0 text-muted">Free shipping worldwide</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="d-inline-block">
                    <div className="d-flex align-items-end">
                    <FontAwesomeIcon icon={faPhone} size = '3x'/>
                        <div className="text-start ms-3">
                        <h6 className="text-uppercase mb-1">Servicio 24 x 7</h6>
                        <p className="text-sm mb-0 text-muted">Free shipping worldwide</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="d-inline-block">
                    <div className="d-flex align-items-end">
                    <FontAwesomeIcon icon={faTag} size = '3x'/>
                        <div className="text-start ms-3">
                        <h6 className="text-uppercase mb-1">Ofertas</h6>
                        <p className="text-sm mb-0 text-muted">Free shipping worldwide</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

            <section className="py-5">
            <div className="container p-0">
                <div className="row gy-3">
                <div className="col-lg-6">
                    <h5 className="text-uppercase">Quiero recibir ofertas!</h5>
                    <p className="text-sm text-muted mb-0">Nisi nisi tempor consequat laboris nisi.</p>
                </div>
                <div className="col-lg-6">
                    <form action="#">
                    <div className="input-group">
                        <input className="form-control form-control-lg rounded-0" type="email" placeholder="ejmplo@ejemplo.com.ar" aria-describedby="button-addon2"></input>
                        <button className="btn btn-dark rounded-0" type="submit">Suscribirse</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </section> 
        </div>
    )
}

export default Servicios