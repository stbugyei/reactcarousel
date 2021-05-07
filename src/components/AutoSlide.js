import React, { useRef, useState, useEffect } from 'react'
import AutoSlideFunc from "./SlidesInfo"
import "../styles/autoslide.css"

const AutoSlide = () => {

    const divState = useRef(null);
    const intervalRef = useRef();

    let [index, setIndex] = useState(0);
    const {slideData, animate, setAnimate} = AutoSlideFunc();

/*========== Next function to move slider forward ========== */
    const Next = () => {
        if (index < slideData.length - 1) {
            setIndex(index + 1)
        } else {
            setIndex(0)
        }
        toggleAnimate();
        resetTimer();
    }

/*======= Previous function to move slider backward ======= */
    const Prev = () => {
        if (index === 0) {
            setIndex(slideData.length - 1)
        } else {
            setIndex(index => index - 1)
        }
        toggleAnimate();
        resetTimer();
    }

/*======= Function to move slider base on its index ======= */
    const current = (curIndex) => {
        if (index !== curIndex) {
            setIndex(curIndex)
        }
        toggleAnimate();
        resetTimer();
    }

/*==== Function to automatically move slider forward ==== */
    const autoPlay = () => {
        Next();
        toggleAnimate();
    }

/*==== Function to toggle an animation key(boolean) ==== */
    const toggleAnimate = () => {
        setAnimate(false)
    }

/*==== Style function to set background color for current slide on the indicator btn ==== */
    const getActiveColor = (curIndex) => {
        if (curIndex === index) {
            return { backgroundColor: '#B71C1C' }
        } else return { backgroundColor: '#bbb' }
    }

/*====== Clear/reset timer function for autoplay ====== */
    const resetTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(autoPlay, 5000);
    }


    useEffect(() => {

        if (index >= 0) {
            setAnimate(true)
        } else {
            setAnimate(false)
        }

        let timer = setInterval(() => { autoPlay() }, 5000);
        intervalRef.current = timer;
        return () => {
            clearInterval(intervalRef.current);
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [animate, index, setAnimate])

    
    return (

        <div className="slider-wrapper">
            <div ref={divState} className="slider-content">
                <div className="image-wrapper" style={{ animation: animate ? "zoomOut 1.5s ease" : "undefined", backgroundImage: `url(${slideData[index].image})` }}>
                </div>

                <div className="slider-item">
                    {slideData[index].text}
                </div>
            </div>

            <div className="button-controls">
                <span className="prev" onClick={() => { Prev(); resetTimer() }}><i className="fas fa-chevron-circle-left"></i></span>
                <span className="next" onClick={() => { Next(); resetTimer() }}><i className="fas fa-chevron-circle-right"></i></span>
            </div>

            <div className="indicator-controls">
                <span className="indicator" style={getActiveColor(0)} onClick={() => current(0)}></span>
                <span className="indicator" style={getActiveColor(1)} onClick={() => current(1)}></span>
                <span className="indicator" style={getActiveColor(2)} onClick={() => current(2)}></span>
                <span className="indicator" style={getActiveColor(3)} onClick={() => current(3)}></span>
                <span className="indicator" style={getActiveColor(4)} onClick={() => current(4)}></span>
                <span className="indicator" style={getActiveColor(5)} onClick={() => current(5)}></span>
            </div>
        </div>
    )
}

export default AutoSlide
