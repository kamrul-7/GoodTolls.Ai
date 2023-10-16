import React, { useState } from 'react';

const Pagination = ({ totalPages }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div className="w-full flex justify-between items-center mt-4 pt-2 pb-4 mb-[50px]">
           

            <button onClick={() => handlePageChange(currentPage - 1)} className="h-5 flex items-center gap-[6px] text-[#475467] hover:text-black">
                        <svg className="w-5" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8333 7.00002H1.16663M1.16663 7.00002L6.99996 12.8334M1.16663 7.00002L6.99996 1.16669" stroke="#475467" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="font-semibold text-sm leading-5 ">Previous</span>
                    </button>


                    <div>
    {[...Array(totalPages)].map((_, idx) => {
        const pageNumber = idx + 1;

        // Determine if this page number should be displayed
        const shouldDisplay = (
            pageNumber <= 3 || // First 3 pages
            pageNumber > totalPages - 3 || // Last 3 pages
            (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1) // Around current page
        );

        if (shouldDisplay) {
            return (
                <button
                    key={idx}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`mx-1 ${currentPage === pageNumber ? 'text-blue-500' : ''}`}
                >
                    {pageNumber}
                </button>
            );
        } else if (
            pageNumber === 4 || 
            (pageNumber === currentPage + 2 && pageNumber < totalPages - 2)
        ) {
            // Render ellipsis only once after first 3 or right after the current page if applicable
            return <span key={idx} className="mx-1">...</span>;
        }

        // Do not render anything for this iteration if none of the above conditions are met
        return null;
    })}
</div>


<button onClick={() => handlePageChange(currentPage + 1)} className="h-5 flex items-center gap-[6px] text-[#475467] hover:text-black">
                    <span className="font-semibold text-sm leading-5 ">Next</span>
                        <svg className="w-5" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.16675 7.00002H12.8334M12.8334 7.00002L7.00008 1.16669M12.8334 7.00002L7.00008 12.8334" stroke="#475467" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>


        </div>
    );
};
export default Pagination;