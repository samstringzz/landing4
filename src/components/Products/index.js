import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Products = () => {
    const products = [
        {
            id: 1,
            name: 'Brand Identity Package',
            price: '$2,500',
            image: '/images/products/1.jpg',
            description: 'Complete brand identity design including logo, business cards, and brand guidelines.',
            features: ['Logo Design', 'Business Cards', 'Brand Guidelines', 'Social Media Kit']
        },
        {
            id: 2,
            name: 'Website Design Package',
            price: '$3,500',
            image: '/images/products/2.jpg',
            description: 'Professional website design and development with responsive layout and SEO optimization.',
            features: ['Responsive Design', 'SEO Optimization', 'Content Management', '3 Months Support']
        },
        {
            id: 3,
            name: 'Digital Marketing Bundle',
            price: '$1,800',
            image: '/images/products/3.jpg',
            description: 'Comprehensive digital marketing strategy including social media and content creation.',
            features: ['Social Media Strategy', 'Content Creation', 'Analytics Reports', 'Monthly Optimization']
        },
        {
            id: 4,
            name: 'Photography Session',
            price: '$800',
            image: '/images/products/4.jpg',
            description: 'Professional photography session for headshots, products, or events.',
            features: ['2 Hour Session', '50+ Edited Photos', 'Online Gallery', 'Print Rights']
        }
    ];

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="hx-products-section ptb-100" style={{paddingBottom: '150px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="hx-site-title-1 text-center">
                            <span>Our Offerings</span>
                            <h2>Our Products</h2>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    {products.map((product) => (
                        <div className="col-lg-3 col-md-6 col-sm-12" key={product.id}>
                            <div className="hx-product-item">
                                <div className="hx-product-img">
                                    <img src={product.image} alt={product.name} />
                                    <div className="hx-product-overlay">
                                        <Link onClick={ClickHandler} to="/service-details" className="hx-product-btn">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                                <div className="hx-product-content">
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                    <div className="hx-product-features">
                                        {product.features.map((feature, index) => (
                                            <span key={index} className="hx-feature-tag">{feature}</span>
                                        ))}
                                    </div>
                                    <div className="hx-product-footer">
                                        <span className="hx-product-price">{product.price}</span>
                                        <Link onClick={ClickHandler} to="/contact" className="hx-product-order">
                                            Order Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
