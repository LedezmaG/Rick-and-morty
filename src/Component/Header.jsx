import React from 'react';
import Logo from '../Assets/img/pickle.png';
import Principal from '../Assets/img/pngguru.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../Assets/styles/header.css';

function Header() {
    return(
        <>
            <header className="header">
                <Link to="/">
                    <img className="header__img" src={ Logo } alt="Rick" />
                </Link>

                <div className="header__menu">
                    <div className="header__menu--profile">
                        <img src="" alt=""/>
                        <p>Perfil</p>
                    </div>
                    <ul>
                        <li>
                            <Link to="/">Cuenta</Link>
                        </li>
                        <li>
                            <Link to="/Login">iniciar Sesión</Link>
                        </li>
                    </ul>
                </div>
            </header>
         
            <section className="row">
                <div className="col-12 text-center">
                    <img src={ Principal } alt="Rick and Morty" />
                </div>
            </section>
        </>

    );
}

export default Header
