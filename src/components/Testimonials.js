

import React from 'react';
import Rating from 'react-rating';
import './Testimonials.css'; // Import the external CSS file


const testimonialsData = [
  {
    name: 'John Doe',
    photoUrl: 'https://example.com/john-doe-photo.jpg',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a nisi eu dolor venenatis interdum. Nulla facilisi.',
    rating: 4.5,
  },
  {
    name: 'Jane Smith',
    photoUrl: 'https://example.com/jane-smith-photo.jpg',
    testimonial: 'Fusce ullamcorper tellus sit amet est scelerisque, id bibendum massa ultricies. Quisque eu enim vitae libero dictum posuere eu in elit.',
    rating: 5,
  },
  {
    name: 'Alice Johnson',
    photoUrl: 'https://example.com/alice-johnson-photo.jpg',
    testimonial: 'In eu luctus ipsum, id ullamcorper elit. Fusce venenatis, odio eu fermentum vulputate, massa elit consequat turpis.',
    rating: 3.8,
  },
  {
    name: 'Bob Williams',
    photoUrl: 'https://example.com/bob-williams-photo.jpg',
    testimonial: 'Suspendisse potenti. Sed quis orci a libero convallis cursus. Nullam volutpat felis ac est blandit, at hendrerit elit iaculis.',
    rating: 4.2,
  },
];

const Testimonials = () => {
    return (
      <div className='sectionContainer'>
        <div className="sectionTitle"> {/* Add a div around the title */}
          <h2>Testimonials</h2>
        </div>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-header">
              <img src={testimonial.photoUrl} alt={`Photo of ${testimonial.name}`} className="testimonial-photo" />
              <h3 className="testimonial-name">{testimonial.name}</h3>
            </div>
            <p className="testimonial-text">{testimonial.testimonial}</p>
          <div className="testimonial-rating">
            <Rating
              initialRating={testimonial.rating}
              emptySymbol={<span className="icon">☆</span>}
              fullSymbol={<span className="icon">★</span>}
              readonly
            />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Testimonials;
