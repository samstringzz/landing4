import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Hero from '../../components/hero'
import Gallery from '../../components/Gallery'
import Events from '../../components/Events'
import Tagline from '../../components/Tagline'
import Services from '../../components/Services'
import Testimonials from '../../components/Testimonials'
import Products from '../../components/Products'
import Newsletter from '../../components/Newsletter'
import Contact from '../../components/Contact'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const HomePage =() => {
    return(
        <Fragment>
            <Navbar/>
            <Hero/>
            <Gallery/>
            <Events/>
            <Tagline/>
            <Services sClass={'hx-service-style-2'}/>
            <Testimonials/>
            <Products/>
            <Newsletter/>
            <Contact/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;