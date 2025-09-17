import React from 'react'
import Logo from '../../images/logo/logo-2.png'
import {Link}  from 'react-router-dom'
import MobileMenu from '../../components/MobileMenu'
import './style.css'

const Header = (props) => {

     const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return(	
        <header>
            <div className={`hx-header-style-1 ${props.hClass}`} id="sticky-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-7 col-sm-8 col-7 col-t">
                            <div className="logo">
                                <Link onClick={ClickHandler} to="/home"><img src={Logo} alt=""/></Link>
                            </div>
                        </div>
                        <div className="col-lg-9 d-none d-lg-block col-m">
                            {/* Navigation links removed - only logo remains */}
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-2 col-2 d-block d-lg-none">
                            <MobileMenu/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;