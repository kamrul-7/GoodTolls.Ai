
import Card from '../Card/Card';
import Hero from '../Hero/Hero';
import Filter from '../Filter/Filter';
import { useEffect, useState } from 'react';
import CookiePopup from '../../Component/Popup/Popup';


const Home = () => {
    const [total, setTotal] = useState(1283)
    const [selectedSub, setSelectedSub] = useState('')
    const [searchData, setSearchData] = useState('');

    const [sortOption, setSortOption] = useState('All')
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

    const handleSubSubmit = (value)=>{
        setSelectedSub(value)
    }

    const getToolsCount = (value)=>{
        setTotal(value);
    }

    const handleChecked = (event)=>{
        if(event.target.name === 'All' && event.target.checked){
            document.getElementById('Free').checked = false;
            document.getElementById('Premium').checked = false;
            document.getElementById('Paid').checked = false;
        } 
        else if(event.target.name === 'Free' && event.target.checked){
            document.getElementById('All').checked = false;
            document.getElementById('Premium').checked = false;
            document.getElementById('Paid').checked = false;
        }
        else if(event.target.name === 'Premium' && event.target.checked){
            document.getElementById('All').checked = false;
            document.getElementById('Free').checked = false;
            document.getElementById('Paid').checked = false;
        }
        else if(event.target.name === 'Paid' && event.target.checked){
            document.getElementById('All').checked = false;
            document.getElementById('Free').checked = false;
            document.getElementById('Premium').checked = false;
        }
        setSortOption(event.target.name)
    }

    const getSearchData = (data)=>{
        if(data !== searchData){
            console.log(data);
            setSearchData(data)
        }
    }

    return (
        <div>
           
            <Hero name={selectedSub} count={total} getSearchData={getSearchData}></Hero>

            <div className='md:flex items-center justify-between mt-7 mb-5'>
                <div className='md:flex items-center '>
                    <div className='w-11/12 md:w-fit mx-auto'>
                        <Filter clickHandler = {handleSubSubmit}></Filter>
                    </div>
                    <div className='text-[#6C737F] font-medium ml-6 my-4'>
                        Showing <span className='text-[#081120]'> {decoration(total)} Best</span> Ai Tools
                    </div>
                </div>
                <div className='ml-6 flex items-center w-fit'>
                    <span className='text-[#081120] font-medium mr-1'>Sort by : </span>
                    <div className='max-w-[300px] flex justify-between mt-1'>
                        <div className='mx-2'>
                            <input onClick={handleChecked} className='mx-1 h-3 w-3' type="checkbox" id="All" name="All" defaultChecked/>All
                        </div>
                        <div className='mr-2'>
                            <input onClick={handleChecked} className='mx-1 h-3 w-3' type="checkbox" id="Free" name="Free" />Free
                        </div>
                        <div className='mr-2'>
                            <input onClick={handleChecked} className='mx-1 h-3 w-3' type="checkbox" id="Premium" name="Premium" />Premium
                        </div>
                        <div className=''>
                            <input onClick={handleChecked} className='mx-1 h-3 w-3' type="checkbox" id="Paid" name="Paid" />Paid
                        </div>

                    </div>
                </div>
            </div>

            <Card getToolsCount={getToolsCount} selectedSub = {selectedSub} sortOption = {sortOption} searchData={searchData}></Card>

            <CookiePopup></CookiePopup>
        </div>
    );
};

export default Home;

