import { Link } from 'react-router-dom';
import indumentaria from '../../img/cat11.png'
import zapatillas from '../../img/cat222222.png'
import electronica from '../../img/cat4444.png'
import relojes from '../../img/cat333.png'


const  Categorias  = ()  => {
    return(
        <div className="container px-lg-3">
            <section className="pt-5">
                <header className="text-center">
                    <p className="small text-muted small text-uppercase mb-1">creado  para vos</p>
                    <h2 className="h5 text-uppercase mb-4">Explora nuestras categorias</h2>
                </header>
                <div className="row">
                    <div className="col-md-4"><Link className="category-item" to="../productos/indumentaria" relative="path"><img className="img-fluid" src={indumentaria} alt=""/><strong className="category-item-title">Indumentaria</strong></Link></div> 
                    <div className="col-md-4"><Link className="category-item mb-4" to="../productos/zapatillas" relative="path"><img className="img-fluid" src={zapatillas} alt=""/><strong className="category-item-title">Zapatillas</strong></Link><Link className="category-item"  to="../productos/relojes" relative="path"><img className="img-fluid" src={relojes} alt=""/><strong className="category-item-title">Relojes</strong></Link></div>
                    <div className="col-md-4"><Link className="category-item" to="../productos/electronica" relative="path"><img className="img-fluid" src={electronica} alt=""/><strong className="category-item-title">Electronica</strong></Link></div>
                </div>
            </section>
        </div>
    )
}

export default Categorias