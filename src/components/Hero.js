import React from 'react'
import '../styles/Hero.css'
import Navbar from './Navbar'

function Hero(){
    return(
        <>
        <div className="mainHero">
            <Navbar />
            <img alt="" src={`${process.env.PUBLIC_URL}/images/r8-2.jpeg`}></img>
            <div className="mainHeroTitles">
                <h1>Audi R8</h1>
                <p>Perseguido nas pistas. Desejado nas ruas.</p>
            </div>
            <div className="mainHeroLogo">
                <img alt="" src={`${process.env.PUBLIC_URL}/images/r8-logo.png`}></img>
            </div>
        </div>
        </>
    )
}

export default Hero