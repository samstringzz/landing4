import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'

class Testimonials extends Component {
    render() {
        const testimonials = [
            {
                id: 1,
                name: 'Sarah Johnson',
                position: 'CEO, TechStart Inc.',
                image: '/images/testimonials/1.jpg',
                text: 'Working with this team transformed our brand completely. Their creative vision and strategic approach helped us increase our market presence by 300%.'
            },
            {
                id: 2,
                name: 'Michael Chen',
                position: 'Founder, Creative Agency',
                image: '/images/testimonials/2.jpg',
                text: 'The level of professionalism and creativity exceeded our expectations. They delivered a brand identity that perfectly captured our company values.'
            },
            {
                id: 3,
                name: 'Emily Rodriguez',
                position: 'Marketing Director, Global Corp',
                image: '/images/testimonials/3.jpg',
                text: 'Outstanding work! Their digital marketing strategies helped us reach new audiences and significantly increased our conversion rates.'
            },
            {
                id: 4,
                name: 'David Thompson',
                position: 'Entrepreneur',
                image: '/images/testimonials/4.jpg',
                text: 'From concept to execution, they provided exceptional service. Our website redesign resulted in a 150% increase in user engagement.'
            }
        ];

        var settings = {
            dots: true,
            arrows: true,
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <section className="hx-testimonials-section ptb-100" style={{paddingBottom: '150px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="hx-site-title-1 text-center">
                                <span>Client Feedback</span>
                                <h2>What Our Clients Say</h2>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-12">
                            <div className="hx-testimonials-slider">
                                <Slider {...settings}>
                                    {testimonials.map((testimonial) => (
                                        <div key={testimonial.id} className="hx-testimonial-item">
                                            <div className="hx-testimonial-content">
                                                <div className="hx-testimonial-quote">
                                                    <i className="fa fa-quote-left"></i>
                                                </div>
                                                <p>"{testimonial.text}"</p>
                                                <div className="hx-testimonial-author">
                                                    <div className="hx-author-img">
                                                        <img src={testimonial.image} alt={testimonial.name} />
                                                    </div>
                                                    <div className="hx-author-info">
                                                        <h4>{testimonial.name}</h4>
                                                        <span>{testimonial.position}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonials;
