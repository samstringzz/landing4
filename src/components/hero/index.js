import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './style.css'

import hero1 from '../../images/slider/2.jpg'
import hero2 from '../../images/slider/1.jpg'
import hero3 from '../../images/slider/3.jpg'



class Hero extends Component {
    render() {

        var settings = {
            dots: true,
            arrows: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            fade: true
        };

        return (
            <section className={`hero hero-slider-wrapper hx-hero-style-1 ${this.props.heroClass}`}>
                <div className="hero-slider">
                    <Slider {...settings}>
                        <div className="slide">
                            <div className="slide-inner" style={{ backgroundImage: `url(${hero1})` }}>
                                <div className="container header-p">
                                    <div className="row">
                                        <div className="col col-lg-6 hx-slide-caption">
                                            <h2>Hi, I'm Alika Maya</h2>
                                            <p>Empowering Lives Through Style & Inspiration</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="slide-inner" style={{ backgroundImage: `url(${hero2})` }}>
                                <div className="container header-p">
                                    <div className="row">
                                        <div className="col col-lg-6 hx-slide-caption">
                                            <h2>Hi, I'm Alika Maya</h2>
                                            <p>Empowering Lives Through Style & Inspiration</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="slide-inner" style={{ backgroundImage: `url(${hero3})` }}>
                                 <div className="container header-p">
                                    <div className="row">
                                        <div className="col col-lg-6 hx-slide-caption">
                                            <h2>Hi, I'm Alika Maya</h2>
                                            <p>Empowering Lives Through Style & Inspiration</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
             </section>
        )
    }
}

export default Hero;