import React from 'react'
import '../styles/Navbar.css'

function Navbar(){
    return(
        <>
        <div className="mainNavbar">
            <div className="mainNavbarLogo">
                <img alt="" src={`${process.env.PUBLIC_URL}/images/audi-logo.svg`}></img>
            </div>
            <div className="mainNavbarButtons">
                <button>Modelos</button>
                <button>Lojas</button>
                <button>Proposta</button>
            </div>
        </div>
        </>
    )
}

export default Navbar