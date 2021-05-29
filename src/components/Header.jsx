import React from 'react'
import {

    Link
} from "react-router-dom";
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Context App</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link ">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/about" className="nav-link ">Acerca De</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Header
