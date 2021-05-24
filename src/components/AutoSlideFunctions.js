import { useState, useEffect, useRef } from 'react'
import AutoSlideObject from "./SlidesInfo"

const AutoSlideFunctions = () => {

    const divState = useRef(null);
    const slideDiv = useRef(null);
    const intervalRef = useRef();

    let [index, setIndex] = useState(0);
    const [animate, setAnimate] = useState(false);
    const { slideData } = AutoSlideObject();

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
            return { backgroundColor: '#b71c1c' }
        } else return { backgroundColor: '#fff' }
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
        slideDiv.current.style.width = (index * 20) + "%"
        let timer = setInterval(() => { autoPlay() }, 5000);
        intervalRef.current = timer;
        return () => {
            clearInterval(intervalRef.current);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [animate, index, setAnimate])


    return {
        index,
        animate,
        slideDiv,
        divState,
        Next,
        Prev,
        current,
        resetTimer,
        getActiveColor,
    };
}

export default AutoSlideFunctions
