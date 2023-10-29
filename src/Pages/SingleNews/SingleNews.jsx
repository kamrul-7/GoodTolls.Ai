import React, { useContext, useEffect, useState } from 'react';
import './SingleNews.css'
import Footer from '../../Component/Footer/Footer';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const SingleNews = () => {
    const tmpStoreKeyNews = 'ToolsFinder(GoodToolsAi)RegularStoring:_newsId';
    const [item, setItem] = useState(null);
    const [cata, setCata] = useState(null);
    const [newsId, setNewsId] = useState('');


    useEffect(() => {
        const storedNewsId = JSON.parse(sessionStorage.getItem(tmpStoreKeyNews))
        if (storedNewsId) {
            fetch(`http://localhost:3000/news/${storedNewsId}`)
                .then(response => response.json())
                .then(data => {
                    // Update the state with the data for the specific news item.
                    setItem(data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
        // Make a GET request to your backend API to fetch the news item based on the `id`.



    }, []);

    useEffect(() => {
        fetch(`https://api.goodtools.ai/category`)
            .then(response => response.json())
            .then(data => {
                setCata(data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    if (!item) {
        return <span className="loading loading-ring md:w-40 md:h-40 w-20 h-20 md:ml-[45%] ml-[45%] md:my-40 my-20"></span>;
    }

    return (
        <div className='mx-auto font-paragraph '>
            <div className='flex items-center ml-2'>
                <a href='/'>Home</a>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <g clipPath="url(#clip0_810_9466)">
                        <path d="M8.3332 5.5L7.1582 6.675L10.9749 10.5L7.1582 14.325L8.3332 15.5L13.3332 10.5L8.3332 5.5Z" fill="#6C737F" />
                    </g>
                    <defs>
                        <clipPath id="clip0_810_9466">
                            <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
                        </clipPath>
                    </defs>
                </svg>
                <p >News Page</p>
            </div>
            {/* Single News Section */}
            <div className='p-4'>
                <div className='md:p-10 px-4 pt-4 pb-7 my-4 mb-26 border-[#E5E7EB] border rounded-2xl'>
                    {/* Hero section */}
                    <div className="hero mb-10 rounded-lg md:h-[394px] h-[210px] mx-auto" style={{ backgroundImage: `url(https://api.goodtools.ai/uploads/${item.image})` }}>
                    </div>
                    <div className='md:grid md:grid-cols-2 '>
                        {/* right-div */}
                        <div className=' md:w-[752px]'>
                            <div className='date'>
                                <p className='date-title font-medium text-xl' >Tools</p>
                                <div className="vertical-line"></div>
                                <p className='date-dates'>{item.date}</p>
                            </div>
                            <div className='single-title mb-6 font-title'>
                                {item.newsTitle}
                            </div>
                            {/* {saiful er kahini } */}
                            <div className='hide-scrollbar'>
                                <div dangerouslySetInnerHTML={{ __html: item.newsBody }}>

                                </div>
                            </div>

                        </div>

                        {/* Left Div */}
                        <div className='md:w-[398px] w-full md:ml-44 mx-auto md:mx-0 mt-7 md:mt-0'>
                            <div className='small-blue-card'>
                                <div className='small-card-title font-title'>
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


                            <div className='category mt-8 mb-10 md:ml-8 text-xl font-paragraph font-medium'>
                                <div className='text-xl font-paragraph font-normal'>Popular Categories</div>
                                <div className='grid md:grid-cols-2 grid-cols-2 gap-2 mt-2 md:w-96 text-lg font-normal w-full p-2'>
                                    {cata?.map((subItem, index) => (
                                        <p style={{textOverflow: 'ellipsis', overflow:'hidden'}} className='h-fit border rounded-3xl text-center mb-4 py-1 font-paragraph font-normal text-sm' key={index}>{subItem.Title}</p>
                                    ))}
                                </div>
                            </div>



                            <div className='category mt-8 mb-10 md:ml-8'>
                                <div className='font-paragraph font-medium text-xl'>Tags</div>
                                <div className='grid md:grid-cols-3 grid-cols-2 gap-2  mt-2 md:w-96 text-lg font-normal w-full p-2 font-paragraph' >
                                    <p className='border rounded-3xl text-center mb-4 py-1 font-paragraph font-normal text-sm'>Ai Detection</p>
                                    <p className='border rounded-3xl text-center mb-4 py-1 font-paragraph font-normal text-sm '>Github</p>
                                    <p className='border rounded-3xl text-center mb-4 py-1 font-paragraph font-normal text-sm'>Image</p>
                                    <p className='border rounded-3xl text-center mb-4 py-1 font-paragraph font-normal text-sm'>Machine</p>
                                    <p className='border rounded-3xl text-center mb-4 py-1 font-paragraph font-normal text-sm'>Inspiration</p>
                                    <p className='border rounded-3xl text-center mb-4 py-1 font-paragraph font-normal text-sm'>Code</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='large-card md:mt-10 mb-15'>
                        <div className='large-right font-title '>
                            <p className='font font-bold text-4xl' >Let’s Contact With Us.</p>
                        </div>
                        <div className='vertical'>
                        </div>
                        <div className='large-left'>
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

        </div>
    );
};


export default SingleNews;