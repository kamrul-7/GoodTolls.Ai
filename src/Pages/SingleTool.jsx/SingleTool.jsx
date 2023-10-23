import { useEffect, useState } from "react";
import Rate from '../Rate/Rate';
import Rattingg from '../Rating/Rating';
import { useParams } from "react-router-dom";

const SingleTool = () => {
    const [itemName, setItemName] = useState("Chapple");
    const { id } = useParams();
    const [cards, setCards] = useState(null);

    useEffect(() => {
        // Make a GET request to your backend API to fetch the news item based on the `id`.
        fetch(`http://localhost:3000/tools/${id}`)
            .then(response => response.json())
            .then(data => {
                // Update the state with the data for the specific news item.
                setCards(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
            
    }, [id]);

    if (!cards) {
        return <div>Loading...</div>;
    }
console.log(cards)
    

    return (
        <div className="md:my-7 my-4 rounded-md m-2">
            
            <div className='m-4 md:m-0 border border-[#E5E7EB] rounded-2xl'>
                <Rattingg/>
                <Rate item={itemName}></Rate>
            </div>
        </div>
    );
};

export default SingleTool;