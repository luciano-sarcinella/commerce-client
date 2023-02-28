export const Spinner = () => {
    return (
        <div className="d-flex justify-content-center">
            <button className="btn btn-dark" type="button" disabled>
                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                Cargando... 
            </button>
        </div>
    )
}
