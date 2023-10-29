import Ripples from 'react-ripples'
import './Hero.css'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
const Hero = ({ name, category, count, getSearchData, popularSub }) => {
  const [seartData, setSearchData] = useState('');
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');
  const [choice, setChoice] = useState('');
  // const [showSearch, setShowSearch] = useState(false);

  useEffect(() => setChoice(name), [name])

  useEffect(() => {
    fetch('https://api.goodtools.ai/subcategory')
      .then((res) => res.json())
      .then((data) => {
        const matchingItem = data.find((item) => item.SubCategory === name);
        setData(data);
        if (matchingItem) {
          setMessage(matchingItem.message);
        } else {
          setMessage('No matching data found');
        }
      });
  }, [name]);;

  const firstSixItem = data.slice(0, 6)
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
      {
        name && category ?
          <div className="breadcrumbs  mb-5 text-sm font-normal mx-6">
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>{category}</li>
              <li>{name}</li>
            </ul>
          </div> 
          : undefined
      }
      <div className='text-center'>
        <div className="hero min-h-[491px]">
          <div className="hero-content text-center">
            <div className="max-w-3xl">

              {
                name.length == 0 ?
                  <>
                    <h1 className="md:text-5xl text-4xl md:font-bold hero-title ">We are listing the best AI
                      <br /> tools Everyday.</h1>
                    <p className={`hero-subtitle my-6`}>Find the best AI tools for your needs. Go to the filter <br /> and choose your  Category.  </p>
                  </> :
                  <>
                    <h1 className="md:text-5xl md:w-[592px] text-4xl font-bold text-[#081120] text-center w-fit mx-auto mb-[35px]">Browse {count}+ Best AI {name} Tools</h1>
                    <div className='w-5/12 h-0 border-b border-[#E5E7EB] mx-auto mb-[45px]'></div>
                    <p className={`hero-subtitle my-6`}>{message}</p>
                  </>
              }

              <div className="relative input-container mx-auto lg:w-[478px] h-[52px] w-[343px]">
                <div onBlur={handleBlur} className='h-full w-full flex justify-between'>
                  <input onKeyUp={handleKeyPress} type="text" placeholder="Search" className="input w-full h-full bg-[#F3F4F6] focus:outline-0 pr-1" />
                  <div style={{ display: 'inline-flex', borderRadius: 8, overflow: 'hidden', }}>
                    <Ripples color="#bcc3c5">
                      <button onClick={handleSearch} className='px-5 py-auto rounded- h-full bg-[#F3F4F6]'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.9998 18.8222L14.7815 13.6039C16.137 11.9461 16.8035 9.83066 16.643 7.69521C16.4826 5.55977 15.5075 3.56769 13.9195 2.13101C12.3314 0.69434 10.252 -0.0770085 8.11119 -0.023482C5.97039 0.0300445 3.93207 0.904351 2.41783 2.41859C0.903588 3.93283 0.0292815 5.97116 -0.024245 8.11195C-0.0777715 10.2527 0.693577 12.3322 2.13025 13.9202C3.56693 15.5083 5.55901 16.4833 7.69445 16.6438C9.82989 16.8042 11.9453 16.1378 13.6032 14.7822L18.8215 20.0006L19.9998 18.8222ZM8.33315 15.0006C7.01461 15.0006 5.72568 14.6096 4.62935 13.877C3.53302 13.1445 2.67854 12.1033 2.17395 10.8851C1.66937 9.66696 1.53735 8.32652 1.79458 7.03331C2.05182 5.74011 2.68676 4.55222 3.61911 3.61987C4.55146 2.68752 5.73934 2.05258 7.03255 1.79535C8.32576 1.53811 9.6662 1.67013 10.8844 2.17472C12.1025 2.6793 13.1437 3.53378 13.8763 4.63011C14.6088 5.72644 14.9998 7.01537 14.9998 8.33391C14.9978 10.1014 14.2948 11.796 13.045 13.0458C11.7952 14.2956 10.1007 14.9986 8.33315 15.0006Z" fill="#4D5761" />
                      </svg>
                      </button>
                    </Ripples>
                  </div>

                </div>
              </div>
              <div className='popular-section'>
                <p className='popular-title mb-4'>Popular Categories</p>
                <div className='popular-item flex'>
                  {
                    firstSixItem.map((item, index) =>
                      <button key={index} name={`${item.Title}`} onClick={(event) => {
                        setChoice(`${item.Title}`)
                        handleClick(event, item.Title)
                      }} className={`item p-text me-4 ${choice === `${item.Title}` ? 'bg-gray-100' : 'bg-transparent'}`} style={{
        height: '34px', // Fixed height
        whiteSpace: 'nowrap', // Prevent text from wrapping
        overflow: 'hidden', // Hide text that exceeds the button
        padding: '-1px', 
        fontSize: '14px', // Adjust font size as needed
        textOverflow: 'ellipsis', // Add ellipsis for overflowing text
        whiteSpace: 'nowrap', // Prevent text from wrapping
        display: 'block',
        
      }}>{item.Title}</button>)
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;