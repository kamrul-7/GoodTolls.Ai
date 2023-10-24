import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import draftToHtml from "draftjs-to-html";
import { Editor } from 'react-draft-wysiwyg';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { ContentState, EditorState, convertFromHTML, convertToRaw } from "draft-js";
import htmlToDraft from 'html-to-draftjs';
import { FileUploader } from "react-drag-drop-files";
import en from './Pages/Custom/en'
import purify from 'dompurify';

import './Test.css'
import Category from "./Admin/Category/Category";


const Test = () => {
    const [image, setImage] = useState(null);
    const [reviews, setReviews] = useState([])


    // fetch('http://localhost:3000/uploads/2023-10-21T10-43-55.055Zpexels-katie-burandt-1212693.jpg')
    // .then(data => setImage(data.url))

    useEffect(() => {
        const str = {SubCategory : "dsada,1" }
        fetch("http://localhost:3000/newtool", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(str)
        })
    }, [])
    //Responsive rating part

    const [isMobile, setIsMobile] = useState(false)
    const [reviewCount, setReviewCount] = useState(0)

    // initialize screen size type
    useEffect(() => {
        window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
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
        if (isMobile == false && reviewCount % 2 == 1) {
            setReviewCount(reviewCount - 1)
        }
        if (isMobile == true && reviewCount % 2 == 0) {
            if (reviewCount + 1 < reviews.length) {
                setReviewCount(reviewCount + 1)
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

    const handleNext = () => {
        if (!isMobile) {
            if (reviewCount < reviews.length - 2) {
                setReviewCount(reviewCount + 2);
            }
        }
        else {
            if (reviewCount < reviews.length - 1) {
                setReviewCount(reviewCount + 1);
            }
        }
    }

    const handlePrev = () => {
        if (!isMobile) {
            if (reviewCount - 2 >= 0) {
                setReviewCount(reviewCount - 2);
            }
        }
        else {
            if (reviewCount - 1 >= 0) {
                setReviewCount(reviewCount - 1);
            }

        }
    }



    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [init, setInit] = useState("")
    const [final, setFinal] = useState('')

    useEffect(() => {
        const contentBlock = htmlToDraft(init)

        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            const editorState = EditorState.createWithContent(contentState);
            setEditorState(editorState)
        }
    }, [init])

    const handleChange = (data) => {
        setEditorState(data);
    };


    useMemo(
        () => setFinal(draftToHtml(convertToRaw(editorState.getCurrentContent()))),
        [editorState]
    )

    // en['components.controls.blocktype.h1'] = <img src={'/public/size.svg'} alt="font size" />;
    // en['components.controls.blocktype.blockquote'] = <img src={'/public/quote.svg'} alt="font size" />;
    // const localization = {
    //     locale: 'en',
    //     translations: en,
    // };

    // const tool = {
    //     options: ['inline', 'blockType', 'fontFamily', 'list', 'link', 'image'],
    //     inline: {
    //         inDropdown: false,
    //         className: undefined,
    //         component: undefined,
    //         dropdownClassName: undefined,
    //         options: ['bold', 'italic',],
    //         bold: { icon: '/public/boldd.svg', className: undefined },
    //         italic: { icon: '/public/italicd.svg', className: undefined }
    //     },
    //     blockType: {
    //         inDropdown: false,
    //         options: ['H1', 'Blockquote'],
    //         className: undefined,
    //         component: undefined,
    //         dropdownClassName: undefined
    //     },
    //     fontFamily: {
    //         options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
    //         className: undefined,
    //         component: undefined,
    //         dropdownClassName: undefined,
    //     },
    //     list: {
    //         inDropdown: false,
    //         className: undefined,
    //         component: undefined,
    //         dropdownClassName: undefined,
    //         options: ['unordered', 'ordered'],
    //         unordered: { icon: '/public/unordered.svg', className: undefined },
    //         ordered: { icon: '/public/ordered.svg', className: undefined },
    //     },
    //     link: {
    //         inDropdown: false,
    //         className: undefined,
    //         component: undefined,
    //         popupClassName: undefined,
    //         dropdownClassName: undefined,
    //         showOpenOptionOnHover: true,
    //         defaultTargetOption: '_self',
    //         options: ['link'],
    //         link: { icon: '/public/link.svg', className: undefined },
    //         linkCallback: undefined
    //     },
    //     image: {
    //         icon: '/public/image.svg',
    //         className: undefined,
    //         component: undefined,
    //         popupClassName: undefined,
    //         urlEnabled: true,
    //         uploadEnabled: true,
    //         alignmentEnabled: true,
    //         uploadCallback: undefined,
    //         previewImage: false,
    //         inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
    //         alt: { present: false, mandatory: false },
    //         defaultSize: {
    //             height: 'auto',
    //             width: 'auto',
    //         },
    //     },
    // }





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
        console.log(event.currentTarget.contains(event.relatedTarget), event.currentTarget, event.relatedTarget);
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

    useEffect(() => console.log(file), [file])

    const [testnews, settestnews] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/news/6536d1108dab758a8b3a7f64')
        .then(res=>res.json())
        .then(data=>settestnews(data))
    },[])

    return (

        <div>
            <p>data: {reviews.length}</p>
            <div>
                {console.log()}
                <h1>reviewCount: {reviewCount}</h1>
                <h1>1. {reviews[reviewCount]?.name}</h1>
                <h1 className="hidden md:block">2. {reviews[reviewCount + 1]?.name}</h1>
                <button onClick={handleNext}>next</button>
                <button onClick={handlePrev}>prev</button>

            </div>
            <Editor
                placeholder="Tell us about your opinon"
                // localization={localization}
                // toolbar={tool}
                editorState={editorState}
                onEditorStateChange={handleChange}
                wrapperClassName="full-wrap"
                editorClassName="editor-wrap"
                toolbarClassName="toolbar-wrap"> </Editor>
            <div>This will go to server: {JSON.stringify(final.replace(/<h1>/g, "<h1 style= \"  display: block;font-size: 1.5em;margin-top: 0.83em;margin-bottom: 0.83em;margin-left: 0;margin-right: 0;font-weight: bold;\">"))}</div>
            <div className="w-full border">
                <div className="border w-full" dangerouslySetInnerHTML={{ __html: "<h1 style= \" display: block;font-size: 1.5em;margin-top: 0.83em;margin-bottom: 0.83em;margin-left: 0;margin-right: 0;font-weight: bold;\">All-in-one platform empowers you to effortlessly generate text, image, code, chat, and much more</h1>\n<p></p>\n" }}></div>
            </div>


            <div className="w-[400px] border px-[14px] py-[10px] my-40 flex flex-wrap gap-2 border-[#D0D5DD] rounded-lg" tabIndex={0} onFocus={() => { inputRef.current.focus() }}>
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
                        <input ref={inputRef} onFocus={setFocus} className={`w-full h-6 focus:border-0 focus:outline-0 `} onKeyUp={handleKeyPress} type="text" />
                        <div className={`${isOpen ? 'block absolute top-10 left-0' : 'hidden'}`}>
                            <ul className="p-2 shadow z-10 bg-base-100 border w-52 h-28 overflow-y-scroll">
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

            <FileUploader classes="test" handleChange={handleFileChange} name="file" types={fileTypes} chilldren="hello world"><Category></Category></FileUploader>

            <img src={image} />
            <div dangerouslySetInnerHTML={{__html:testnews?.newsBody}}></div>

            {/* <div className="h-[500px]"><Dropdown></Dropdown></div> */}


            {/* <div>{purify.sanitize(x)}</div> */}
        </div>
    );
};

export default Test;