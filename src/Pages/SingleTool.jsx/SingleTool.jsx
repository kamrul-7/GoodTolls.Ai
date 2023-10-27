import { useContext, useEffect, useState } from "react";
import Rate from '../Rate/Rate';
import Rattingg from '../Rating/Rating';
import { useParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const SingleTool = () => {
    const tmpStoreKeyTool = 'ToolsFinder(GoodToolsAi)RegularStoring:_toolId'
    // const { toolId } = useContext(AuthContext);
    const [cards, setCards] = useState(null);
    const [isLoading, setIsloading] = useState(true)
    let storageKey = '';
    // console.log(storageKey);
    let isClicked = '';
    // console.log(isClicked);

    useEffect(() => {
        const storedToolId = JSON.parse(sessionStorage.getItem(tmpStoreKeyTool))
        if(storedToolId){
            storageKey = `myHeartClicked-${storedToolId}`;
            isClicked = localStorage.getItem(storageKey) === "true"
            fetch(`http://localhost:3000/tools/${storedToolId}`)
            .then(response => response.json())
            .then(data => {
                // Update the state with the data for the specific news item.
                setCards(data);
                setIsloading(false)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        }
        // Make a GET request to your backend API to fetch the news item based on the `id`.



    }, []);

    // useEffect(() => {
    //     // Make a GET request to your backend API to fetch the news item based on the `id`.


    // }, [toolId]);


    return (
        <div className="md:my-7 my-4 rounded-md m-2">
            {
                isLoading ?
                    <span className="loading loading-ring md:w-40 md:h-40 w-20 h-20 md:ml-[45%] ml-[40%] md:my-40 my-20"></span>
                    : <div className='m-4 p-4 border border-[#E5E7EB] rounded-2xl'>
                        <Rattingg card={cards} />
                        <Rate id={cards._id} name={cards.toolName}></Rate>
                    </div>
            }


        </div>
    );
};

export default SingleTool;