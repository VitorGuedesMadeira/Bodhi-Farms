/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

// styles
import './Component1.css';
import '../../shared/shared.css';

const Component1 = () => (
  <div>
    <section className="section1-container">
      <span
        data-aos="fade-right"
        data-aos-anchor-placement="top-center"
        data-aos-delay="300"
      >
        Welcome to
      </span>
      <h1
        data-aos="fade"
        data-aos-anchor-placement="top"
        data-aos-delay="500"
      >
        Bodhi Farm
      </h1>
      <h3
        data-aos="fade-left"
        data-aos-anchor-placement="top-center"
        data-aos-delay="700"
        data-aos-offset="-100"
      >
        Hydroponics Cannabis Lab
      </h3>
    </section>

    <section className="section2-container">
      <div
        className="section2-container__divs"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <div className="section2-container__text-1">
          <h2>Who are we?</h2>
          <p>We are a fully Licensed  Local Producer of premium craft cannabis located in Lamphun.</p>
          <p>We strive to produce consistent superior quality, pesticide-free, affordable cannabis. We achieve this by growing without soil. We treat our water on site through a three step process of reverse osmosis, distillation, and softening.</p>
          <p>We are currently working in conjunction with both local, and international universities to conduct   research, and assist in the implementation of both modern, and ancient methods of sustainable agriculture.</p>
          <p>Everyone is welcome to our farm! Get high! Save the World!</p>
        </div>
        <div className="section2-container__image-1">image 1</div>
        <div className="section2-container__image-2">image 2</div>
        <div className="section2-container__text-2">
          <p>We are a fully Licensed  Local Producer of premium craft cannabis located in Lamphun.</p>
          <p>We strive to produce consistent superior quality, pesticide-free, affordable cannabis. We achieve this by growing without soil. We treat our water on site through a three step process of reverse osmosis, distillation, and softening.</p>
          <p>We are currently working in conjunction with both local, and international universities to conduct   research, and assist in the implementation of both modern, and ancient methods of sustainable agriculture.</p>
          <p>Everyone is welcome to our farm! Get high! Save the World!</p>
        </div>
      </div>
      <NavLink
        className="btn"
        to="option1"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        Learn More
        <div className="btn2" />
      </NavLink>
    </section>

    <section className="section3-container">
      <h2
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        What can we help you with?
      </h2>

      <div
        className="section3-options"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <div className="section3-option">
          <div className="section3-option-image-div">
            <img src="https://picsum.photos/350" alt="random" />
          </div>
          <div className="section3-option-information">
            <h3>Compliance</h3>
            <ul>
              <li>
                <span><FaAngleRight className="right-icon" /></span>
                <span>ODC Medical Cannabis Licensing</span>
              </li>
              <li>
                <span><FaAngleRight className="right-icon" /></span>
                <span>TGA CGMP, GAP & ISO Certification</span>
              </li>
              <li>
                <span><FaAngleRight className="right-icon" /></span>
                <span>Medical Device Registration</span>
              </li>
              <li>
                <span><FaAngleRight className="right-icon" /></span>
                <span>Pharmaceutical Formulation Development</span>
              </li>
            </ul>
            <NavLink className="btn" to="option1">
              Learn More
              <div className="btn2" />
            </NavLink>
          </div>
        </div>

        <div className="section3-option">
          <div className="section3-option-image-div">
            <img src="https://picsum.photos/350" alt="random" />
          </div>
          <div className="section3-option-information">
            <h3>Operations</h3>
            <ul>
              <li>
                <span><FaAngleRight className="right-icon" /></span>
                <span>Infrastructure & Building Solutions</span>
              </li>
              <li>
                <span><FaAngleRight className="right-icon" /></span>
                <span>Facility Design & Equipment Procurement</span>
              </li>
              <li>
                <span><FaAngleRight className="right-icon" /></span>
                <span>Genetic Curatorial & Acquisition</span>
              </li>
              <li>
                <span><FaAngleRight className="right-icon" /></span>
                <span>Contract Services Solutions</span>
              </li>
            </ul>
            <NavLink className="btn" to="option1">
              Learn More
              <div className="btn2" />
            </NavLink>
          </div>
        </div>

        <div className="section3-option">
          <div className="section3-option-image-div">
            <img src="https://picsum.photos/350" alt="random" />
          </div>
          <div className="section3-option-information">
            <h3>Equities</h3>
            <ul>
              <li>
                <span><FaAngleRight className="right-icon" /></span>
                <span>Capital Solutions</span>
              </li>
              <li>
                <span><FaAngleRight className="right-icon" /></span>
                <span>Deal Flow & Off-Take Agreements</span>
              </li>
              <li>
                <span><FaAngleRight className="right-icon" /></span>
                <span>Mergers & Acquisitions</span>
              </li>
              <li>
                <span><FaAngleRight className="right-icon" /></span>
                <span>Domestic & International Partnerships</span>
              </li>
            </ul>
            <NavLink className="btn" to="option1">
              Learn More
              <div className="btn2" />
            </NavLink>
          </div>
        </div>
      </div>
    </section>

    <section className="fixed-backgrounds-container">
      <div className="fixed-background-1" />
      <div className="fixed-background-2" />
      <div className="fixed-background-3" />
    </section>

    <section className="section4-container">
      <h2
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        Meet our team!
      </h2>
      <div
        className="section4-wrap"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <div className="section4-team-member">
          <img src="https://picsum.photos/200" alt="random" />
          <div className="section4-div">
            <div className="section4-member-titles">
              <h3>Name</h3>
              <h4>Profession</h4>
            </div>
            <p>Text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>
          </div>
        </div>

        <div className="section4-team-member">
          <img src="https://picsum.photos/200" alt="random" />
          <div className="section4-div">
            <div className="section4-member-titles">
              <h3>Name</h3>
              <h4>Profession</h4>
            </div>
            <p>Text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>
          </div>
        </div>

        <div className="section4-team-member">
          <img src="https://picsum.photos/200" alt="random" />
          <div className="section4-div">
            <div className="section4-member-titles">
              <h3>Name</h3>
              <h4>Profession</h4>
            </div>
            <p>Text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>
          </div>
        </div>

        <div className="section4-team-member">
          <img src="https://picsum.photos/200" alt="random" />
          <div className="section4-div">
            <div className="section4-member-titles">
              <h3>Name</h3>
              <h4>Profession</h4>
            </div>
            <p>Text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>
          </div>
        </div>
      </div>

      <NavLink
        className="btn"
        to="option1"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        Learn More
        <div className="btn2" />
      </NavLink>
    </section>

    <section className="section5-container">
      <div
        className="section5-texts"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <h2>Contact us</h2>
        <p>Interested in finding out more about the Australian Medical Cannabis industry? Need help around Australian Government cannabis legislation? Or require support for an ongoing Medical Cannabis project? Contact us today to find out how we can help you.</p>
      </div>
      <form
        action="https://formspree.io/f/mdovakbk"
        method="post"
        className="form"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <input
          type="text"
          name="name"
          required
          maxLength="30"
          placeholder="Full Name"
        />
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Email address"
        />
        <textarea
          name="message"
          cols="30"
          rows="7"
          maxLength="500"
          required
          placeholder="Enter text here"
        />
        <small />
        <button className="btn" type="submit">
          Get in touch
          <div className="btn2" />
        </button>
      </form>
    </section>
  </div>
);

export default Component1;
