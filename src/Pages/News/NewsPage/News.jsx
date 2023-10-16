import React from 'react';
import Footer from '../../../Component/Footer/Footer';
import NewsCard from '../NewsCard/NewsCard';
import './News.css'
const News = () => {
    return (
        <div className='news'>
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
                <p>News</p>
            </div>
            {/* News Section */}
            <div className='mx-10 my-10 mb-26 md:rounded-xl md:border news-div'>
                <div className='title mb-10'>
                    <p className='rs-title md:ms-10 md:mt-10 md:text-5xl'>Latest Our AI News & Articles</p>
                </div>
                <div className=' grid ms-2 me-2 md:grid-cols-2 gap-4 mt-2 max-w-screen-xl mx-auto'>
                <div className='news-card '>
                <div className='news-card-image'>
                    <img className='news-card-image' src="https://images.ctfassets.net/7bkqs8vgq34y/42mnpPRa0kPvgZ4tMynP9O/85562d29f3bc54d6c20c3ee4d211c2ca/Website_Insight_Adobe_An-AI-for-design.jpg?w=1200&h=800&fit=fill&f=faces" alt="" />
                </div>
                <div className='date'>
                    <p className='date-title' >Tools</p>
                    <div class="vertical-line"></div>
                    <p className='date-dates'>September 16, 2023</p>
                </div>
                <div className='sub-section'>
                    <p className='sub-text' >The Chapple AI News Update Video <span className='text-in-bracket' style={{ color: '#9DA4AE' }}>(Matt Wolfe YouTube)</span> </p>
                </div>
                <div className='text'>
                Elit rhoncus euismod scelerisque urna amet tristique risus. Nam faucibus nisl quam egestas. In arcu cursus ullamcorper in tellus. Sit lectus faucibus urna in et tempor viverra.
                </div>
                <div className='btn-section'>
                <button className='main-btn'>
                    Read More
                </button>
                </div>
            </div>
            <div className='news-card'>
                <div className='news-card-image'>
                    <img className='news-card-image' src="https://images.ctfassets.net/7bkqs8vgq34y/42mnpPRa0kPvgZ4tMynP9O/85562d29f3bc54d6c20c3ee4d211c2ca/Website_Insight_Adobe_An-AI-for-design.jpg?w=1200&h=800&fit=fill&f=faces" alt="" />
                </div>
                <div className='date'>
                    <p className='date-title' >Tools</p>
                    <div class="vertical-line"></div>
                    <p className='date-dates'>September 16, 2023</p>
                </div>
                <div className='sub-section'>
                    <p className='sub-text' >The Chapple AI News Update Video <span className='text-in-bracket' style={{ color: '#9DA4AE' }}>(Matt Wolfe YouTube)</span> </p>
                </div>
                <div className='text'>
                Elit rhoncus euismod scelerisque urna amet tristique risus. Nam faucibus nisl quam egestas. In arcu cursus ullamcorper in tellus. Sit lectus faucibus urna in et tempor viverra.
                </div>
                <div className='btn-section'>
                <button className='main-btn'>
                    Read More
                </button>
                </div>
            </div>
            <div className='news-card'>
                <div className='news-card-image'>
                    <img className='news-card-image' src="https://images.ctfassets.net/7bkqs8vgq34y/42mnpPRa0kPvgZ4tMynP9O/85562d29f3bc54d6c20c3ee4d211c2ca/Website_Insight_Adobe_An-AI-for-design.jpg?w=1200&h=800&fit=fill&f=faces" alt="" />
                </div>
                <div className='date'>
                    <p className='date-title' >Tools</p>
                    <div class="vertical-line"></div>
                    <p className='date-dates'>September 16, 2023</p>
                </div>
                <div className='sub-section'>
                    <p className='sub-text' >The Chapple AI News Update Video <span className='text-in-bracket' style={{ color: '#9DA4AE' }}>(Matt Wolfe YouTube)</span> </p>
                </div>
                <div className='text'>
                Elit rhoncus euismod scelerisque urna amet tristique risus. Nam faucibus nisl quam egestas. In arcu cursus ullamcorper in tellus. Sit lectus faucibus urna in et tempor viverra.
                </div>
                <div className='btn-section'>
                <button className='main-btn'>
                    Read More
                </button>
                </div>
            </div>
            <div className='news-card'>
                <div className='news-card-image'>
                    <img className='news-card-image' src="https://images.ctfassets.net/7bkqs8vgq34y/42mnpPRa0kPvgZ4tMynP9O/85562d29f3bc54d6c20c3ee4d211c2ca/Website_Insight_Adobe_An-AI-for-design.jpg?w=1200&h=800&fit=fill&f=faces" alt="" />
                </div>
                <div className='date'>
                    <p className='date-title' >Tools</p>
                    <div class="vertical-line"></div>
                    <p className='date-dates'>September 16, 2023</p>
                </div>
                <div className='sub-section'>
                    <p className='sub-text' >The Chapple AI News Update Video <span className='text-in-bracket' style={{ color: '#9DA4AE' }}>(Matt Wolfe YouTube)</span> </p>
                </div>
                <div className='text'>
                Elit rhoncus euismod scelerisque urna amet tristique risus. Nam faucibus nisl quam egestas. In arcu cursus ullamcorper in tellus. Sit lectus faucibus urna in et tempor viverra.
                </div>
                <div className='btn-section'>
                <button className='main-btn'>
                    Read More
                </button>
                </div>
            </div>
                </div>
            </div>
            <div className="flex mx-auto  justify-center .centered-div">
    <button className="btn-section main-btn">
        See More
    </button>
</div>

            <Footer />
        </div>
    );
};

export default News;