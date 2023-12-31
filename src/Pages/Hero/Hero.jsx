import Ripples from 'react-ripples'
import './Hero.css'
import { useSwipeable } from 'react-swipeable';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
const Hero = ({ name, category, count, getSearchData, popularSub }) => {
  const [seartData, setSearchData] = useState('');
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');
  const [choice, setChoice] = useState('');
  // const [showSearch, setShowSearch] = useState(false);
  const firstSixItem = data;
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const maxStartIndex = Math.max(firstSixItem.length - 7, 0); // Ensure it doesn't go negative
   const handlers = useSwipeable({
    onSwipedLeft: () => setVisibleStartIndex(prev => Math.min(prev + 7, maxStartIndex)),
    onSwipedRight: () => setVisibleStartIndex(prev => Math.max(prev - 7, 0)),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  useEffect(() => setChoice(name), [name])

  useEffect(() => {
    fetch('http://localhost:3000/allsubcategories')
      .then((res) => res.json())
      .then((data) => {

        setData(data);
        console.log(data);
      });
  }, []);
  useEffect(() => {
    const matchingItem = data.find((item) => item.SubCategory === name);
    if (matchingItem) {
      setMessage(matchingItem.message);
    } else {
      setMessage('No matching data found');
    }
  }, [name])

  let startPos = null;
  console.log(firstSixItem.length);
  const handleKeyPress = (e) => {
    if (e.key !== "Enter") {
      setSearchData(e.target.value)
      // setShowSearch(false)
    } else {
      if (seartData.length !== 0) {
        getSearchData(seartData)
      }
    }
  }

  const handleSearch = () => {
    if (seartData.length !== 0) {
      getSearchData(seartData)
    }
  }


  const handleBlur = () => {
    if (seartData.length == 0) {
      getSearchData('')
    }
  }

  // useEffect(() => {
  //   fetch(`https://api.goodtools.ai/sub/${name}`)
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }, [name])

  // useEffect(() => {
  //   fetch(`https://api.goodtools.ai/sub/${name}`)
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }, [name])


  const handleClick = (event, value) => {

    if (event.target.name != choice) {
      popularSub(value)
    } else {
      setChoice('')
      popularSub('')
    }

  }

  return (
    <div>
      <div className='text-center '>
        <div className=" h-fit p-0">
          <div className="hero-content text-center p-0">
            <div className="max-w-3xl p-0">

              {
                name.length == 0 ?
                  <>
                    <h1 className="md:text-[56px] text-4xl md:font-bold hero-title mb-6">We are listing the best AI
                      <br /> tools Everyday.</h1>
                    <p className={`hero-subtitle font-paragraph md:mb-11 mb-6`}>Find the best AI tools for your needs. Go to the filter <br /> and choose your  Category.  </p>
                  </> :
                  <>
                    <h1 className="md:text-5xl md:w-[592px] text-4xl font-bold text-[#081120] text-center w-fit mx-auto md:mb-6 mb-4">Browse {count}+ Best AI {name} Tools</h1>
                    <div className='w-5/12 h-0 border-b border-[#E5E7EB] mx-auto md:mb-6 mb-4'></div>
                    <p className={`hero-subtitle md:mb-11 mb-6`}>{message}</p>
                  </>
              }

              <div className=" relative input-container mx-auto md:w-[478px] h-[52px] w-full">
                <div onBlur={handleBlur} className='h-full w-full flex justify-between'>
                  <input onKeyUp={handleKeyPress} type="text" placeholder="Search" className="border-0 w-full focus:ring-0 bg-[#F3F4F6] focus:outline-0 text-base font-paragraph my-[14px] ml-6" />
                  <div className='' >
                    {/* <Ripples color="#bcc3c5"> */}
                      <button onClick={handleSearch} className=' py-auto h-full w-full pr-6 pl-4 bg-[#F3F4F6] rounded-2xl'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_793_4357)">
                            <path d="M19.9998 18.8222L14.7815 13.6039C16.137 11.9461 16.8035 9.83066 16.643 7.69521C16.4826 5.55977 15.5075 3.56769 13.9195 2.13101C12.3314 0.69434 10.252 -0.0770085 8.11119 -0.023482C5.97039 0.0300445 3.93207 0.904351 2.41783 2.41859C0.903588 3.93283 0.0292815 5.97116 -0.024245 8.11195C-0.0777715 10.2527 0.693577 12.3322 2.13025 13.9202C3.56693 15.5083 5.55901 16.4833 7.69445 16.6438C9.82989 16.8042 11.9453 16.1378 13.6032 14.7822L18.8215 20.0006L19.9998 18.8222ZM8.33315 15.0006C7.01461 15.0006 5.72568 14.6096 4.62935 13.877C3.53302 13.1445 2.67854 12.1033 2.17395 10.8851C1.66937 9.66696 1.53735 8.32652 1.79458 7.03331C2.05182 5.74011 2.68676 4.55222 3.61911 3.61987C4.55146 2.68752 5.73934 2.05258 7.03255 1.79535C8.32576 1.53811 9.6662 1.67013 10.8844 2.17472C12.1025 2.6793 13.1437 3.53378 13.8763 4.63011C14.6088 5.72644 14.9998 7.01537 14.9998 8.33391C14.9978 10.1014 14.2948 11.796 13.045 13.0458C11.7952 14.2956 10.1007 14.9986 8.33315 15.0006Z" fill="#4D5761" />
                          </g>
                          <defs>
                            <clipPath id="clip0_793_4357">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>

                      </button>
                    {/* </Ripples> */}
                  </div>

                </div>
              </div>
              <div className='popular-section md:mt-6 mt-4 max'>
                <p className='popular-title mb-4 font-paragraph h-6 text-base'>Popular Categories</p>

                <div className='flex items-center md:gap-6 gap-2 cata'>
                  {/* <button className='flex md:w-11 md:h-11 justify-center p-[var(--spacing-md,8px)] items-center gap-2.5  rounded-[100px] border border-[var(--neutral-300,#D2D6DB)]' onClick={() => setVisibleStartIndex(prev => Math.max(prev - 1, 0))}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 25 24" fill="none">
                      <path d="M10.07 5.92999L4 12L10.07 18.07" stroke="#D2D6DB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M21 12H4.17001" stroke="#D2D6DB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button> */}

                  <div className=''> {/* Main Wrapper */}
                    <div>
                      <div
                        className='items-container md:w-[781px]'
                        style={{
                          // 6 items of 110px each
                          overflow: 'hidden' // Ensure children don't overflow
                        }}
                      >
                        <div className='popular-item flex md:gap-4 gap-2 my-1 justify-center' {...handlers}
                          style={{ transform: `translateX(-${visibleStartIndex * 110}px)` }}>
                          {firstSixItem.map((item, index) => (
                            <button
                              key={index}
                              name={`${item.SubCategory}`}
                              onClick={(event) => {
                                setChoice(`${item.SubCategory}`);
                                handleClick(event, item.SubCategory);
                              }}
                              className={`item cursor-pointer hover:scale-105 ease-in-out duration-30 'hidden'p-text px-4 py-auto ${choice === `${item.SubCategory}` ? 'bg-gray-100' : 'bg-transparent'}`}
                              style={{
                                height: 'fit-content',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                padding: '-1px',
                                fontSize: '14px',
                                textOverflow: 'ellipsis',
                                display: `${index < visibleStartIndex || index >= visibleStartIndex + 6 ? 'none' : 'block'}`,
                              }}
                            >
                              {item.SubCategory}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>


                  {/* <button className='flex md:w-11 md:h-11 justify-center p-[var(--spacing-md,8px)] items-center gap-2.5  rounded-[100px] border border-[var(--neutral-300,#D2D6DB)]' onClick={() => setVisibleStartIndex(prev => Math.min(prev + 1, maxStartIndex))}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                      <path d="M14.9301 5.92999L21.0001 12L14.9301 18.07" stroke="#6C737F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M4 12H20.83" stroke="#6C737F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button> */}
                </div>

              </div>

              {/* ... Rest of your component */}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Hero;