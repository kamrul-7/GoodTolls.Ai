import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FileUploader } from "react-drag-drop-files";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import draftToHtml from "draftjs-to-html";
import { Editor } from 'react-draft-wysiwyg';
import { ContentState, EditorState, convertFromHTML, convertToRaw } from "draft-js";
import htmlToDraft from 'html-to-draftjs';
import './AddTool.css'

const AddTool = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/dashboard/manageTools')
    }

    const [isOpen, setIsOpen] = useState(false)
    const [allSuggestions, setAllSuggestions] = useState([])
    const [suggestions, setSuggestions] = useState([]);
    const [selected, setSelected] = useState([])
    const [startDate, setStartDate] = useState(null);
    const inputRef = useRef(null);
    const typeRef = useRef(null);


    const [editorDesState, setEditorDesState] = useState(EditorState.createEmpty());
    const [initDes, setDesInit] = useState("")
    const [finalDes, setDesFinal] = useState('')
    const [finalDesChars, setFinalDesChars] = useState(0)
    const [finalWorkChars, setFinalWorkChars] = useState(0)

    const countCharacters = (element) => {
        let totalCharacters = -1;

        // Recursively traverse the element and its children
        function traverse(node) {
            if (node.nodeType === Node.TEXT_NODE) {
                totalCharacters += node.textContent.length;
            } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName !== 'IMG' && node.tagName !== 'LI') {
                for (const child of node.childNodes) {
                    traverse(child);
                }
            }
        }

        traverse(element);
        return totalCharacters;
    }

    useEffect(() => {
        const contentBlock = htmlToDraft(initDes)

        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            const editorState = EditorState.createWithContent(contentState);
            setEditorDesState(editorState)
        }
    }, [initDes])

    const handleDesChange = (data) => {

        setEditorDesState(data);


    };

    const handleDesInput = (input) => {
        if (finalDesChars == 0) {
            return 'handled'
        }
    }


    useMemo(
        () => setDesFinal(draftToHtml(convertToRaw(editorDesState.getCurrentContent()))),
        [editorDesState]
    )

    useEffect(() => {

        // Create a temporary DOM element to parse the HTML string
        const tempElement = document.createElement('div');
        tempElement.innerHTML = finalDes;
        setFinalDesChars(1000 - countCharacters(tempElement));

    }, [finalDes])




    const [editorWorkState, setEditorWorkState] = useState(EditorState.createEmpty());
    const [initWork, setInitWork] = useState("")
    const [finalWork, setWorkFinal] = useState('')

    useEffect(() => {
        const contentBlock = htmlToDraft(initWork)

        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            const editorState = EditorState.createWithContent(contentState);
            setEditorWorkState(editorState)
        }
    }, [initWork])

    const handlWorkChange = (data) => {
        setEditorWorkState(data);
    };


    const handleWorkInput = (input) => {
        if (finalWorkChars == 0) {
            return 'handled'
        }
    }

    useMemo(
        () => setWorkFinal(draftToHtml(convertToRaw(editorWorkState.getCurrentContent()))),
        [editorWorkState]
    )

    useEffect(() => {

        // Create a temporary DOM element to parse the HTML string
        const tempElement = document.createElement('div');
        tempElement.innerHTML = finalWork;
        setFinalWorkChars(1000 - countCharacters(tempElement));

    }, [finalWork])

    useEffect(() => {
        fetch('http://localhost:3000/subcategory')
            .then(res => res.json())
            .then(items => {
                items.sort()
                let tmp = []
                items.map((value) => {
                    tmp.push(value.SubCategory)
                })
                setAllSuggestions(tmp)
                setSuggestions(tmp)
            })

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
    const [image, setImage] = useState(null);
    const handleFileChange = (file) => {
        console.log(file);
        setFile(file);
        setImage(URL.createObjectURL(file));
    };

    const formateDate = () => {
        const date = new Date(startDate);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const toolName = event.target.toolName.value;
        const verified = event.target.verify.checked;
        const subCategory = selected;
        const link = event.target.link.value;
        const image = file;
        const priceType = event.target.priceType.value;
        const price = event.target.price.value;
        const pricePeriod = event.target.pricePeriod.value;
        const date = formateDate();
        const facebook = event.target.facebook.value;
        const twitter = event.target.twitter.value;
        const linkedin = event.target.linkedin.value;
        const discord = event.target.discord.value;
        const description = JSON.stringify(finalDes.replace(/<h1>/g, "<h1 style= \"  display: block;font-size: 1.5em;margin-top: 0.83em;margin-bottom: 0.83em;margin-left: 0;margin-right: 0;font-weight: bold;\">"));
        const works = JSON.stringify(finalWork.replace(/<h1>/g, "<h1 style= \"  display: block;font-size: 1.5em;margin-top: 0.83em;margin-bottom: 0.83em;margin-left: 0;margin-right: 0;font-weight: bold;\">"));
        if (toolName.length != 0 && selected.length != 0 && link.length != 0 && file != null
            && priceType.length != 0 && price.length != 0 && pricePeriod.length != 0 && date
            && facebook.length != 0 && twitter.length != 0 && linkedin.length != 0 && discord.length != 0 && description && works) {
            const formdata = new FormData()
            formdata.append('toolName', toolName)
            formdata.append('verified', verified)
            formdata.append('SubCategory', subCategory)
            formdata.append('link', link)
            formdata.append('image', file)
            formdata.append('priceType', priceType)
            formdata.append('price', price)
            formdata.append('pricePeriod', pricePeriod)
            formdata.append('date', date)
            formdata.append('facebook', facebook)
            formdata.append('twitter', twitter)
            formdata.append('linkedin', linkedin)
            formdata.append('discord', discord)
            formdata.append('description', description)
            formdata.append('works', works)
            fetch("http://localhost:3000/newtool", {
                method: "POST",
                headers: {
                },
                body: formdata,
            })
            .then((res) => res.json())
            .then(data => {
                if (data.acknowledged) {
                    event.target.reset()
                    setSelected([])
                    setImage(null)
                    setFile(null)
                    setEditorDesState(EditorState.createEmpty())
                    setEditorWorkState(EditorState.createEmpty())
                    setStartDate(null)
                    alert('New tool data submitted')
                }
            })
        } else{
            alert('No fields can remain empty')
        }
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
                    Add New Tool
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
                        <button onClick={handleClick} className='py-[10px] px-[14px] mr-3 border border-[#D0D5DD] rounded-lg bg-white hover:bg-gray-50 shadow-sm duration-300 text-[#344054] text-sm font-semibold'>
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
                        <div className="flex flex-wrap gap-2 outer">
                            {selected.map((value, index) => (
                                <button className="h-6 px-2 py-1 text-sm font-medium flex items-center gap-[3px] border border-[#D0D5DD] rounded-md " key={index} onClick={(event) => {
                                    event.preventDefault()
                                    handleRemove(value)
                                }}>
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
                                            <li key={index}><button className="w-fit" onClick={(event) => {
                                                event.preventDefault()
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


                        <input name='link' placeholder="www.chapple.ai" className='ml-2 mb-[1px] h-full my-auto w-full focus:outline-0 text-base text-[#101828]' type="url" />
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
                            <img className='w-[200px] h-[126px] rounded-xl' src={image ? image : 'https://imgv3.fotor.com/images/videoImage/wonderland-girl-generated-by-Fotor-ai-art-generator_2023-05-15-104543_ibow.jpg'} alt="Upload a image to see preview" />
                        </div>
                        {/* https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png */}
                        {/* https://www.springboard.com/blog/wp-content/uploads/2022/02/is-ai-hard-to-learn-scaled.jpg */}


                        <FileUploader maxSize='2' onSizeError={() => alert('Maximum size allowed 2MB')} handleChange={handleFileChange} name="file" types={fileTypes} chilldren="hello world" onTypeError={() => alert('Only image can be uploaded')}>
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

                {/* Tool Price */}
                <div className='w-full flex pb-5 mb-5 border-b border-[#EAECF0]'>
                    <div className=' w-4/12 text-sm font-semibold text-[#344054]'>Tool Price</div>
                    <div className=''>

                        {/* Price type */}
                        <div className='mb-4 py-[10px] px-[14px] border rounded-lg h-[44px] w-[512px]' >
                            <select name='priceType' className='w-full focus:outline-0 text-base font-medium'>
                                <option value={'Free + Premium'} selected>Free + Premium</option>
                                <option value={'Free'}>Free</option>
                                <option value='Premium'>Premium</option>
                                <option>React</option>
                            </select>

                        </div>

                        {/* Additional price info */}
                        <div className='py-[10px] px-[14px] border rounded-lg h-[44px] w-[512px] flex justify-between items-center' >

                            {/* Price */}
                            <div className='w-full flex items-center'>
                                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.63636 15.4545V0.90909H5.56818V15.4545H4.63636ZM7.77273 5.27273C7.70455 4.69697 7.42803 4.25 6.94318 3.93182C6.45833 3.61364 5.86364 3.45455 5.15909 3.45455C4.64394 3.45455 4.19318 3.53788 3.80682 3.70455C3.42424 3.87121 3.125 4.10038 2.90909 4.39205C2.69697 4.68371 2.59091 5.01515 2.59091 5.38636C2.59091 5.69697 2.66477 5.96401 2.8125 6.1875C2.96402 6.4072 3.1572 6.59091 3.39205 6.73864C3.62689 6.88258 3.87311 7.00189 4.13068 7.09659C4.38826 7.1875 4.625 7.26136 4.84091 7.31818L6.02273 7.63636C6.32576 7.71591 6.66288 7.82576 7.03409 7.96591C7.40909 8.10606 7.76705 8.29735 8.10795 8.53977C8.45265 8.77841 8.73674 9.08523 8.96023 9.46023C9.18371 9.83523 9.29545 10.2955 9.29545 10.8409C9.29545 11.4697 9.13068 12.0379 8.80114 12.5455C8.47538 13.053 7.99811 13.4564 7.36932 13.7557C6.74432 14.0549 5.98485 14.2045 5.09091 14.2045C4.25758 14.2045 3.53598 14.0701 2.92614 13.8011C2.32008 13.5322 1.8428 13.1572 1.49432 12.6761C1.14962 12.1951 0.954545 11.6364 0.909091 11H2.36364C2.40152 11.4394 2.54924 11.803 2.80682 12.0909C3.06818 12.375 3.39773 12.5871 3.79545 12.7273C4.19697 12.8636 4.62879 12.9318 5.09091 12.9318C5.62879 12.9318 6.11174 12.8447 6.53977 12.6705C6.9678 12.4924 7.30682 12.2462 7.55682 11.9318C7.80682 11.6136 7.93182 11.2424 7.93182 10.8182C7.93182 10.4318 7.82386 10.1174 7.60795 9.875C7.39205 9.63258 7.10795 9.43561 6.75568 9.28409C6.40341 9.13258 6.02273 9 5.61364 8.88636L4.18182 8.47727C3.27273 8.21591 2.55303 7.8428 2.02273 7.35795C1.49242 6.87311 1.22727 6.23864 1.22727 5.45455C1.22727 4.80303 1.40341 4.23485 1.75568 3.75C2.11174 3.26136 2.58902 2.88258 3.1875 2.61364C3.78977 2.34091 4.46212 2.20455 5.20455 2.20455C5.95455 2.20455 6.62121 2.33901 7.20455 2.60795C7.78788 2.87311 8.25 3.23674 8.59091 3.69886C8.93561 4.16098 9.11742 4.68561 9.13636 5.27273H7.77273Z" fill="#475467" />
                                </svg>
                                <input name='price' placeholder="Amount" className='ml-2 mb-[1px] h-full w-full focus:outline-0 text-base text-[#101828]' type="text" />
                            </div>

                            {/* Price duration */}
                            <select name='pricePeriod' className='w-3/12 ml-[14px] focus:outline-0 text-base'>
                                <option value={'Per month'} selected>Per month</option>
                                <option value={'Per Week'}>Per Week</option>
                                <option value={'Per Day'}>Per Day</option>
                                <option>React</option>
                            </select>

                        </div>
                    </div>
                </div>


                {/* Publish date */}
                <div className='w-full flex pb-5 mb-5 border-b border-[#EAECF0]'>
                    <div className=' w-4/12 text-sm font-semibold text-[#344054]'>Publish Date</div>
                    <div className='py-[10px] px-[14px] border rounded-lg h-[44px] w-[512px] flex items-center'>

                        <DatePicker
                            placeholderText='Select Date'
                            className="focus:outline-0 w-[480px] h-[33px]"
                            isClearable
                            showIcon
                            selected={startDate} //when day is clicked
                            onChange={(date) => setStartDate(date)} //only when value has changed
                            icon={<svg className='mr-2' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5 8.33342H2.5M13.3333 1.66675V5.00008M6.66667 1.66675V5.00008M6.5 18.3334H13.5C14.9001 18.3334 15.6002 18.3334 16.135 18.0609C16.6054 17.8212 16.9878 17.4388 17.2275 16.9684C17.5 16.4336 17.5 15.7335 17.5 14.3334V7.33342C17.5 5.93328 17.5 5.23322 17.2275 4.69844C16.9878 4.22803 16.6054 3.84558 16.135 3.6059C15.6002 3.33341 14.9001 3.33341 13.5 3.33341H6.5C5.09987 3.33341 4.3998 3.33341 3.86502 3.6059C3.39462 3.84558 3.01217 4.22803 2.77248 4.69844C2.5 5.23322 2.5 5.93328 2.5 7.33341V14.3334C2.5 15.7335 2.5 16.4336 2.77248 16.9684C3.01217 17.4388 3.39462 17.8212 3.86502 18.0609C4.3998 18.3334 5.09987 18.3334 6.5 18.3334Z" stroke="#344054" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            }
                        />


                    </div>
                </div>


                {/* Socialmedia */}
                <div className='w-full flex pb-5 mb-5 border-b border-[#EAECF0]'>
                    <div className=' w-4/12 text-sm font-semibold text-[#344054]'>Social Media Accounts</div>
                    <div>
                        <div className='mb-4 border rounded-lg h-[44px] w-[512px] flex'>
                            <div className='w-3/12 py-[10px] px-[14px] border-r text-[#475467] text-base'>
                                Facebook/
                            </div>
                            <div className='py-[10px] px-[14px]'>
                                <input name='facebook' placeholder="Chapple" className=' h-full my-auto w-full focus:outline-0 text-base text-[#101828]' type="text" />
                            </div>
                        </div>
                        <div className='mb-4 border rounded-lg h-[44px] w-[512px] flex'>
                            <div className='w-3/12 py-[10px] px-[14px] border-r text-[#475467] text-base'>
                                Linkedin/
                            </div>
                            <div className='py-[10px] px-[14px]'>
                                <input name='linkedin' placeholder="Chapple" className=' h-full my-auto w-full focus:outline-0 text-base text-[#101828]' type="text" />
                            </div>
                        </div>
                        <div className='mb-4 border rounded-lg h-[44px] w-[512px] flex'>
                            <div className='w-3/12 py-[10px] px-[14px] border-r text-[#475467] text-base'>
                                Twitter/
                            </div>
                            <div className='py-[10px] px-[14px]'>
                                <input name='twitter' placeholder="Chapple" className=' h-full my-auto w-full focus:outline-0 text-base text-[#101828]' type="text" />
                            </div>
                        </div>
                        <div className=' border rounded-lg h-[44px] w-[512px] flex'>
                            <div className='w-3/12 py-[10px] px-[14px] border-r text-[#475467] text-base'>
                                Discord/
                            </div>
                            <div className='py-[10px] px-[14px]'>
                                <input name='discord' placeholder="Chapple" className=' h-full my-auto w-full focus:outline-0 text-base text-[#101828]' type="text" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className='w-full flex pb-5 mb-5 border-b border-[#EAECF0]'>
                    <div className=' w-4/12 text-sm font-semibold text-[#344054]'>
                        <span>Description</span>
                        <div className='text-sm font-normal text[#475467]'>Write the description of the tool</div>
                    </div>
                    <div className=' px-[14px] rounded-lg w-[512px]'>

                        <Editor
                            handleBeforeInput={handleDesInput}
                            placeholder="Write product description"
                            editorState={editorDesState}
                            onEditorStateChange={handleDesChange}
                            wrapperClassName="full-wrap-tool"
                            editorClassName="editor-wrap-tool"
                            toolbarClassName="toolbar-wrap"> </Editor>

                        <div className='text-[#475467] text-sm ml-5 -mt-5'>
                            {finalDesChars} characters left
                        </div>

                    </div>
                </div>

                {/* Description */}
                <div className='w-full flex pb-5 mb-5 border-b border-[#EAECF0]'>
                    <div className=' w-4/12 text-sm font-semibold text-[#344054]'>
                        <span>How to works</span>
                        <div className='text-sm font-normal text[#475467]'>Write how to use the tool</div>
                    </div>
                    <div className=' px-[14px] rounded-lg w-[512px]'>

                        <Editor
                            handleBeforeInput={handleWorkInput}
                            placeholder="Write working description"
                            editorState={editorWorkState}
                            onEditorStateChange={handlWorkChange}
                            wrapperClassName="full-wrap-tool"
                            editorClassName="editor-wrap-tool"
                            toolbarClassName="toolbar-wrap"> </Editor>

                        <div className='text-[#475467] text-sm ml-5 -mt-5'>
                            {finalWorkChars} characters left
                        </div>

                    </div>
                </div>

                {/* Tool Info section */}
                <div className='w-full flex justify-end pb-5 mb-5'>

                    <div className=''>
                        <button onClick={handleClick} className='py-[10px] px-[14px] mr-3 border border-[#D0D5DD] rounded-lg bg-white hover:bg-gray-50 shadow-sm duration-300 text-[#344054] text-sm font-semibold'>
                            Cancel
                        </button>
                        <input type='submit' value="Save" className='py-[10px] px-[14px] border rounded-lg bg-[#7F56D9] hover:bg-[#6d4ab8] shadow-sm duration-300 text-white text-sm font-semibold'>

                        </input>
                    </div>
                </div>

            </form>

        </div>
    );
};

export default AddTool;