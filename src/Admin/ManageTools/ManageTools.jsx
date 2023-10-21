import { useEffect, useState } from "react";
import Pagination from "../Category/Pagination";
import { useNavigate } from "react-router-dom";



const ManageTools = () => {
    const [tools, setTools] = useState([])
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/dashboard/addtool')
    }
    useEffect(() => {
        fetch('http://localhost:3000/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    return (
        <div className='mt-[35px] w-full px-8'>
            <div>
                {/* Breadcumb section */}
                <div className='w-fit h-7 p-2 mb-5 flex items-center justify-between gap-2'>
                    <svg className="w-7 h-7 p-1 rounded-md hover:bg-[#F9FAFB]" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.66667 13.1667H12.3333M8.18141 1.30333L2.52949 5.69927C2.15168 5.99312 1.96278 6.14005 1.82669 6.32405C1.70614 6.48704 1.61633 6.67065 1.56169 6.86588C1.5 7.08627 1.5 7.32558 1.5 7.80421V13.8333C1.5 14.7667 1.5 15.2335 1.68166 15.59C1.84144 15.9036 2.09641 16.1585 2.41002 16.3183C2.76654 16.5 3.23325 16.5 4.16667 16.5H13.8333C14.7668 16.5 15.2335 16.5 15.59 16.3183C15.9036 16.1585 16.1586 15.9036 16.3183 15.59C16.5 15.2335 16.5 14.7667 16.5 13.8333V7.80421C16.5 7.32558 16.5 7.08627 16.4383 6.86588C16.3837 6.67065 16.2939 6.48704 16.1733 6.32405C16.0372 6.14005 15.8483 5.99312 15.4705 5.69927L9.81859 1.30333C9.52582 1.07562 9.37943 0.961766 9.21779 0.918001C9.07516 0.879384 8.92484 0.879384 8.78221 0.918001C8.62057 0.961766 8.47418 1.07562 8.18141 1.30333Z" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <svg className="w-4 h-4" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9L5 5L1 1" stroke="#D0D5DD" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <span className='font-medium text-sm px-2 py-1 rounded-md hover:bg-[#F9FAFB]'>
                        Tools Management
                    </span>
                </div>

                {/* Page Name section */}
                <div className='w-full flex items-center justify-between'>
                    <span className='text-[30px] font-semibold'>
                        Tools Management
                    </span>
                    <button onClick={handleClick} className='py-[10px] px-[14px] border rounded-lg bg-[#7F56D9] hover:bg-[#6d4ab8] shadow-sm duration-300 text-white text-sm font-semibold'>
                        Add Tool
                    </button>
                </div>

                {/* Table section */}
                <table className='border-collapse table-auto w-full mt-[25px] text-[#475467]'>

                    {/* Table heading row */}
                    <tr className='h-[44px] border-b border-[#EAECF0] bg-[#F9FAFB] text-xs font-medium'>
                        <td className='py-3 px-6 hover:bg-[#F9FAFB]'>Tool Name</td>
                        <td className='py-3 px-6 hover:bg-[#F9FAFB]'>Categorie</td>
                        <td className='py-3 px-6 hover:bg-[#F9FAFB]'>Sub Categories</td>
                        <td className='py-3 px-6 hover:bg-[#F9FAFB]'>Publish Date</td>
                        <td className='py-3 px-6 hover:bg-[#F9FAFB]'>Added Date</td>
                        <td className='py-3 px-6 hover:bg-[#F9FAFB]'>Total Users</td>
                        <td className='py-3 px-6 w-[116px] hover:bg-[#F9FAFB]'>Action</td>
                    </tr>

                    {/* Table regular row */}
                    {
                        tools.map((value, index) => (
                            <tr key={index} className='border-b h-[64px] border-[#EAECF0] text-sm font-medium'>
                                <td className='py-4 px-6 hover:bg-[#F9FAFB]'>{value?.toolName}</td>
                                <td className='py-4 px-6 hover:bg-[#F9FAFB]'><span>{value?.parentCategories?.join(', ')}</span></td>
                                <td className='py-4 px-6 hover:bg-[#F9FAFB]'><span>{value?.SubCategory?.join(', ')}</span></td>
                                <td className='py-4 px-6 hover:bg-[#F9FAFB]'>{value?.date}</td>
                                <td className='py-4 px-6 hover:bg-[#F9FAFB] font-normal'>{value?.date}</td>
                                <td className='py-4 px-6 hover:bg-[#F9FAFB] font-normal'>Not available</td>
                                {/* Action buttons */}
                                <td className='px-4 py-4 flex items-center justify-center hover:mt-[1px] hover:-mb-[1px] hover:-translate-y-[0.5px] hover:bg-[#F9FAFB]'>

                                    {/* Delete button */}
                                    <button className="p-[10px] mr-1 w-[40px] hover:-translate-y-[0.5px]">
                                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.3333 4.99999V4.33332C12.3333 3.3999 12.3333 2.93319 12.1517 2.57667C11.9919 2.26307 11.7369 2.0081 11.4233 1.84831C11.0668 1.66666 10.6001 1.66666 9.66667 1.66666H8.33333C7.39991 1.66666 6.9332 1.66666 6.57668 1.84831C6.26308 2.0081 6.00811 2.26307 5.84832 2.57667C5.66667 2.93319 5.66667 3.3999 5.66667 4.33332V4.99999M7.33333 9.58332V13.75M10.6667 9.58332V13.75M1.5 4.99999H16.5M14.8333 4.99999V14.3333C14.8333 15.7335 14.8333 16.4335 14.5608 16.9683C14.3212 17.4387 13.9387 17.8212 13.4683 18.0608C12.9335 18.3333 12.2335 18.3333 10.8333 18.3333H7.16667C5.76654 18.3333 5.06647 18.3333 4.53169 18.0608C4.06129 17.8212 3.67883 17.4387 3.43915 16.9683C3.16667 16.4335 3.16667 15.7335 3.16667 14.3333V4.99999" stroke="#475467" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>

                                    {/* Edit button */}
                                    <button className="p-[10px] w-[40px] hover:-translate-y-[0.5px]">
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.39662 15.0964C1.43491 14.7518 1.45405 14.5795 1.50618 14.4185C1.55243 14.2756 1.61778 14.1396 1.70045 14.0142C1.79363 13.8729 1.91621 13.7504 2.16136 13.5052L13.1666 2.49999C14.0871 1.57951 15.5795 1.57951 16.4999 2.49999C17.4204 3.42046 17.4204 4.91285 16.4999 5.83332L5.49469 16.8386C5.24954 17.0837 5.12696 17.2063 4.98566 17.2995C4.86029 17.3821 4.72433 17.4475 4.58146 17.4937C4.42042 17.5459 4.24813 17.565 3.90356 17.6033L1.08325 17.9167L1.39662 15.0964Z" stroke="#475467" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                    </button>

                                </td>
                            </tr>
                        ))
                    }

                </table>
                {/* pagination section */}
                <div >
                    <Pagination totalPages={10} />
                </div>
            </div>
        </div>
    );
};

export default ManageTools;
