import React, { useState } from "react";


const SlidesInfo = () => {

    const [animate, setAnimate] = useState(false);

    let slideImages = [
        'https://cdn.pixabay.com/photo/2016/02/05/10/18/painter-1180676_960_720.jpg',
        'https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        'https://images.pexels.com/photos/3979650/pexels-photo-3979650.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        'https://images.pexels.com/photos/3732891/pexels-photo-3732891.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        'https://images.pexels.com/photos/1165082/pexels-photo-1165082.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        'https://images.pexels.com/photos/1011629/pexels-photo-1011629.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    ];

    const caption = (
        <div className="caption">
            <p style={{ animation: animate ? "slideRight 1.5s" : "undefined" }}>
                &#10075;&#10075;Weekends are a bit like rainbows; they look good from a distance but disappear when you get up close to them.&#10076;&#10076;</p>
            <h3 style={{ animation: animate ? "showcaption 1.5s" : "undefined" }}>-John Shirley</h3>
        </div>
    )

    const caption1 = (
        <div className="caption">
            <p style={{ animation: animate ? "slideRight 1.5s" : "undefined" }}>&#10075;&#10075;Did you ever notice that when you blow in a dog’s face he gets mad at you? But when you take him in a car, he sticks his head out the window.&#10076;&#10076;</p>
            <h3 style={{ animation: animate ? "showcaption 1.5s" : "undefined" }}>-Steve Bluestone</h3>
        </div>
    )

    const caption2 = (
        <div className="caption">
            <p style={{ animation: animate ? "slideRight 1.5s" : "undefined", color: '#fff' }}>&#10075;&#10075;You'll live to be a hundred if you give up all the things that make you want to.&#10076;&#10076;</p>
            <h3 style={{ animation: animate ? "showcaption 1.5s" : "undefined", color: '#fff' }}>-The movie Interiors</h3>
        </div>
    )

    const caption3 = (
        <div className="caption">
            <p style={{ animation: animate ? "slideRight 1.5s" : "undefined" }}>&#10075;&#10075;Be careful not to do your good deeds when there's no one watching you.&#10076;&#10076;</p>
            <h3 style={{ animation: animate ? "showcaption 1.5s" : "undefined" }} >-Tom Lehrer</h3>
        </div>
    )

    const caption4 = (
        <div className="caption">
            <p style={{ animation: animate ? "slideRight 1.5s" : "undefined" }}>&#10075;&#10075;To a teacher of languages there comes a time when the world is but a place of many words and man appears a mere talking animal not much more wonderful than a parrot.&#10076;&#10076;</p>
            <h3 style={{ animation: animate ? "showcaption 1.5s" : "undefined" }} >-Joseph Conrad</h3>
        </div>
    )

    const caption5 = (
        <div className="caption">
            <p style={{ animation: animate ? "slideRight 1.5s" : "undefined" }}>&#10075;&#10075;Ideas are easy. It's the execution of ideas that really separates the sheep from the goats.&#10076;&#10076;</p>
            <h3 style={{ animation: animate ? "showcaption 1.5s" : "undefined" }} >-Sue Grafton</h3>
        </div>
    )


    const slideData = [
        {
            text: caption,
            image: slideImages[0]
        },
        {
            text: caption1,
            image: slideImages[1]
        },
        {
            text: caption2,
            image: slideImages[2]
        },
        {
            text: caption3,
            image: slideImages[3]
        },
        {
            text: caption4,
            image: slideImages[4]
        },
        {
            text: caption5,
            image: slideImages[5]
        }
    ]


    return {
        animate,
        setAnimate,
        slideData,
    };
}

export default SlidesInfo