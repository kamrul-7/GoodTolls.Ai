import React, { useEffect, useState } from 'react';
import './SingleNews.css'
import Footer from '../../Component/Footer/Footer';
import { useParams } from 'react-router-dom';

const SingleNews = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        // Make a GET request to your backend API to fetch the news item based on the `id`.
        fetch(`http://localhost:3000/news/${id}`)
            .then(response => response.json())
            .then(data => {
                // Update the state with the data for the specific news item.
                setItem(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
            
    }, [id]);

    if (!item) {
        return <div>Loading...</div>;
    }
console.log(item)
    

    return (
        <div className='mx-auto'>
        <div className='flex items-center mt[34px] ms-8'>
            <a href='/'>Home</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <g clip-path="url(#clip0_810_9466)">
                    <path d="M8.3332 5.5L7.1582 6.675L10.9749 10.5L7.1582 14.325L8.3332 15.5L13.3332 10.5L8.3332 5.5Z" fill="#6C737F" />
                </g>
                <defs>
                    <clipPath id="clip0_810_9466">
                        <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
                    </clipPath>
                </defs>
            </svg>
            <p>News Page</p>
        </div>
        {/* Single News Section */}
        <div className='mx-10 my-10 mb-26'>
            {/* Hero section */}
            <div className="hero mb-10 rounded-lg lg:h-[394px] mx-auto" style={{ backgroundImage: `url(http://localhost:3000/uploads/${item.image})` }}>
            </div>
            <div className='text-section '>
                {/* right-div */}
                <div className='right'>
                    <div className='date'>
                        <p className='date-title' >Tools</p>
                        <div className="vertical-line"></div>
                        <p className='date-dates'>{item.date}</p>
                    </div>
                    <div className='single-title mb-6'>
                        {item.newsTitle}
                    </div>
                    {/* {saiful er kahini } */}
                    <div className='single-text'>
                        Lorem ipsum dolor sit amet consectetur. Ligula et nec nibh habitant est egestas bibendum turpis. Vel nibh ridiculus quam tristique nunc tincidunt dui augue in. Tellus at nisi cras massa faucibus vitae. Ultrices dis viverra nisl laoreet interdum donec. Vitae aliquet convallis congue vestibulum elementum tempor ornare est euismod. At metus
                    </div>
                    <div className='mt-6 mb-6'>
                    {/* <img className='single-image' src={`http://localhost:3000/uploads/${item.image}`} alt={item.newsTitle} /> */}
                    </div>
                    <div className='single-text'>
                        Font polygon list follower draft auto vertical thumbnail pencil list. Library bold select list outline thumbnail group team polygon boolean. Vertical connection undo edit shadow asset select align link frame. Vertical move reesizing strikethrough inspect figjam shadow layer. Share boolean library mask text. Arrow boolean inspect duplicate.
                    </div>
                    <div className='single-heading mt-6'>
                        <p>Potential for 10x performance with AI</p>
                    </div>
                    <div className='single-text'>
                        Relatedly, areas in which humans are prone to error or are generally slow and inefficient (even when supported by software products) are most likely to benefit from AI approaches. For instance, in prior authorizations, a recent AMA survey found physicians and their staff spend approximately 14 hours per week completing PAs, while the GAO estimates that federal agencies made upwards of $128 billion worth of incorrect payments from Medicare and Medicaid to providers in 2022.
                    </div>
                    <div className='single-heading mt-6'>
                        <p>Areas with low adoption of software</p>
                    </div>
                    <div className='single-text'>
                        Healthcare enterprises are more likely to adopt AI if its cost benefit is at least an order of magnitude (and ideally more!) better than the status quo. Therefore, we’re likely to see a stronger opportunity in areas that have a low penetration of existing software tools, where AI cost benefit is being compared to human labor, versus software. For example, medical scribing is one of the areas where there appears to be high uptake of AI solutions because humans currently perform the majority of scribing tasks.
                    </div>

                </div>

                {/* Left Div */}
                <div className='left'>
                    <div className='small-blue-card'>
                        <div className='small-card-title'>
                            Explore all of our Ai tools now
                        </div>
                        <div className='small-card-text'>
                            Lorem ipsum dolor sit amet consectetur. Scelerisque tellus aliquet cursus faucibus sit neque duis senectus.
                            <button className='explore-btn explore-btn-text mt-6 '>
                                Explore Now
                            </button>
                        </div>
                    </div>
                    {/* Popular */}
                    <div className='category mt-10 mb-10'>
                       <div>Popular Categories</div> 
                       <div className='grid grid-cols-3 mt-4' >
                            <p className='category-item mb-4 '>hello</p>
                            <p className='category-item mb-4 '>hello</p>
                            <p className='category-item mb-4 '>hello</p>
                            <p className='category-item mb-4 '>hello</p>
                            <p className='category-item mb-4 '>hello</p>
                            <p className='category-item mb-4 '>hello</p>
                       </div>
                    </div>
                    <div className='category mt-10 mb-10'>
                       <div>Tags</div> 
                       <div className='grid grid-cols-3 mt-4' >
                            <p className='category-item mb-4 '>hello</p>
                            <p className='category-item mb-4 '>hello</p>
                            <p className='category-item mb-4 '>hello</p>
                            <p className='category-item mb-4 '>hello</p>
                            <p className='category-item mb-4 '>hello</p>
                            <p className='category-item mb-4 '>hello</p>
                       </div>
                    </div>
                </div>
            </div>

            <div className='large-card mt-10 mb-40 mx-auto'>
            <div className='large-right'>
            Let’s Contact With Us.
            </div>
            <div className='vertical'>  
            </div>
            <div  className='large-left'>  
            <div className='small-card-text'>
                            Lorem ipsum dolor sit amet consectetur. Scelerisque tellus aliquet cursus faucibus sit neque duis senectus.
                            <button className='explore-btn explore-btn-text mt-6 '>
                                Explore Now
                            </button>

                        </div>
            </div>
        </div>
        </div>

    </div>
);
};


export default SingleNews;
