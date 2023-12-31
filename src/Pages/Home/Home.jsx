
import Card from '../Card/Card';
import Hero from '../Hero/Hero';
import Filter from '../Filter/Filter';
import { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom"
import CookiePopup from '../../Component/Popup/Popup';
import './Home.css'


const Home = () => {
    const [total, setTotal] = useState(0)
    const [selectedSub, setSelectedSub] = useState('')
    const [searchData, setSearchData] = useState('');
    const [selectedPopular, setSelectedPopular] = useState('')
    const [sortOption, setSortOption] = useState('All')
    const [category, setCategory] = useState('')
    const decoration = x => {
        let str = x + ""
        const c = str.length % 3
        let res = ''
        if (c != 0) {
            const sub = str.substring(c, str.length)
            res = str.substring(0, c)
            const divs = sub.match(/.{1,3}/g) || [];
            for (let i = 0; i < divs.length; i++) {
                res += ',' + divs[i]
            }

        } else {
            const divs = str.match(/.{1,3}/g) || [];
            res = divs[0];
            for (let i = 1; i < divs.length; i++) {
                res += ',' + divs[i]
            }

        }
        return res
    }

    const handleSelectPopularSubmit = (value) => {
        setSelectedPopular(value)
    }

    const handleSubSubmit = (value, category) => {
        setSelectedSub(value)
        setCategory(category)
    }

    const getToolsCount = (value) => {
        setTotal(value);
    }



    useEffect(() => {
        if (sortOption === 'All') {
            document.getElementById('All').checked = true;
            document.getElementById('Free').checked = false;
            document.getElementById('Premium').checked = false;
            document.getElementById('Paid').checked = false;
        }
        else if (sortOption === 'Free') {
            document.getElementById('Free').checked = true;
            document.getElementById('All').checked = false;
            document.getElementById('Premium').checked = false;
            document.getElementById('Paid').checked = false;
        }
        else if (sortOption === 'Premium') {
            document.getElementById('Premium').checked = true;
            document.getElementById('All').checked = false;
            document.getElementById('Free').checked = false;
            document.getElementById('Paid').checked = false;
        }
        else if (sortOption === 'Paid') {
            document.getElementById('Paid').checked = true;
            document.getElementById('All').checked = false;
            document.getElementById('Free').checked = false;
            document.getElementById('Premium').checked = false;
        }
    }, [sortOption])

    const handleChecked = (event) => {
        if (event.target.name === 'All' && event.target.checked) {
            document.getElementById('Free').checked = false;
            document.getElementById('Premium').checked = false;
            document.getElementById('Paid').checked = false;
            setSortOption(event.target.name)
        }
        else if (event.target.name === 'Free' && event.target.checked) {
            document.getElementById('All').checked = false;
            document.getElementById('Premium').checked = false;
            document.getElementById('Paid').checked = false;
            setSortOption(event.target.name)
        }
        else if (event.target.name === 'Premium' && event.target.checked) {
            document.getElementById('All').checked = false;
            document.getElementById('Free').checked = false;
            document.getElementById('Paid').checked = false;
            setSortOption(event.target.name)
        }
        else if (event.target.name === 'Paid' && event.target.checked) {
            document.getElementById('All').checked = false;
            document.getElementById('Free').checked = false;
            document.getElementById('Premium').checked = false;
            setSortOption(event.target.name)
        } else if (!event.target.checked) {
            document.getElementById('All').checked = true;
            document.getElementById('Free').checked = false;
            document.getElementById('Premium').checked = false;
            document.getElementById('Paid').checked = false;
            setSortOption('All')
        }

    }

    const getSearchData = (data) => {
        if (data !== searchData) {
            setSearchData(data)
        }
    }



    return (
        <div className=''>
            {
                selectedSub && category ?
                    <div className="breadcrumbs py-0 text-sm font-normal mx-4 md:mx-0">
                        <ul>
                            <li className='text-[#081120] font-paragraph text-sm'>
                                <Link to='/home'>Home</Link>
                            </li>
                            <li className='text-[#081120] font-paragraph text-sm'>{category}</li>
                            <li className='text-[#6C737F] font-paragraph text-sm'>{selectedSub}</li>
                        </ul>
                    </div>
                    : undefined
            }
            <div className={selectedSub && category ? 'mx-4 md:mt-[40px] mt-[40px]' : 'mx-4 md:mt-[66px] mt-[40px]'}>

                <div className=' md:mb-[100px] mb-[41.5px]'>
                    <Hero name={selectedSub} category={category} count={total} getSearchData={getSearchData} popularSub={handleSelectPopularSubmit}></Hero>
                </div>

                <div className=' md:flex items-center justify-between md:mb-11 mb-[30px]'>
                    <div className='md:flex items-center '>
                        <div className='w-full md:w-fit mx-auto mb-4 md:mb-0'>
                            <Filter clickHandler={handleSubSubmit} selectedPopular={selectedPopular}></Filter>
                        </div>
                        <div className='text-[#6C737F] my-auto h-fit w-fit text-base font-medium md:ml-[32px] font-paragraph '>
                            Showing <span className='text-[#081120] font-paragraph'> {decoration(total)} Best</span> Ai Tools
                        </div>
                    </div>
                    <div className=' flex items-center justify-between md:justify-normal md:w-fit w-full md:mt-0 mt-6'>
                        <span className='text-[#081120] md:font-medium md:mr-6 font-paragraph  md:text-xl text-base font-normal'>Sort by : </span>
                        <div className='w-fit flex justify-between gap-4 mt-1'>


                            <button onClick={() => setSortOption('All')} name="All" className='flex items-center md:gap-2 gap-1 font-paragraph'>
                                <input onClick={handleChecked} className='focus:ring-0 focus:outline-0 rounded-sm h-3 w-3 font-paragraph font-normal text-base' type="checkbox" id="All" name="All" defaultChecked />
                                <div className='col'>All</div>
                            </button>
                            <button onClick={() => sortOption === 'Free' ? setSortOption('All') : setSortOption('Free')} name="Free" className='flex items-center gap-2 font-paragraph'>

                                <input onClick={handleChecked} className='focus:ring-0 focus:outline-0 rounded-sm h-3 w-3 font-paragraph font-normal text-base' type="checkbox" id="Free" name="Free" />
                                <div className='col'>
                                    Free
                                </div>
                            </button>
                            <button onClick={() => sortOption === 'Premium' ? setSortOption('All') : setSortOption('Premium')} name="Premium" className='flex items-center gap-2 font-paragraph'>
                                <input onClick={handleChecked} className='focus:ring-0 focus:outline-0 rounded-sm h-3 w-3 font-paragraph font-normal text-base' type="checkbox" id="Premium" name="Premium" />
                                <div className='col'>
                                    Premium
                                </div>
                            </button>
                            <button onClick={() => sortOption === 'Paid' ? setSortOption('All') : setSortOption('Paid')} name="Paid" className='flex items-center gap-2 font-paragraph'>
                                <input onClick={handleChecked} className='focus:ring-0 focus:outline-0 rounded-sm h-3 w-3 font-paragraph font-normal text-base' type="checkbox" id="Paid" name="Paid" />
                                <div className='col'>
                                    Paid
                                </div>
                            </button>

                        </div>
                    </div>
                </div>

                <div className=''>
                    <Card getToolsCount={getToolsCount} selectedSub={selectedSub} sortOption={sortOption} searchData={searchData}></Card>
                </div>

                <CookiePopup></CookiePopup>
            </div>
        </div>
    );
};

export default Home;

