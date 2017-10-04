import React from 'react'
import Slider from 'react-slick'
import '../styles.css'

export default ({
    imageUrls
}) => (
    <div className="slicker">
        <Slider
            dots
            arrows={false}
            swipe={false}
            infinite
            autoplay
            fade
            autoplaySpeed={3000 + Math.floor(Math.random() * 1000)}
        >
            {
                imageUrls.map((uri) => (
                    <img className="image" src={uri}/>
                ))
            }
        </Slider>
    </div>
)