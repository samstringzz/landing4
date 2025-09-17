import React, { useState } from 'react';
import './style.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Contact form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
        <section className="hx-contact-section ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="hx-site-title-1 text-center">
                            <span>Get In Touch</span>
                            <h2>Contact Us</h2>
                            <p>Ready to start your next project? Let's discuss how we can help bring your vision to life.</p>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="hx-contact-form">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="hx-form-group">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="hx-form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Your Email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="hx-form-group">
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Your Phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="hx-form-group">
                                            <input
                                                type="text"
                                                name="subject"
                                                placeholder="Subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="hx-form-group">
                                            <textarea
                                                name="message"
                                                placeholder="Your Message"
                                                rows="6"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="hx-contact-btn">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-12">
                        <div className="hx-contact-info">
                            <div className="hx-contact-item">
                                <div className="hx-contact-icon">
                                    <i className="fa fa-map-marker"></i>
                                </div>
                                <div className="hx-contact-details">
                                    <h4>Our Location</h4>
                                    <p>123 Creative Street<br />Design District, NY 10001</p>
                                </div>
                            </div>
                            
                            <div className="hx-contact-item">
                                <div className="hx-contact-icon">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <div className="hx-contact-details">
                                    <h4>Phone Number</h4>
                                    <p>+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                                </div>
                            </div>
                            
                            <div className="hx-contact-item">
                                <div className="hx-contact-icon">
                                    <i className="fa fa-envelope"></i>
                                </div>
                                <div className="hx-contact-details">
                                    <h4>Email Address</h4>
                                    <p>hello@creativeagency.com<br />info@creativeagency.com</p>
                                </div>
                            </div>
                            
                            <div className="hx-contact-item">
                                <div className="hx-contact-icon">
                                    <i className="fa fa-clock-o"></i>
                                </div>
                                <div className="hx-contact-details">
                                    <h4>Working Hours</h4>
                                    <p>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
