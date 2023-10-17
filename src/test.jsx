import { useEffect, useMemo, useState, useCallback } from "react";
import draftToHtml from "draftjs-to-html";
import { Editor } from 'react-draft-wysiwyg';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { ContentState, EditorState, convertFromHTML, convertToRaw } from "draft-js";
import htmlToDraft from 'html-to-draftjs';
import en from './Pages/Custom/en'
import purify from 'dompurify';


import './Test.css'


const Test = () => {
    const [reviews, setReviews] = useState([])


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

    useEffect(() => {
        const items = ["Mango", "Apple", "Banana", "Papaya"];
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
        if (innerSuggestions.length == 0) {
            innerSuggestions.push(`0 match for '${eventData}'`)
        }
        setSuggestions(innerSuggestions.sort());
    }

    const handleAdd = (value) => {
        const arr = [...selected]
        if (!selected.includes(value) && !value.includes('0 match for')) {
            arr.push(value);
            setSelected(arr);
            const newSuggested = suggestions.filter(item => !arr.includes(item));
            setSuggestions(newSuggested.sort())
        }
    }

    const handleRemove = (value) => {
        const arr = [...selected]
        const newSelected = arr.filter(item => item !== value)
        setSelected(newSelected)
        if (!suggestions.includes(value)) {
            const arr = [...suggestions]
            arr.push(value)
            setSuggestions(arr.sort())
        }
    }



    useEffect(() => console.log(selected), [selected])




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


            <div onBlur={setBlur} onFocus={setFocus} className=" border border-blue-500 flex 
            w-[400px] h-[44px] p-2">
                <div>
                    {selected.map((value, index) => (
                        <button key={index} onClick={() => handleRemove(value)}>{value}</button>
                    ))}
                </div>
                <div className="relative">
                    <input className="w-6/12 h-10 border border-red-500" onKeyUp={handleKeyPress} type="text" />
                    <div className={`${isOpen ? 'block absolute' : 'hidden'}`}>
                        <ul className="p-2 shadow z-10 bg-base-100 rounded-box w-52">
                            {suggestions.length != 0 ? suggestions.map((value, index) => (
                                <li key={index}><button className="w-fit" onClick={() => handleAdd(value)}>
                                    {value}
                                </button></li>
                            )) : <li>No item </li>}
                        </ul>
                    </div>
                </div>
            </div>

            {/* <div className="h-[500px]"><Dropdown></Dropdown></div> */}


            {/* <div>{purify.sanitize(x)}</div> */}
        </div>
    );
};

export default Test;