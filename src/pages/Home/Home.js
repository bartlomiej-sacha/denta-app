import React, { useEffect, useRef } from 'react'
import newsSvg from '../../assets/info.svg';
import { gsap } from 'gsap'
import { ScrollableList } from 'components'
import API from 'data/fetch'
import { useQuery } from 'react-query';

function Home() {

    const { data: { news } } = useQuery(['news', localStorage.userId], API.fetch.fetchNews)

    const items = news.map((item) => {
        return (
            <div key={item.id} className="item">
                <img className="item__svg" src={newsSvg} alt="logo" />
                <div className="item__text-wrapper">
                    <h4 className="item__header">{item.title}</h4>
                    <p className="item__text">{item.description}.</p>
                </div>
            </div>
        )
    })

    let title = useRef(null);

    useEffect(() => {
        gsap.from(title, {
            duration: 0.8,
            delay: .8,
            ease: "power3.out",
            y: 64
        })
    }, [title])

    return (
        <div className="home">
            <h1 >
                <div className="line-wrap">
                    <div ref={el => (title = el)} className="line">
                        News &#38; informations.
                    </div>
                </div>
            </h1>
            <ScrollableList items={items} />
        </div >
    )
}

export default Home;