import React from 'react';
import './style.css';

const Events = () => {
    const events = [
        {
            id: 1,
            title: 'Brand Strategy Workshop',
            date: 'March 15, 2024',
            time: '10:00 AM - 4:00 PM',
            location: 'Creative Hub, New York',
            description: 'Learn the fundamentals of building a strong brand identity and strategy.',
            image: '/images/events/1.jpg'
        },
        {
            id: 2,
            title: 'Digital Marketing Masterclass',
            date: 'April 22, 2024',
            time: '2:00 PM - 6:00 PM',
            location: 'Online Event',
            description: 'Master digital marketing strategies for modern businesses.',
            image: '/images/events/2.jpg'
        },
        {
            id: 3,
            title: 'Creative Design Summit',
            date: 'May 10, 2024',
            time: '9:00 AM - 5:00 PM',
            location: 'Design Center, Los Angeles',
            description: 'Explore the latest trends in creative design and innovation.',
            image: '/images/events/3.jpg'
        }
    ];

    return (
        <section className="hx-events-section ptb-100" style={{paddingBottom: '150px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="hx-site-title-1 text-center">
                            <span>Upcoming</span>
                            <h2>Events</h2>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    {events.map((event) => (
                        <div className="col-lg-4 col-md-6 col-sm-12" key={event.id}>
                            <div className="hx-event-item">
                                <div className="hx-event-img">
                                    <img src={event.image} alt={event.title} />
                                    <div className="hx-event-date">
                                        <span className="day">{event.date.split(' ')[1]}</span>
                                        <span className="month">{event.date.split(' ')[0]}</span>
                                    </div>
                                </div>
                                <div className="hx-event-content">
                                    <h3>{event.title}</h3>
                                    <div className="hx-event-meta">
                                        <span><i className="fa fa-clock-o"></i> {event.time}</span>
                                        <span><i className="fa fa-map-marker"></i> {event.location}</span>
                                    </div>
                                    <p>{event.description}</p>
                                    <button className="hx-event-btn">Register Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
