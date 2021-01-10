import React from 'react'
import '../styles/Grid.css'

function Grid(){
    return(
        <>
        <div className="mainGrid">
            <div className="mainGridItem">
                <div className="mainGridAllSubitem">
                    <div className="mainGridSubItem">
                        <div className="subItem">
                            <div className="card">
                                <div className="card-image">
                                    <img src={`${process.env.PUBLIC_URL}/images/r8-1.jpeg`} alt="Servicos"/>
                                </div>
                                <div id="first" className="card-title">
                                    <h3>R8</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mainGridSubItem">
                        <img alt="" src={`${process.env.PUBLIC_URL}/images/r8-0.webp`}></img>
                    </div>
                    <div className="mainGridSubItem">
                        <img alt="" src={`${process.env.PUBLIC_URL}/images/r8.png`}></img>
                        
                    </div>
                    <div className="mainGridSubItem">
                        <div className="subItem">
                            <div className="card">
                                <div className="card-image">
                                    <img src={`${process.env.PUBLIC_URL}/images/r8-2.jpeg`} alt="Servicos"/>
                                </div>
                                <div id="second" className="card-title">
                                    <h3>Audi</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainGridItem">
                <img alt="" src={`${process.env.PUBLIC_URL}/images/r8-back.webp`}></img>
            </div>
        </div>
        </>
    )
}

export default Grid