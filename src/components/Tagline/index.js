import React from 'react';
import './style.css';

const Tagline = () => {
    return (
        <section className="hx-tagline-section ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="hx-tagline-content text-center">
                            <div className="hx-tagline-title">
                                <span className="tagline-label">TAGLINE</span>
                                <h2 className="tagline-main">Empowering entrepreneurs to build brands they love</h2>
                                <h3 className="content-hub">Content Hub</h3>
                            </div>
                            <div className="hx-social-icons">
                                <div className="social-icon">
                                    <i className="fa fa-instagram"></i>
                                </div>
                                <div className="social-icon">
                                    <i className="fa fa-youtube-play"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tagline;
