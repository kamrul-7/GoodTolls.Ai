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
                <div className='right w-7/12'>
                    <div className='date'>
                        <p className='date-title' >Tools</p>
                        <div className="vertical-line"></div>
                        <p className='date-dates'>{item.date}</p>
                    </div>
                    <div className='single-title mb-6'>
                        {item.newsTitle}
                    </div>
                    {/* {saiful er kahini } */}
                   <div className='h-[1200px] overflow-y-scroll hide-scrollbar'>
                   <div dangerouslySetInnerHTML={{ __html: item.newsBody }}>
                        
                    </div>
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
