import React,{useRef} from "react";

import './Navbar.css'
import { Link } from 'react-router-dom';
import { GrBitcoin } from "react-icons/gr";

const NavbarComponent = () => {
    const btnToggleRef=useRef()
    const toggleMenu=()=>{
        btnToggleRef.current.click()
    }
    return (
        <div className="NavbarRight">
            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <GrBitcoin className="navbar-logo-icon" />
                        <span className="navbar-logo-text">سایبام</span>
                    </div>
                    <button className="navbar-toggler" ref={btnToggleRef} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item " onClick={toggleMenu}>
                                <Link className="nav-link active" aria-current="page" to="/">
                                    صفحه اصلی
                                </Link>

                            </li>
                            <li className="nav-item "  onClick={toggleMenu}>
                                <Link className="nav-link active" aria-current="page" to="/faq">
                                    سوالات
                                </Link>
                            </li>
                            <li className="nav-item"  onClick={toggleMenu}>
                                <Link className="nav-link active" aria-current="page" to="/aboutus">
                                    درباره سایبام
                                </Link>
                            </li>
                            <li className="nav-item"  onClick={toggleMenu}>
                                <Link className="nav-link active" aria-current="page" to="/contactus">
                                    تماس با ما
                                </Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default NavbarComponent