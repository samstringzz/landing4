import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Products = () => {
    const products = [
        {
            id: 1,
            name: 'Sneakers',
            price: '¥49,000',
            rating: '4.5',
            image: '/images/products/sneakers.jpg',
        },
        {
            id: 2,
            name: 'Wrist Watch',
            price: '¥19,000',
            rating: '4.5',
            image: '/images/products/watch.jpg',
        },
        {
            id: 3,
            name: 'Green Handbag',
            price: '¥99,000',
            rating: '4.5',
            image: '/images/products/handbag.jpg',
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
                
                <div className="row justify-content-center">
                    {products.map((product) => (
                        <div className="col-lg-4 col-md-6 col-sm-12" key={product.id}>
                            <div className="product-card">
                                <div className="product-rating">
                                    <i className="fa fa-star"></i>
                                    <span>{product.rating}</span>
                                </div>
                                <div className="product-image">
                                    <div className="image-placeholder">
                                        <i className="fa fa-image"></i>
                                    </div>
                                </div>
                                <div className="product-price">
                                    <span className="price-strikethrough">{product.price}</span>
                                </div>
                                <div className="product-content">
                                    <h3>{product.name}</h3>
                                    <button className="buy-now-btn">
                                        Buy Now
                                    </button>
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
