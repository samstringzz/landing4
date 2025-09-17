import React, { useState } from 'react';
import './style.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            // Here you would typically send the email to your backend
            console.log('Newsletter subscription:', email);
            setIsSubscribed(true);
            setEmail('');
        }
    };

    return (
        <section className="hx-newsletter-section ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="hx-newsletter-content text-center">
                            <div className="hx-newsletter-icon">
                                <i className="fa fa-envelope"></i>
                            </div>
                            <h2>Subscribe to Our Newsletter</h2>
                            <p>Stay updated with our latest news, tips, and exclusive offers delivered straight to your inbox.</p>
                            
                            {!isSubscribed ? (
                                <form className="hx-newsletter-form" onSubmit={handleSubmit}>
                                    <div className="hx-form-group">
                                        <input
                                            type="email"
                                            placeholder="Enter your email address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <button type="submit" className="hx-newsletter-btn">
                                            Subscribe
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <div className="hx-success-message">
                                    <i className="fa fa-check-circle"></i>
                                    <p>Thank you for subscribing! You'll receive our newsletter soon.</p>
                                </div>
                            )}
                            
                            <div className="hx-newsletter-benefits">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="hx-benefit-item">
                                            <i className="fa fa-bell"></i>
                                            <span>Weekly Updates</span>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="hx-benefit-item">
                                            <i className="fa fa-gift"></i>
                                            <span>Exclusive Offers</span>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="hx-benefit-item">
                                            <i className="fa fa-lightbulb-o"></i>
                                            <span>Expert Tips</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
