import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div className="p-5 mb4 bg-light rounded-3 mt-1">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Faça seu pedido favorito aqui</h1>
                <p className="col-md-8 fs-4">Descubra o melhor da gastronomia e das bebidas</p>
                <Link to='/explore' className="btn btn-primary btn-lg">Explorar</Link>
            </div>
        </div>
    )
}
