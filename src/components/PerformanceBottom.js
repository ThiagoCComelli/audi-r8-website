import React from 'react'
import '../styles/PerformanceBottom.css'

function PerformanceBottom(){
    return(
        <>
        <div className="mainPerfBottom">
            <div className="mainPerfBottomStats">
                <div className="mainPerfBottomStatsItem">
                    <h3>330</h3>
                    <p>kmph</p>
                    <span>top speed</span>
                </div>
                <div className="mainPerfBottomStatsItem">
                    <h3>7</h3>
                    <p>gears</p>
                    <span>gear box</span>
                </div>
                <div className="mainPerfBottomStatsItem">
                    <h3>3.2</h3>
                    <p>seconds</p>
                    <span>acceleration</span>
                </div>
            </div>
            <hr/>
            <div className="mainPerfBottomVideo">
                {/* <video src="https://www.youtube.com/watch?v=BjcMwzdSVRU" autoPlay muted loop className="myVideo" /> */}
                <iframe width="100%" height="700px" frameBorder="0" loop="1"
                    src="https://www.youtube.com/embed/BjcMwzdSVRU?autoplay=1&mute=1&controls=0">
                </iframe> 
            </div>
            <hr/>
        </div>
        </>
    )
}

export default PerformanceBottom