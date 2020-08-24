import React, { useEffect } from 'react'
import Glider from 'glider-js'
import carousel from '../../assets/carousel.svg'

function Carousel() {
    useEffect(() => {
        const slider = document.querySelector('.glider')
        if (slider)
            new Glider(slider, {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: '.dots',
                draggable: true,
                arrows: {
                    prev: '.glider-prev',
                    next: '.glider-next'
                }
            });
    })

    return (
        <div className="glider-contain">
            <div className="glider">
                <div className="slide">
                    <img className="slide__img" height="50px" src={carousel} alt="svg icon" />
                    <h4 className="slide__title" >Commitment</h4>
                    <p className="slide__desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nihil ullam quisquam ipsa vero eligendi alias aut saepe nemo porro, quidem magnam cupiditate aperiam itaque officia error maxime earum illo!</p>
                </div>
                <div className="slide">
                    <img className="slide__img" height="50px" src={carousel} alt="svg icon" />
                    <h4 className="slide__title" >Commitment</h4>
                    <p className="slide__desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nihil ullam quisquam ipsa vero eligendi alias aut saepe nemo porro, quidem magnam cupiditate aperiam itaque officia error maxime earum illo!</p>
                </div>
                <div className="slide">
                    <img className="slide__img" height="50px" src={carousel} alt="svg icon" />
                    <h4 className="slide__title" >Commitment</h4>
                    <p className="slide__desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nihil ullam quisquam ipsa vero eligendi alias aut saepe nemo porro, quidem magnam cupiditate aperiam itaque officia error maxime earum illo!</p>
                </div>
                <div className="slide">
                    <img className="slide__img" height="50px" src={carousel} alt="svg icon" />
                    <h4 className="slide__title" >Commitment</h4>
                    <p className="slide__desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nihil ullam quisquam ipsa vero eligendi alias aut saepe nemo porro, quidem magnam cupiditate aperiam itaque officia error maxime earum illo!</p>
                </div>
            </div>
            <button aria-label="Previous" className="glider-prev">«</button>
            <button aria-label="Next" className="glider-next">»</button>
            <div role="tablist" className="dots"></div>
        </div>
    )
}

export default Carousel;