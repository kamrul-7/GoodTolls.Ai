import { useEffect, useState } from "react";
import Rate from '../Rate/Rate';
import Rattingg from '../Rating/Rating';
import { useParams } from "react-router-dom";

const SingleTool = () => {
    const { id } = useParams();
    const [cards, setCards] = useState(null);
    const [isLoading, setIsloading] = useState(true)

    useEffect(() => {
        // Make a GET request to your backend API to fetch the news item based on the `id`.
        fetch(`http://localhost:3000/tools/${id}`)
            .then(response => response.json())
            .then(data => {
                // Update the state with the data for the specific news item.
                setCards(data);
                setIsloading(false)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }, [id]);

    //     if (!cards) {
    //         return <div>Loading...</div>;
    //     }
    // console.log(cards)


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