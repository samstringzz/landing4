import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'


const Services = (props) => {

    const service = [
        {
            icon: 'fa fa-camera',
            title: 'Photography',
            price: '₦150',
            period: '/SESSION',
            des:'Professional photography services for personal branding and business needs.',
            link:'/service-details'
        },
        {
            icon: 'fa fa-lightbulb-o',
            title: 'Brand Strategy',
            price: '¥400',
            period: '/PROJECT',
            des:'Comprehensive brand development and strategic planning for entrepreneurs.',
            link:'/service-details'
        },
        {
            icon: 'fa fa-share-alt',
            title: 'Social Media Marketing',
            price: '¥250',
            period: '/MONTH',
            des:'Expert social media management and content strategy for maximum engagement.',
            link:'/service-details'
        },
    ]


    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return (

        <div className={`hx-service-style-1 ptb-100-70 ${props.sClass}`}>
            <div className="container">
                <div className="col-12">
                    <div className="hx-site-title-1 text-center">
                        <span>What We Offer</span>
                        <h2>Services We Offer</h2>
                    </div>
                </div>
                
                <div className="row justify-content-center">
                    {service.map((service, Sitem) => (
                        <div className="col-lg-4 col-md-6 col-sm-12" key={Sitem}>
                            <div className="service-card">
                                <div className="service-icon">
                                    <i className={service.icon}></i>
                                </div>
                                <div className="service-price">
                                    <span className="price-amount">{service.price}</span>
                                    <span className="price-period">{service.period}</span>
                                </div>
                                <div className="service-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.des}</p>
                                    <Link onClick={ClickHandler} to={service.link} className="learn-more-btn">
                                        Learn More 
                                    </Link>
                                </div>  
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services;