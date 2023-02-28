import { Spinner} from '../Spinner/Spinner'
import { ProductoCard } from '../Productos/ProductoCard'
import { useDispatch } from 'react-redux' 
import { useGetVendidosQuery } from "../../utils/apiSlice"
import { large } from '../../utils/gridSlice'

const Vendidos = () => {

  const dispatch = useDispatch(large())
  dispatch(large())

  const {
    data: productos = [],
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetVendidosQuery()

  let content

  if (isLoading) {
    content = <Spinner/>
  } else if (isSuccess) {
    content = productos.map(producto =>
      <ProductoCard
      key = {producto.id} 
      id = {producto.id}
      titulo = {producto.titulo}
      descripcion = {producto.descripcion}
      precio = {producto.precio}
      categoria = {producto.categoria}
      url = {producto.url}
      new = {producto.new}
      sale = {producto.sale}
      sold = {producto.sold}
      tag = {producto.tag}
      />
    )
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }
    
  return (
    <div className="container px-lg-3">
      <section className="py-5">
        <header>
          <p className="small text-muted small text-uppercase mb-1">Made the hard way</p>
          <h2 className="h5 text-uppercase mb-4">Productos mas vendidos</h2>
        </header>
        <div className="row">
          {content}
        </div>
      </section>
    </div>
  )
}

export default Vendidos
