import React, { useEffect } from 'react'
import gsap from 'gsap'
import carouselSVG from '../../assets/carousel.svg';
import { Carousel } from 'components'
function AboutUs() {

    useEffect(() => {
        gsap.set('.about-us', { display: 'none' })

        const tl = gsap.timeline();
        tl.to('.about-us', { display: 'flex', })
        tl.from('.about-us', {
            duration: .7, opacity: 0,
        })
        tl.from('.grid__title', { opacity: 0, stagger: 0.3 })
        tl.from('.grid__item', { duration: .2, x: 600, opacity: 0 })
    })

    return (
        <div className="about-us">
            <div className="grid">
                <div className="grid__heading">
                    <h2 className="grid__title">
                        Our
                    </h2>
                    <h2 className="grid__title">
                        Company
                    </h2>
                    <h2 className="grid__title">
                        Values
                    </h2>
                </div>
                <div className="grid__item">
                    <img className="grid__svg" height="50px" src={carouselSVG} alt="logo" />
                    <h4 className="grid__sub-title">Commitment</h4>
                    <p className="grid__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis minus consequatur.</p>
                </div>
                <div className="grid__item">
                    <img className="grid__svg" height="50px" src={carouselSVG} alt="logo" />
                    <h4 className="grid__sub-title">Commitment</h4>
                    <p className="grid__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis minus consequatur.</p>
                </div>
                <div className="grid__item">
                    <img className="grid__svg" height="50px" src={carouselSVG} alt="logo" />
                    <h4 className="grid__sub-title">Commitment</h4>
                    <p className="grid__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis minus consequatur.</p>
                </div>
                <div className="grid__item">
                    <img className="grid__svg" height="50px" src={carouselSVG} alt="logo" />
                    <h4 className="grid__sub-title">Commitment</h4>
                    <p className="grid__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis minus consequatur.</p>
                </div>
                <div className="carousel">
                    <Carousel />
                </div>
            </div>
        </div>
    )
}

export default AboutUs;