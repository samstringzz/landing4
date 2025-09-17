import React from 'react';
import './style.css';

// Import existing images from the project
import project1 from '../../images/project/img-1.jpg';
import project2 from '../../images/project/img-2.jpg';
import project3 from '../../images/project/img-3.jpg';
import project4 from '../../images/project/img-4.jpg';
import project5 from '../../images/project/img-5.jpg';
import project6 from '../../images/project/img-6.jpg';

const Gallery = () => {
    const galleryItems = [
        {
            id: 1,
            image: project1,
            title: 'Brand Identity Design',
            category: 'Design'
        },
        {
            id: 2,
            image: project2,
            title: 'Digital Marketing Campaign',
            category: 'Marketing'
        },
        {
            id: 3,
            image: project3,
            title: 'Web Development Project',
            category: 'Development'
        },
        {
            id: 4,
            image: project4,
            title: 'Creative Photography',
            category: 'Photography'
        },
        {
            id: 5,
            image: project5,
            title: 'Event Planning',
            category: 'Events'
        },
        {
            id: 6,
            image: project6,
            title: 'Product Launch',
            category: 'Strategy'
        }
    ];

    return (
        <section className="hx-gallery-section ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="hx-site-title-1 text-center">
                            <span>Our Work</span>
                            <h2>Media Gallery</h2>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    {galleryItems.map((item) => (
                        <div className="col-lg-4 col-md-6 col-sm-12" key={item.id}>
                            <div className="hx-gallery-item">
                                <div className="hx-gallery-img">
                                    <img src={item.image} alt={item.title} />
                                    <div className="hx-gallery-overlay">
                                        <div className="hx-gallery-content">
                                            <h3>{item.title}</h3>
                                            <span>{item.category}</span>
                                        </div>
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

export default Gallery;
