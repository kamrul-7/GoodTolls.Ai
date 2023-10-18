import { useState } from "react";
import Rate from '../Rate/Rate';
import Rattingg from '../Rating/Rating';

const SingleTool = () => {
    const [itemName, setItemName] = useState("Chapple");
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