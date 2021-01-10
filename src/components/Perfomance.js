import React from 'react'
import '../styles/Perfomance.css'

function Perfomance(){
    return(
        <>
        <div className="mainPerfomance">
            <div className="mainPerfomanceTitle">
                <h2>Audi R8.</h2>
                <p>Uma escolha. Mais de 1,5 milhão de combinações.</p>
            </div>
            <div className="mainPerfomanceBoxes">
                <div className="mainPerfomanceBox">
                    <div className="mainPerfomanceBoxImage">
                        <img alt="" src={`${process.env.PUBLIC_URL}/images/velocimetro.svg`}></img>
                    </div>
                    <div className="mainPerfomanceBoxDesc">
                        <h3>Performance</h3>
                        <p>O poder das pistas em apenas uma acelerada.</p>
                    </div>
                </div>
                <div className="mainPerfomanceBox">
                    <div className="mainPerfomanceBoxImage">
                        <img alt="" src={`${process.env.PUBLIC_URL}/images/seat.svg`}></img>
                    </div>
                    <div className="mainPerfomanceBoxDesc">
                        <h3>Conforto</h3>
                        <p>Aquilo que voce merece em um Audi R8.</p>
                    </div>
                </div>
                <div className="mainPerfomanceBox">
                    <div className="mainPerfomanceBoxImage">
                        <img alt="" src={`${process.env.PUBLIC_URL}/images/wind.svg`}></img>
                    </div>
                    <div className="mainPerfomanceBoxDesc">
                        <h3>Aerodinâmica</h3>
                        <p>Corte o vento como um jato de guerra.</p>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Perfomance