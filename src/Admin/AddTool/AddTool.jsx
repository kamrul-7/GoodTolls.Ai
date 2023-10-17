import './AddTool.css'

const AddTool = () => {
    return (
        <div className='mt-[35px] w-full px-8'>

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

                <svg className="w-4 h-4" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 9L5 5L1 1" stroke="#D0D5DD" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <span className='font-medium text-sm px-2 py-1 rounded-md hover:bg-[#F9FAFB]'>
                    New Tool
                </span>
            </div>

            {/* Page Name section */}
            <div className='w-full flex items-center justify-between mb-5'>
                <span className='text-[30px] font-semibold'>
                    Category Management
                </span>
                {/* <button className='py-[10px] px-[14px] border rounded-lg bg-[#7F56D9] hover:bg-[#6d4ab8] shadow-sm duration-300 text-white text-sm font-semibold'>
                    Add Category
                </button> */}
            </div>

            {/* Tool Info section */}
            <div className='w-full flex justify-between pb-5 mb-5 border-b border-[#EAECF0]'>
                <div>
                    <div className='text-lg leading-6 font-semibold text-[#101828]'>Tool Info</div>
                    <div className='text-sm leading-5 text-[#101828]'>Basic Info about the tool</div>
                </div>
                <div className=''>
                    <button className='py-[10px] px-[14px] mr-3 border border-[#D0D5DD] rounded-lg bg-white hover:bg-gray-50 shadow-sm duration-300 text-[#344054] text-sm font-semibold'>
                        Cancel
                    </button>
                    <button className='py-[10px] px-[14px] border rounded-lg bg-[#7F56D9] hover:bg-[#6d4ab8] shadow-sm duration-300 text-white text-sm font-semibold'>
                        Save
                    </button>
                </div>
            </div>

            {/* Tool Name */}
            <div className='w-full flex justify-between pb-5 mb-5 border-b border-[#EAECF0]'>
                <div className='w-1/3 text-sm font-semibold text-[#344054]'>Tool Name</div>
                <div className=''>
                    <input type="text" />
                </div>
            </div>

        </div>
    );
};

export default AddTool;