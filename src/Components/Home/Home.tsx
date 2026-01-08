import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
    
  return (
    <div className='home-container'>
        <img src="https://as2.ftcdn.net/v2/jpg/01/76/75/93/1000_F_176759374_kcm45VGAkoqILGSAwE8mhTbn3IuaoB8P.jpg" alt="Background image of donuts" className="donutBackground"/>
      <header>
        <h1>Welcome to Our Bakery</h1>
        <h3>Indulge in the Irresistible Goodness</h3>
      </header>
      <section className='specials-section'>
        <h2>Today's Specials</h2>
        <h3>Discover our daily specials and treat yourself to something extraordinary.</h3>
        <div className='specials-list'>
        
          <Link to='/donuts' className='special-item'>
            <img
              src='https://www.thecomfortofcooking.com/wp-content/uploads/2014/06/1.jpg'
              alt='Donut Special 1'
              className='special-image'
            />
            <h3>Lemon Poppyseed Donut</h3>
          </Link>
          <Link to='/donuts' className='special-item'>
            <img
              src='https://betterwithcake.com/wp-content/uploads/IMG_6551....jpg'
              alt='Donut Special 2'
              className='special-image'
            />
            <h3>Strawberry Cream Donut</h3>
          </Link>
        </div>
      </section>
      <footer>
        <h3>Explore more on our <Link to='/donuts'>Donuts page</Link>.</h3>
      </footer>
    </div>
  );
}
