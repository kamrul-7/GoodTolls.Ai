import { useEffect, useState } from "react";


const Test = () => {
    const [reviews, setReviews] = useState([])


    //Responsive rating part

    const [isMobile, setIsMobile] = useState(false)
    const [reviewCount, setReviewCount] = useState(0)

    // initialize screen size type
    useEffect(() => {
            window.innerWidth < 768 ?  setIsMobile(true) :  setIsMobile(false);
    }, [])

    // create an event listener to listen screen size changes
    useEffect(() => {
        //choose the screen size 
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    })

    // handle review to be shown in per frame for different screen size
    useEffect(() => {
        if(isMobile == false && reviewCount %2 == 1){
            setReviewCount(reviewCount-1)
        }
        if(isMobile == true && reviewCount %2 == 0){
            if(reviewCount+1 < reviews.length){
                setReviewCount(reviewCount+1)
            }
        }
    }, [isMobile])






    useEffect(() => {
        fetch('/rating.json')
            .then(data => data.json())
            .then(x => setReviews(x))
    }, [])

    // useEffect(() => {
    //     console.log(reviews);
    // }, [reviews])

    const handleNext = () =>{
        if(!isMobile){
            if(reviewCount < reviews.length-2){
                setReviewCount(reviewCount+2);
            }
        }
        else{
            if(reviewCount < reviews.length-1){
                setReviewCount(reviewCount+1);
            }
        }
    }

    const handlePrev = () =>{
        if(!isMobile){
            if(reviewCount-2 >= 0){
                setReviewCount(reviewCount-2);
            }   
        }
        else{
            if(reviewCount-1 >= 0){
                setReviewCount(reviewCount-1);
            }
            
        }
    }



    return (
        
        <div>
            <p>data: {reviews.length}</p>
            <div>
                {console.log()}
                <h1>reviewCount: {reviewCount}</h1>
                <h1>1. {reviews[reviewCount]?.name}</h1>
                <h1 className="hidden md:block">2. {reviews[reviewCount+1]?.name}</h1>
                <button onClick={handleNext}>next</button>
                <button onClick={handlePrev}>prev</button>
                
            </div>
            <p>{test}</p>
        </div>
    );
};

export default Test;