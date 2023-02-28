const Checkout = () => {
  return (
    <div className="page-holder" >
        <div className="container" >
            {/* Encabezado */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
                    <div className="col-lg-6">
                        <h1 className="h2 text-uppercase mb-0">Checkout</h1>
                    </div>
                    <div className="col-lg-6 text-lg-end">
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
                            <li className="breadcrumb-item"><a className="text-dark" href="index.html">Inicio</a></li>
                            <li className="breadcrumb-item"><a className="text-dark" href="cart.html">Carrito</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                        </ol>
                        </nav>
                    </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
            {/* Datos comprador */}
            <h2 className="h5 text-uppercase mb-4">Detalle de facturacion</h2>
            <div className="row">
                <div className="col-lg-8">
                <form action="#">
                    <div className="row gy-3">
                    <div className="col-lg-6">
                        <label className="form-label text-sm text-uppercase" htmlFor="firstName">Nombre </label>
                        <input className="form-control form-control-lg" type="text" id="firstName" placeholder="Escribe tu nombre"/>
                    </div>
                    <div className="col-lg-6">
                        <label className="form-label text-sm text-uppercase" htmlFor="lastName">Apellido </label>
                        <input className="form-control form-control-lg" type="text" id="lastName" placeholder="Escribe tu apellido"/>
                    </div>
                    <div className="col-lg-6">
                        <label className="form-label text-sm text-uppercase" htmlFor="email">Email </label>
                        <input className="form-control form-control-lg" type="email" id="email" placeholder="ej. luciano@example.com"/>
                    </div>
                    <div className="col-lg-6">
                        <label className="form-label text-sm text-uppercase" htmlFor="phone">Numero de telefono </label>
                        <input className="form-control form-control-lg" type="tel" id="phone" placeholder="ej. +54 11 4444 5555"/>
                    </div>
                    <div className="col-lg-6">
                        <label className="form-label text-sm text-uppercase" htmlFor="company">Nombre de compania (opcional) </label>
                        <input className="form-control form-control-lg" type="text" id="company" placeholder="Nombre de la compania"/>
                    </div>
                    <div className="col-lg-12">
                        <label className="form-label text-sm text-uppercase" htmlFor="address">Direccion</label>
                        <input className="form-control form-control-lg" type="text" id="address" placeholder="Calle y Altura"/>
                    </div>
                    <div className="col-lg-12">
                        <label className="form-label text-sm text-uppercase" htmlFor="addressalt">Departamento </label>
                        <input className="form-control form-control-lg" type="text" id="addressalt" placeholder="Piso, Departamento"/>
                    </div>
                    <div className="col-lg-6">
                        <label className="form-label text-sm text-uppercase" htmlFor="city">Ciudad </label>
                        <input className="form-control form-control-lg" type="text" id="city"/>
                    </div>
                    <div className="col-lg-6">
                        <label className="form-label text-sm text-uppercase" htmlFor="state">Provincia </label>
                        <input className="form-control form-control-lg" type="text" id="state"/>
                    </div>
                    <div className="col-lg-6">
                        <button className="btn btn-link text-dark p-0 shadow-0" type="button" data-bs-toggle="collapse" data-bs-target="#alternateAddress">
                        <div className="form-check">
                            <input className="form-check-input" id="alternateAddressCheckbox" type="checkbox"/>
                            <label className="form-check-label" htmlFor="alternateAddressCheckbox">La facturacion no es a mi nombre</label>
                        </div>
                        </button>
                    </div>
                    {/* Datos facturacion */}
                    <div className="collapse" id="alternateAddress">
                        <div className="row gy-3">
                        <div className="col-12 mt-4">
                            <h2 className="h4 text-uppercase mb-4">Detalles de facturacion alternativo</h2>
                        </div>
                        <div className="col-lg-6">
                            <label className="form-label text-sm text-uppercase" htmlFor="firstName">Nombre </label>
                            <input className="form-control form-control-lg" type="text" id="firstName" placeholder="Escribe tu nombre"/>
                        </div>
                        <div className="col-lg-6">
                        <label className="form-label text-sm text-uppercase" htmlFor="lastName">Apellido </label>
                        <input className="form-control form-control-lg" type="text" id="lastName" placeholder="Escribe tu apellido"/>
                    </div>
                    <div className="col-lg-6">
                        <label className="form-label text-sm text-uppercase" htmlFor="email">Email </label>
                        <input className="form-control form-control-lg" type="email" id="email" placeholder="ej. luciano@example.com"/>
                    </div>
                    <div className="col-lg-6">
                        <label className="form-label text-sm text-uppercase" htmlFor="phone">Numero de telefono </label>
                        <input className="form-control form-control-lg" type="tel" id="phone" placeholder="ej. +54 11 4444 5555"/>
                    </div>
                    <div className="col-lg-6">
                        <label className="form-label text-sm text-uppercase" htmlFor="company">Nombre de compania (opcional) </label>
                        <input className="form-control form-control-lg" type="text" id="company" placeholder="Nombre de la compania"/>
                    </div>

                    <div className="col-lg-12">
                        <label className="form-label text-sm text-uppercase" htmlFor="address">Direccion</label>
                        <input className="form-control form-control-lg" type="text" id="address" placeholder="Calle y Altura"/>
                    </div>
                    <div className="col-lg-12">
                        <label className="form-label text-sm text-uppercase" htmlFor="addressalt">Departamento </label>
                        <input className="form-control form-control-lg" type="text" id="addressalt" placeholder="Piso, Departamento"/>
                    </div>
                    <div className="col-lg-6">
                        <label className="form-label text-sm text-uppercase" htmlFor="city">Ciudad </label>
                        <input className="form-control form-control-lg" type="text" id="city"/>
                    </div>
                    <div className="col-lg-6">
                        <label className="form-label text-sm text-uppercase" htmlFor="state">Provincia </label>
                        <input className="form-control form-control-lg" type="text" id="state"/>
                    </div>
                        </div>
                    </div>
                    <div className="col-lg-12 form-group">
                        <button className="btn btn-dark rounded-0" type="submit">Finalizar</button>
                    </div>
                    </div>
                </form>
                </div>
                {/* ORDER SUMMARY */}
                <div className="col-lg-4">
                <div className="card border-0 rounded-0 p-lg-4 bg-light">
                    <div className="card-body">
                    <h5 className="text-uppercase mb-4">Tu orden</h5>
                    <ul className="list-unstyled mb-0">
                        <li className="d-flex align-items-center justify-content-between"><strong className="small fw-bold">Red digital smartwatch</strong><span className="text-muted small">$250</span></li>
                        <li className="border-bottom my-2"></li>
                        <li className="d-flex align-items-center justify-content-between"><strong className="small fw-bold">Gray Nike running shoes</strong><span className="text-muted small">$351</span></li>
                        <li className="border-bottom my-2"></li>
                        <li className="d-flex align-items-center justify-content-between"><strong className="text-uppercase small fw-bold">Total</strong><span>$601</span></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
    </div>
    
  )
}

export default Checkout