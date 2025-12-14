import React from "react";
import logoHound from '../../Assets/logoAzulBlancoHE.png';
import './styles.css';
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header className="header" id="inicio">
            <img className="header_img" src={logoHound} alt="Logo Hound Express"/>
            <nav className="header_nav">
                <Link className="header_nav-link" to="/">Inicio</Link>
                <Link className="header_nav-link" to="/registerguide">Registro de Guías</Link>
                <Link className="header_nav-link" to="/guidestatus">Estado General</Link>
                <Link className="header_nav-link" to="/guidelist">Lista de Guías</Link>
                <Link className="header_nav-link" to="/">Buscar Guías</Link>
                <Link className="header_nav-link" to="/">Historial de Guías</Link>        
            </nav>
        </header>
        
    )
}
export default Header;