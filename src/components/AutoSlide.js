import React from 'react'
import AutoSlideObject from "./SlidesInfo";
import AutoSlideFunc from "./AutoSlideFunctions"
import "../styles/autoslide.css"

const AutoSlide = () => {

    const { slideData } = AutoSlideObject();
    const { index, animate, slideDiv, divState, Next, Prev, current, getActiveColor, resetTimer } = AutoSlideFunc();

    return (

        <div className="slider-wrapper">
            <div ref={divState} className="slider-content">
                <div className="image-wrapper" style={{ animation: animate ? "zoomOut 1.5s ease" : "undefined", backgroundImage: `url(${slideData[index].image})` }}>
                </div>

                <div className="slider-item">
                    <div className="caption">
                        <p style={{ animation: animate ? "slideRight 1.5s" : "undefined" }}>
                            {slideData[index].caption}</p>
                        <h3 style={{ animation: animate ? "showcaption 1.5s" : "undefined" }}>{slideData[index].author}</h3>
                    </div>
                </div>
            </div>

            <div className="button-controls">
                <span className="prev" onClick={() => { Prev(); resetTimer() }}><i className="fas fa-chevron-circle-left"></i></span>
                <span className="next" onClick={() => { Next(); resetTimer() }}><i className="fas fa-chevron-circle-right"></i></span>
            </div>

            <div className="indicator-controls">
                <div className="controls-stretch">
                    <div ref={slideDiv} className="controls-stretch__width">
                        <span className="scroll-indicator__span"></span>
                    </div>
                    {slideData.map((index, i) => (
                        <span className="indicator" key={i} style={getActiveColor(i)} onClick={() => current(i)}>
                            <span className="tooltip">
                                <img src={slideData[i].image} alt="tooltip" />
                            </span>
                        </span>))}
                </div>
            </div>
        </div>
    )
}

export default AutoSlide
