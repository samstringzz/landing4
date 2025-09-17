import React from 'react'
import Logo from '../../images/logo/logo-2.png'
import './style.css'

const Footer = (props) =>{

  return(
    <footer className="hx-site-footer-area">
        <div className="hx-site-footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="hx-site-logo">
                            <img src={Logo} alt="Alika Maya"/>
                        </div>
                        <p>Empowering Lives Through Style & Inspiration</p>
                        <div className="social">
                            <ul className="d-flex justify-content-center">
                                <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                                <li><i className="fa fa-twitter" aria-hidden="true"></i></li>
                                <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                                <li><i className="fa fa-google-plus" aria-hidden="true"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="hx-site-footer-bottom">
            <div className="container">
                <div className="hx-site-footer-bottom-content">
                    <div className="row">
                        <div className="col-12 text-center">
                            <span>© 2024 Alika Maya. All rights reserved</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;