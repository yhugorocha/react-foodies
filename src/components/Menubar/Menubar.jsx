import './Menubar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

export const Menubar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <img className='mx-4' src={assets.logo} alt="" height={48} width={48} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/explore" >Explorar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" >Fale conosco</Link>
                        </li>
                    </ul>
                    <div className="d-flex align-itens-center gap-4">
                        <div className="position-relative">
                            <img src={assets.card} alt="" height={32} width={32} className='position-relative' />
                            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning'>5</span>
                        </div>
                        <button className='btn btn-outline-primary'>Logar</button>
                        <button className='btn btn-outline-success'>Registrar-se</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
