import React from 'react'
import '../styles/Specs.css'

function Specs(){
    return(
        <>
        <div className="mainSpecs">
            <div className="mainSpecsTitle">
                <h2>Features</h2>
            </div>
            <div className="mainSpecsContent">
                <div className="mainSpecsContentText">
                    <div className="mainSpecsContentTextItem">
                        <h4>Vehicle Type</h4>
                        <p>mid-engine, all-whell-drive, 2-passenger coupe or convertible</p>
                    </div>
                    <div className="mainSpecsContentTextItem">
                        <h4>Base Price</h4>
                        <p>coupe, $172,850;<br/>Spyder, $185,050;<br/>Performance coupe, $198,850;<br/>Performance Spyder, $211,050</p>
                    </div>
                    <div className="mainSpecsContentTextItem">
                        <h4>Engines</h4>
                        <p>DOHC 40-valve 5.2-liter V-10, 562 or 602 hp, 406 or 413 lb-ft</p>
                    </div>
                    <div className="mainSpecsContentTextItem">
                        <h4>Transmission</h4>
                        <p>7-speed dual-clutch automatic</p>
                    </div>
                    <div className="mainSpecsContentTextItem">
                        <h4>Performance</h4>
                        <p>60 mph: 2.8–3.0 sec<br/>100 mph: 6.4–7.3 sec<br/>1/4 mile: 10.7–11.3 sec<br/>Top speed: 201–205 mph</p>
                    </div>
                    <div className="mainSpecsContentTextItem">
                        <h4>Fuel Economy</h4>
                        <p>Combined/city/highway: 16/13/20 mpg</p>
                    </div>
                </div>
                <div className="mainSpecsContentImage">
                    <img alt="" src={`${process.env.PUBLIC_URL}/images/back-r8.jpeg`}></img>
                </div>
            </div>
            <hr/>
        </div>
        </>
    )
}

export default Specs