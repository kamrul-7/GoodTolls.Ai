import React, { useState } from 'react';

const Pagination = ({ totalItemsPerPage, totalPages }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    // Calculate the range of page numbers to display dynamically
    const calculatePageRange = () => {
        const maxPagesToShow = 2; // Number of pages to show when there are more than 5 items per page
        if (totalPages <= maxPagesToShow) {
            return [...Array(totalPages).keys()].map((pageNumber) => pageNumber + 1);
        } else if (currentPage <= 3) {
            return [...Array(maxPagesToShow).keys()].map((pageNumber) => pageNumber + 1);
        } else if (currentPage >= totalPages - 2) {
            return [...Array(maxPagesToShow).keys()].map((pageNumber) => totalPages - maxPagesToShow + pageNumber + 1);
        } else {
            return [1, 2, currentPage - 1, currentPage, currentPage + 1];
        }
    };

    return (
        <div className="w-full flex justify between items center mt-4 pt-2 pb-4 mb-[50px]">
            <button onClick={() => handlePageChange(currentPage - 1)} className="h-5 flex items-center gap-[6px] text-[#475467] hover:text-black">
                <span className="font-semibold text-sm leading-5">Previous</span>
            </button>

            <div>
            {calculatePageRange().map((pageNumber) => (
    <button
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
        className={`mx-1 ${currentPage === pageNumber ? 'text-blue-500' : ''}`}
    >
        {pageNumber}
    </button>
))}

                {totalPages > 5 && currentPage < totalPages - 2 && <span className="mx-1">...</span>}
            </div>

            <button onClick={() => handlePageChange(currentPage + 1)} className="h-5 flex items-center gap-[6px] text-[#475467] hover:text-black">
                <span className="font-semibold text-sm leading-5">Next</span>
            </button>
        </div>
    );
};

export default Pagination;
