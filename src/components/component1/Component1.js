import React from 'react';
import { NavLink } from 'react-router-dom';

// styles
import './Component1.css';

const Component1 = () => (
  <div>
    <section className='section1-container'>
      <h1>Welcome to Bodhi Farm Hydroponics Cannabis Lab</h1>
    </section>

    <section className='section2-container'>
      <h2>Who are we?</h2>
      <p>We are a fully Licensed  Local Producer of premium craft cannabis located in Lamphun.
      We strive to produce consistent superior quality, pesticide-free, affordable cannabis. We achieve this by growing without soil. We treat our water on site through a three step process of reverse osmosis, distillation, and softening.</p>
      <p>We are currently working in conjunction with both local, and international universities to conduct   research, and assist in the implementation of both modern, and ancient methods of sustainable agriculture.</p>
      <p>Everyone is welcome to our farm! Get high!. Save the World!</p>

      <NavLink to="option1">Learn More</NavLink>
    </section>

    <section className='section3-container'>
      <h2>What can we help you with?</h2>

      <div className="section3-options">
        <div className="section3-option">
          <img src="https://picsum.photos/200" alt="random" />
          <div>
            <h3>Subject 1</h3>
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
              <li>item 4</li>
              <li>item 5</li>
            </ul>
          </div>
        </div>

        <div className="section3-option">
          <img src="https://picsum.photos/200" alt="random" />
          <div>
            <h3>Subject 2</h3>
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
              <li>item 4</li>
              <li>item 5</li>
            </ul>
          </div>
        </div>

        <div className="section3-option">
          <img src="https://picsum.photos/200" alt="random" />
          <div>
            <h3>Subject 3</h3>
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
              <li>item 4</li>
              <li>item 5</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className='section4-container'>
      4
    </section>
  </div>
);

export default Component1;
