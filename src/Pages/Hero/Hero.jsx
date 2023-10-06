import React from 'react';

import { FaSearch } from 'react-icons/fa';
import './Hero.css'
const Hero = () => {
  return (
    <div className='text-center flex'>
      <div className="hero min-h-[491px] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold hero-title ">We are listing the best AI 
           <br /> tools Everyday.</h1>
            <p className="hero-subtitle my-6">Find the best AI tools for your needs. Go to the filter and choose your <br /> Category.  </p>
            <div className="input-container  relative text-center mx-auto">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Search" className="input input-ghost mt-11 w-full max-w-xs" />
            </div>
            <div className='popular-section'>
                <p className='popular-title mb-4'>Popular Categories</p>
                <div className='popular-item flex'>
                  <div className='item me-4'><p className='p-text'>Audio Edit</p></div>
                  <div className='item me-4'><p className='p-text'>Github</p></div>
                  <div className='item me-4'><p className='p-text'>Image Improvent</p></div>

                  <div className='item me-4'><p className='p-text'>Ai Detection</p></div>

                  <div className='item me-4'><p className='p-text'>Generative Code</p></div>
                  <div className='item me-4'><p className='p-text'>Inspiration</p></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;