import { useContext, useEffect, useState } from "react";
import Rate from '../Rate/Rate';
import Rattingg from '../Rating/Rating';
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { data } from "browserslist";
import RelatedCards from "../RelatedCards/RelatedCards";

const SingleTool = () => {
    const tmpStoreKeyTool = 'ToolsFinder(GoodToolsAi)RegularStoring:_toolId'
    const { loadData, setLoadData } = useContext(AuthContext);
    const [cards, setCards] = useState(null);
    const [isLoading, setIsloading] = useState(true)


    let storageKey = '';
    // console.log(storageKey);
    let isClicked = '';
    // console.log(isClicked);
    // console.log(cards);

    useEffect(() => {
        const storedToolId = JSON.parse(sessionStorage.getItem(tmpStoreKeyTool))
        setLoadData(false)
        // const storedToolId = JSON.parse(sessionStorage.getItem(tmpStoreKeyTool))
        console.log('inside single tool');
        // console.log(storedToolId);

        if (storedToolId) {
            storageKey = `myHeartClicked-${storedToolId}`;
            isClicked = localStorage.getItem(storageKey) === "true"
            fetch(`https://api.goodtools.ai/tools/${storedToolId}`)
                .then(response => response.json())
                .then(data => {
                    // Update the state with the data for the specific news item.
                    setCards(data);
                    // console.log(data.SubCategory);
                    setIsloading(false)
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
        // Make a GET request to your backend API to fetch the news item based on the `id`.




    }, [loadData]);




    // useEffect(() => {
    //     // Make a GET request to your backend API to fetch the news item based on the `id`.


    // }, [toolId]);


    return (
        <div className=" rounded-md">
            {
                isLoading ?
                    <span className="loading loading-ring md:w-40 md:h-40 w-20 h-20 md:ml-[45%] ml-[40%] md:my-40 my-20"></span>
                    : 
                    <div className="breadcrumbs text-sm font-normal mb-10 md:mb-14 mx-0 md:mx-4">
                        <ul className="ml-[2.5%] md:ml-[0.5%]">
                            <li className='text-[#081120] font-paragraph text-sm'>
                                <Link to="/">Home</Link>
                            </li>
                            <li className='text-[#081120] font-paragraph text-sm'>
                                <Link to="/">Card</Link>
                            </li>
                            <li className='text-[#6C737F] font-paragraph text-sm'>{cards.toolName}</li>
                        </ul>
                        <div className=' mt-10 mx-3 md:mx-1 md:px-0 md:py-0 px-4 py-6 border border-[#E5E7EB] rounded-2xl'>
                            <Rattingg card={cards} />
                            <Rate id={cards._id} name={cards.toolName}></Rate>
                        </div>
                        <div className="md:my-[60px] mt-10 mb-5 mx-4 md:mx-0">
                            <RelatedCards id={cards._id} subs={cards.SubCategory}></RelatedCards>
                        </div>

                    </div>
            }


        </div>
    );
};

export default SingleTool;