import React from 'react';
import { RiHome3Line } from 'react-icons/ri';
import './Db.css'
const Db = () => {
    return (
        <div className='db-section mt-8 mx-3'>
            <div className='title-section'>
                <div className='mini-title flex items-center '>
                    <RiHome3Line style={{ height: '24px', width: '24px' }}></RiHome3Line>
                    <svg className='mx-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="#D0D5DD" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p>Dashboard</p>
                </div>
                <div className='title'>
                    Dashboard
                </div>
                <div className='month-section'>
                    <div className='month flex'>
                        <div className='month-btn'>12month</div>
                        <div className='month-btn'>30days</div>
                        <div className='month-btn'>7days</div>
                        <div className='month-btn'>24hour</div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className='Card-section'>
                    <div className='card'>
                        <div className='single-card'>
                            <div className='card-title'>
                                Categories
                            </div>
                            <div className='number'>
                                6
                            </div>
                        </div>
                        <div className='single-card'>
                            <div className='card-title'>
                                Sub Categories
                            </div>
                            <div className='number'>
                                6
                            </div>
                        </div>
                        <div className='single-card'>
                            <div className='card-title'>
                                Tools
                            </div>
                            <div className='number'>
                                6
                            </div>
                        </div>
                        <div className='single-card'>
                            <div className='card-title'>
                                News
                            </div>
                            <div className='number'>
                                6
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Db;