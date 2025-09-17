import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'


const Services = (props) => {

    const service = [
        {
            icon: 'fa fa-paint-brush',
            title: 'Brand Identity Design',
            des:'Create compelling visual identities that capture your brand essence and resonate with your target audience.',
            link:'/service-details'
        },
        {
            icon: 'fa fa-laptop',
            title: 'Web Development',
            des:'Build responsive, user-friendly websites that drive engagement and convert visitors into customers.',
            link:'/service-details'
        },
        {
            icon: 'fa fa-bullhorn',
            title: 'Digital Marketing',
            des:'Develop strategic marketing campaigns that increase brand awareness and drive measurable results.',
            link:'/service-details'
        },
        {
            icon: 'fa fa-camera',
            title: 'Photography & Video',
            des:'Professional photography and videography services to showcase your brand in the best light.',
            link:'/service-details'
        },
        {
            icon: 'fa fa-lightbulb-o',
            title: 'Creative Strategy',
            des:'Strategic planning and creative direction to help your brand stand out in competitive markets.',
            link:'/service-details'
        },
        {
            icon: 'fa fa-users',
            title: 'Event Planning',
            des:'Complete event management services from concept to execution, ensuring memorable experiences.',
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
                
                <div className="row">
                    {service.map((service, Sitem) => (
                        <div className="col-lg-4 col-md-6 col-sm-12" key={Sitem}>
                            <div className="hx-service-wrap">
                                <div className="hx-service-icon">
                                    <i className={service.icon}></i>
                                </div>
                                <div className="hx-service-text">
                                    <h2><Link onClick={ClickHandler} to={service.link}>{service.title}</Link></h2>
                                    <p>{service.des}</p>
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