import { Link } from "react-router-dom"


const Login = () => {
  return (
    <div className="container py-5">
        <div className="row justify-content-md-center">
            <div className="col-lg-4">
                <div className="text-center">
                    <h5>Ingresa a Boutique</h5>
                </div>
                <div className="card border-0 rounded-0 p-lg-4 bg-light">
                    <div className="card-body">
                        <form action="#">
                                <div className="row lg-4 py-3">
                                    <input className="form-control form-control-lg" type="text" id="firstName" placeholder="Usuario o correo electronico"/>
                                </div>
                                <div className="row lg-4 py-3">
                                    <input className="form-control form-control-lg" type="text" id="firstName" placeholder="Contraseña"/>
                                </div>
                                <div className="row lg-4 py-1">
                                    <Link><p className="text-sm">Olvidaste tu contraseña?</p> </Link>
                                </div>
                                <div>
                                    <button className="btn btn-dark btn-sm w-100" type="submit"> Ingresar</button>
                                </div>
                        </form>
                    </div>
                </div>  
            </div>
            
        </div>
        <div className="row justify-content-md-center">
            <div className="col-lg-4">
                <div className="row card border-0 rounded-0 p-lg-4 bg-light my-3">
                    <div className="card-body">
                        <p className="text-sm">Nuevo en Boutique? <Link>Crea una cuenta</Link></p>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default Login