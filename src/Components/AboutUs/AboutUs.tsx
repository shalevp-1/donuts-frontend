
import React from 'react';
import './AboutUs.css';



export default function AboutUs() {
  return (
    <div className="aboutUsContainer">
      <div className="aboutUsContent">
        <div className="aboutUsText">
          <h2>Welcome to Shalev's Bakery</h2>
          <br />
          <p>
            At Shalev's Bakery Bakery, we believe in the magic of freshly baked goods that bring joy and sweetness to your life.
            Our journey began several decades ago when our founder, Shalev, turned his passion for baking into a delightful business.
          </p>
          <br />
          <p>
            Located in the heart of the city, Shalev's Bakery has been serving our community with love and dedication.
            Our commitment to quality ingredients and traditional recipes ensures that every bite is a moment of pure bliss.
          </p>
          <br />
          <p>
            Our bakery is not just about donuts; it's about creating memories, celebrating special occasions, and making everyday moments extraordinary.
            The inviting aroma of our oven-fresh treats welcomes you as you step into our cozy space.
          </p>
          <br />
          <p>
            Come and indulge in our wide variety of pastries, cakes, and, of course, our signature donuts.
            Every creation is crafted with care, and we take pride in being a part of your sweetest moments.
          </p>
        </div>
        <div className="aboutUsImage">
          <img src="https://i.insider.com/5ba398469c888d0f2c8b4567?width=700" alt="Bakery Interior" />
        </div>
      </div>
      <div className="contactInfo">
        <h3>Contact Us</h3>
        <p>
          <strong>Address:</strong> 123 Baker Street, Sweetville, CA 98765
        </p>
        <p>
          <strong>Phone:</strong> (050) 233-6023
        </p>
      </div>
    </div>
  )};


