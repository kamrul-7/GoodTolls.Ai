import React from 'react';

import { FaSearch } from 'react-icons/fa';
import './Hero.css'
const Hero = () => {
  return (
    <div className='text-center'>
      <div className="hero min-h-[491px]">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold hero-title ">We are listing the best AI
              <br /> tools Everyday.</h1>
            <p className="hero-subtitle my-6">Find the best AI tools for your needs. Go to the filter and choose your <br /> Category.  </p>
            <div className="relative input-container mx-auto w-[478px] h-[52px]">
              <div className='h-full w-full flex justify-between'>
                <input type="text" placeholder="Search" className="input w-full h-full bg-[#F3F4F6] focus:outline-0 pr-1" />
                <button className='px-5 py-auto h-full rounded-md bg-[#F3F4F6]'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.9998 18.8222L14.7815 13.6039C16.137 11.9461 16.8035 9.83066 16.643 7.69521C16.4826 5.55977 15.5075 3.56769 13.9195 2.13101C12.3314 0.69434 10.252 -0.0770085 8.11119 -0.023482C5.97039 0.0300445 3.93207 0.904351 2.41783 2.41859C0.903588 3.93283 0.0292815 5.97116 -0.024245 8.11195C-0.0777715 10.2527 0.693577 12.3322 2.13025 13.9202C3.56693 15.5083 5.55901 16.4833 7.69445 16.6438C9.82989 16.8042 11.9453 16.1378 13.6032 14.7822L18.8215 20.0006L19.9998 18.8222ZM8.33315 15.0006C7.01461 15.0006 5.72568 14.6096 4.62935 13.877C3.53302 13.1445 2.67854 12.1033 2.17395 10.8851C1.66937 9.66696 1.53735 8.32652 1.79458 7.03331C2.05182 5.74011 2.68676 4.55222 3.61911 3.61987C4.55146 2.68752 5.73934 2.05258 7.03255 1.79535C8.32576 1.53811 9.6662 1.67013 10.8844 2.17472C12.1025 2.6793 13.1437 3.53378 13.8763 4.63011C14.6088 5.72644 14.9998 7.01537 14.9998 8.33391C14.9978 10.1014 14.2948 11.796 13.045 13.0458C11.7952 14.2956 10.1007 14.9986 8.33315 15.0006Z" fill="#4D5761" />
                </svg>
                </button>
              </div>
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