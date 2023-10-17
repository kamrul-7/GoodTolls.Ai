import { useEffect, useRef, useState } from 'react';
import { FileUploader } from "react-drag-drop-files";
import './AddTool.css'

const AddTool = () => {


    const [isOpen, setIsOpen] = useState(false)
    const [allSuggestions, setAllSuggestions] = useState([])
    const [suggestions, setSuggestions] = useState([]);
    const [selected, setSelected] = useState([])
    const inputRef = useRef(null);

    useEffect(() => {
        const items = [
            "Socks",
            "Shoes",
            "Sandals",
            "Slippers",
            "Orthotic Insoles",
            "Flip-flops",
            "Athletic Shoes",
            "Boots",
            "High Heels",
            "Sneakers",
            "Arch Support Inserts",
            "Toe Rings",
            "Anklets",
            "Toe Separators",
            "Foot Massager",
            "Foot Bath",
            "Foot Cream",
            "Pedicure Kit",
            "Callus Remover",
            "Foot Deodorant",
            "Foot Scrub",
            "Foot Pumice Stone",
            "Foot Exfoliating Mask",
            "Nail Clippers",
            "Nail File",
            "Nail Polish",
            "Foot Powder",
            "Orthopedic Sandals",
            "Shoe Inserts",
            "Foot Orthotics",
            "Foot Brace",
            "Foot Splint",
            "Foot Roller",
            "Foot Stool",
            "Shoe Horn",
            "Foot Massage Oil",
            "Foot Spa",
            "Foot Spray",
            "Foot Warmer",
            "Gel Cushion Inserts",
            "Foot Massaging Slippers",
            "Compression Socks",
            "Toe Socks",
            "Bunion Corrector",
            "Foot Soak",
            "Foot Lotion",
            "Heel Cups",
        ];
        setAllSuggestions(items)
        setSuggestions(items.sort())
    }, [])

    const setBlur = (event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
            setIsOpen(false)
        }
    }

    const setFocus = () => {
        if (!isOpen) {
            setIsOpen(true)
        }
    }

    const handleKeyPress = (event) => {
        const eventData = event.target.value;
        const innerSuggestions = [];
        allSuggestions.map((data) => {
            const dataUpper = data.toUpperCase();
            if (dataUpper.includes(eventData.toUpperCase())) {
                innerSuggestions.push(data)
            }
        })
        const arr = [...selected]
        const newSuggested = innerSuggestions.filter(item => !arr.includes(item));
        // if (innerSuggestions.length == 0) {
        //     innerSuggestions.push(`0 match for '${eventData}'`)
        // }
        setSuggestions(newSuggested.sort());
    }

    const handleAdd = (value) => {
        // console.log(event.currentTarget,event.relatedTarget);
        const arr = [...selected]
        if (!selected.includes(value)) {
            arr.push(value);
            setSelected(arr);
            const newSuggested = suggestions.filter(item => !arr.includes(item));
            setSuggestions(newSuggested.sort())
        }
    }

    const handleRemove = (value) => {
        setFocus()
        const arr = [...selected]
        const newSelected = arr.filter(item => item !== value)
        setSelected(newSelected)
        if (!suggestions.includes(value)) {
            const arr = [...suggestions]
            arr.push(value)
            setSuggestions(arr.sort())
        }
    }


    const fileTypes = ["JPG", "PNG", "GIF"];

    const [file, setFile] = useState(null);
    const handleFileChange = (file) => {
        console.log(file);
        setFile(URL.createObjectURL(file));
    };


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.toolName.value);
        console.log(event.target.verify.checked);
        console.log(event.target.link.value);
    }

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

            <form onSubmit={handleSubmit}>

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
                        <input type='submit' value="Save" className='py-[10px] px-[14px] border rounded-lg bg-[#7F56D9] hover:bg-[#6d4ab8] shadow-sm duration-300 text-white text-sm font-semibold'>

                        </input>
                    </div>
                </div>



                {/* Tool Name */}
                <div className='w-full flex pb-5 mb-5 border-b border-[#EAECF0]'>
                    <div className=' w-4/12 text-sm font-semibold text-[#344054]'>Tool Name</div>
                    <div className='py-[10px] px-[14px] border rounded-lg h-[44px] w-[512px]'>
                        <input name='toolName' placeholder="Chapple" className=' h-full my-auto w-full focus:outline-0 text-base text-[#101828]' type="text" />
                    </div>
                </div>

                {/* Verified */}
                <div className='w-full flex pb-5 mb-5 border-b border-[#EAECF0]'>
                    <div className=' w-4/12 text-sm font-semibold text-[#344054]'>Verified</div>
                    <div>
                        <label className="relative inline-flex items-center mr-5 cursor-pointer">
                            <input type="checkbox" name="verify" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#7F56D9]"></div>
                            <span className="ml-2 text-sm font-medium text-[#344054] ">Verified</span>
                        </label>
                    </div>
                </div>

                {/* Sub Catagory */}
                <div className='w-full flex pb-5 mb-5 border-b border-[#EAECF0]'>
                    <div className=' w-4/12 text-sm font-semibold text-[#344054]'>Choose Sub Category</div>
                    <div className="w-[400px] border px-[14px] py-[10px] flex flex-wrap gap-2 border-[#D0D5DD] rounded-lg" tabIndex={0} onFocus={() => { inputRef.current.focus() }}>
                        <div className="flex flex-wrap gap-2 outer ">
                            {selected.map((value, index) => (
                                <button className="h-6 px-2 py-1 text-sm font-medium flex items-center gap-[3px] border border-[#D0D5DD] rounded-md " key={index} onClick={() => handleRemove(value)}>
                                    <span>{value}</span>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 3L3 9M3 3L9 9" stroke="#98A2B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </button>
                            ))}
                        </div>
                        <div onBlur={setBlur} className={`w-6/12`}>
                            <div className="relative">
                                <input placeholder='Choose Sub Category' ref={inputRef} onFocus={setFocus} className={`w-full h-6 focus:border-0 focus:outline-0 `} onKeyUp={handleKeyPress} type="text" />
                                <div className={`${isOpen ? 'block absolute top-10 left-0' : 'hidden'}`}>
                                    <ul className="p-2 shadow z-10 bg-base-100 border w-52 dropdown overflow-y-scroll">
                                        {suggestions.length != 0 ? suggestions.map((value, index) => (
                                            <li key={index}><button className="w-fit" onClick={() => {
                                                inputRef.current.focus()
                                                handleAdd(value)
                                            }}>
                                                {value}
                                            </button></li>
                                        )) : <li>No Item</li>}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Link */}
                <div className='w-full flex pb-5 mb-5 border-b border-[#EAECF0]'>
                    <div className=' w-4/12 text-sm font-semibold text-[#344054]'>Link</div>
                    <div className='py-[10px] px-[14px] border rounded-lg h-[44px] w-[512px] flex items-center'>

                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.24984 5.83325H5.83317C3.53198 5.83325 1.6665 7.69873 1.6665 9.99992C1.6665 12.3011 3.53198 14.1666 5.83317 14.1666H7.49984C9.80102 14.1666 11.6665 12.3011 11.6665 9.99992M13.7498 14.1666H14.1665C16.4677 14.1666 18.3332 12.3011 18.3332 9.99992C18.3332 7.69873 16.4677 5.83325 14.1665 5.83325H12.4998C10.1987 5.83325 8.33317 7.69873 8.33317 9.99992" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>


                        <input name='link' placeholder="www.chapple.ai" className='ml-2 h-full my-auto w-full focus:outline-0 text-base text-[#101828]' type="url" />
                    </div>
                </div>

                {/* Tool image */}
                <div className='w-full flex pb-5 mb-5 border-b border-[#EAECF0]'>
                    <div className=' w-4/12 text-sm font-semibold text-[#344054]'>
                        <span>Tool Screenshot</span>
                        <div className='text-sm font-normal text[#475467]'>This will be displayed on tool page</div>
                    </div>
                    <div className=' px-[14px] h-fit flex items-center gap-5'>

                        <div className='w-[200px] h-[126px] rounded-xl'>
                            <img className='w-[200px] h-[126px] rounded-xl' src={file ? file: 'https://imgv3.fotor.com/images/videoImage/wonderland-girl-generated-by-Fotor-ai-art-generator_2023-05-15-104543_ibow.jpg'} alt="Upload a image to see preview" />
                        </div>
                        {/* https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png */}
                        {/* https://www.springboard.com/blog/wp-content/uploads/2022/02/is-ai-hard-to-learn-scaled.jpg */}


                        <FileUploader handleChange={handleFileChange} name="file" types={fileTypes} chilldren="hello world" onTypeError={()=>alert('Only image can be uploaded')}>
                            <div className='px-6 py-4 rounded-xl border-2 border-[#7F56D9] text-center'>
                                <div className='mb-3 mx-auto w-[40px] h-[40px]border border-[#EAECF0] rounded-lg p-[10px] shadow-md'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.6665 13.3333L9.99984 10M9.99984 10L13.3332 13.3333M9.99984 10V17.5M16.6665 13.9524C17.6844 13.1117 18.3332 11.8399 18.3332 10.4167C18.3332 7.88536 16.2811 5.83333 13.7498 5.83333C13.5677 5.83333 13.3974 5.73833 13.3049 5.58145C12.2182 3.73736 10.2119 2.5 7.9165 2.5C4.46472 2.5 1.6665 5.29822 1.6665 8.75C1.6665 10.4718 2.36271 12.0309 3.48896 13.1613" stroke="#475467" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </div>
                                <div className='text-sm mb-1'>
                                    <span className=' text-[#6941C6] font-semibold'>Click to upload</span> or drag and drop
                                </div>
                                <div className='text-sm'>SVG, PNG, JPG or GIF (max. 800x400px)</div>
                            </div>
                        </FileUploader>


                    </div>
                </div>

            </form>

        </div>
    );
};

export default AddTool;