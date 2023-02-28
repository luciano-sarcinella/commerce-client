const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container py-4">
        <div className="row py-5">
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="text-uppercase mb-3">Servicio al Cliente</h6>
            <ul className="list-unstyled mb-0">
              <li><a className="footer-link" href="#!">Ayuda &amp; Contactanos</a></li>
              <li><a className="footer-link" href="#!">Cambios &amp; Devoluciones</a></li>
              <li><a className="footer-link" href="#!">Terminos &amp; Condiciones</a></li>
              <li><a className="footer-link" href="#!">Stores</a></li>
            </ul>
          </div>  
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="text-uppercase mb-3">Nosotros</h6>
            <ul className="list-unstyled mb-0">
              <li><a className="footer-link" href="#!">Que hacemos</a></li>
              <li><a className="footer-link" href="#!">Servicios Disponibles</a></li>
              <li><a className="footer-link" href="#!">Ultimos Productos</a></li>
              <li><a className="footer-link" href="#!">FAQs</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="text-uppercase mb-3">Social media</h6>
            <ul className="list-unstyled mb-0">
              <li><a className="footer-link" href="#!">Twitter</a></li>
              <li><a className="footer-link" href="#!">Instagram</a></li>
              <li><a className="footer-link" href="#!">Tumblr</a></li>
              <li><a className="footer-link" href="#!">Pinterest</a></li>
            </ul>
          </div>
        </div>
      <div className="border-top pt-4" style={{border: "#1d1d1d !important"}}>
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <p className="small text-muted mb-0">&copy; Sarcinella Luciano todos los derechos reservados 2023 </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer