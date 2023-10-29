import React, { useContext, useEffect, useState } from "react";
import Footer from "../../../Component/Footer/Footer";
import NewsCard from "../NewsCard/NewsCard";
import "./News.css";
import { Link } from "react-router-dom";
import slugify from "slugify";
import { AuthContext } from "../../Context/AuthProvider";
const News = () => {
  const { storeNewsId } = useContext(AuthContext);
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This code will run when the component mounts

    // Make a GET request to your backend API
    fetch("https://api.goodtools.ai/news")
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the data from the backend
        setNews(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    //         <div className='news mb-8'>
    //             <div className='flex items-center mt[34px] ms-8'>
    //                 <a href='/'>Home</a>
    //                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
    //                     <g clipPath="url(#clip0_810_9466)">
    //                         <path d="M8.3332 5.5L7.1582 6.675L10.9749 10.5L7.1582 14.325L8.3332 15.5L13.3332 10.5L8.3332 5.5Z" fill="#6C737F" />
    //                     </g>
    //                     <defs>
    //                         <clipPath id="clip0_810_9466">
    //                             <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
    //                         </clipPath>
    //                     </defs>
    //                 </svg>
    //                 <p>News</p>
    //             </div>
    //             {/* News Section */}
    //             <div className=' my-4 md:mt-10  md:mb-26 md:rounded-xl md:pl-16 border p-8 news-div'>
    //                 <div className='title mb-10'>
    //                     <p className='rs-title md:ms-10 mt-10 my-12 md:text-5xl'>Latest Our AI News & Articles</p>
    //                 </div>
    //                 <div className=' grid ms-2 me-2 md:grid-cols-2 gap-4 mt-2 max-w-screen-xl mx-auto'>
    // {
    //     isLoading ?
    //     <span className="loading loading-ring md:w-40 md:h-40 w-20  md:ml-[90%] ml-[50%] mb-10 mt-5"></span>
    //     :news.map((item,index)=> <Link key={index} onClick={()=>storeNewsId(item._id)} to={`/news/${slugify(item.newsTitle)}`} >
    //     <div className='news-card '>
    //     <div className='news-card-image'>
    //         <img className='news-card-image' src={`https://api.goodtools.ai/uploads/${item.image}`} alt="" />
    //     </div>
    //     <div className='date'>
    //         <p className='date-title' >Tools</p>
    //         <div className="vertical-line"></div>
    //         <p className='date-dates'>{item.date}</p>
    //     </div>
    //     <div className='sub-section'>
    //         <p className='sub-text' > {item.newsTitle}  </p>
    //     </div>
    //     <div className='text '
    //     dangerouslySetInnerHTML={{ __html: (item?.newsBody?.replace(/["\n]/g, '') || '').replace(/<img(.)*>/g,'<p></p>').split(' ').slice(0, 20).join(' ') }}>

    //     </div>
    //     <div className='btn-section'>
    //     <button className='main-btn'>
    //     Read More
    //     </button>
    //     </div>
    // </div></Link>)
    // }

    //                 </div>
    //             </div>
    //             <div className="flex mx-auto mb-8 justify-center .centered-div">
    //     <button className="btn-section main-btn">
    //         See More
    //     </button>
    // </div>

    //         </div>
    <div className="font-paragraph">
      <div className="flex  ms-2 items-center pb-4 mt[34px] my-4 ml-2">
        <a href="/">Home</a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <g clipPath="url(#clip0_810_9466)">
            <path
              d="M8.3332 5.5L7.1582 6.675L10.9749 10.5L7.1582 14.325L8.3332 15.5L13.3332 10.5L8.3332 5.5Z"
              fill="#6C737F"
            />
          </g>
          <defs>
            <clipPath id="clip0_810_9466">
              {" "}
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <p>News</p>
      </div>
      <div className=" border p-4 pb-8 md:pl-16 m-2 rounded-lg">
        <div className=" my-4  mx-auto md:mt-10  md:mb-26 md:rounded-xl md:pl-16">
          <div className="title  ">

            <p className="rs-title   md:ms-10 mt-10 my-12 md:text-5xl">
            <p className="rs-title md:ms-10 mt-10 my-12 text-3xl md:text-5xl font-bold font-title">

              Latest Our AI News & Articles
            </p>
            </p>
          </div>
        </div>

        <div className=" grid  md:grid-cols-2 gap-12 mt-2 mx-auto  md:pr-12 font-title">
          {isLoading ? (
            <span className=" md:w-40 md:h-40 w-20  mb-10 mt-5"></span>
          ) : (
            news.map((item, index) => (
              <Link
                key={index}
                onClick={() => storeNewsId(item._id)}
                to={`/news/${slugify(item.newsTitle)}`}
              >
                <div className="p-8 mx-auto  rounded-xl shadow-lg">
                  <div className="news-card-image">
                    <img
                      className="news-card-image "
                      src={`https://api.goodtools.ai/uploads/${item.image}`}
                      alt=""
                    />
                  </div>
                  <div className="date mt-6">
                    <p className="date-title font-medium font-paragraph text-xl">Tools</p>
                    <div className="vertical-line"></div>
                    <p className="date-dates">{item.date}</p>
                  </div>
                  <div className="sub-section mt-4">
                    <p className="sub-text font-title font-bold md:text-2xl"> {item.newsTitle} </p>
                  </div>
                  <div
                    className="text mt-4 mb-4"
                    dangerouslySetInnerHTML={{
                      __html: (item?.newsBody?.replace(/["\n]/g, "") || "")
                        .replace(/<img(.)*>/g, "<p></p>")
                        .split(" ")
                        .slice(0, 20)
                        .join(" "),
                    }}
                  ></div>
                  <div className="btn-section md:w-44">
                    <button className="md:w-44">Read More</button>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default News;