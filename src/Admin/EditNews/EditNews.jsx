import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { FileUploader } from "react-drag-drop-files";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import draftToHtml from "draftjs-to-html";
import { Editor } from 'react-draft-wysiwyg';
import { ContentState, EditorState, convertFromHTML, convertToRaw } from "draft-js";
import htmlToDraft from 'html-to-draftjs';
import '../AddNews/AddNews.css'

const EditNews = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const newsData = location.state;
    const [newsName, setNewsName] = useState(newsData.newsTitle);
    console.log(newsData);
    const handleClick = () => {
        navigate('/dashboard/manageNews')
    }

    const [editorDesState, setEditorDesState] = useState(EditorState.createEmpty());
    const [initDes, setDesInit] = useState("")
    const [finalDes, setDesFinal] = useState('')
    const [finalDesChars, setFinalDesChars] = useState(0)

    useEffect(() => {
        const contentBlock = htmlToDraft(newsData.newsBody)
        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            const editorState = EditorState.createWithContent(contentState);
            setEditorDesState(editorState)
        }
    }, [])

    const handleDesChange = (data) => {
        setEditorDesState(data);
    };


    useMemo(
        () => setDesFinal(draftToHtml(convertToRaw(editorDesState.getCurrentContent()))),
        [editorDesState]
    )

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

        // Create a temporary DOM element to parse the HTML string
        const tempElement = document.createElement('div');
        tempElement.innerHTML = finalDes;
        setFinalDesChars(1000 - countCharacters(tempElement));

    }, [finalDes])

    const handleDesInput = (input) => {
        if (finalDesChars == 0) {
            return 'handled'
        }
    }


    const fileTypes = ["JPG", "PNG", "GIF"];

    const [file, setFile] = useState(null);
    const [image, setImage] = useState(null);
    useEffect(()=>{
        setImage(`http://localhost:3000/uploads/${newsData.image}`)
    },[])
    const handleFileChange = (file) => {
        console.log(file);
        setFile(file);
        setImage(URL.createObjectURL(file));
    };

    const handleNameChange = (event)=>{
        setNewsName(event.target.value)
    }

    const date = () => {
        const today = new Date();
        const month = today.getMonth();
        const day = today.getDate();
        const year = today.getFullYear();
        return`${day}/${month}/${year}`
      }

    const handleSubmit = (event) => {
        event.preventDefault()
        const toolName = newsName;
        let imageId = newsData.image;
        let image = null;
        if(file !== null){
            image = file;
        }
        const description = finalDes.replace(/<h1>/g, "<h1 style= \"  display: block;font-size: 1.5em;margin-top: 0.83em;margin-bottom: 0.83em;margin-left: 0;margin-right: 0;font-weight: bold;\">").replace(/\n/g, "").replace(/<img/, "<img style=' border-radius: 12px;'");

        

        if (toolName.length != 0  && imageId != null && description) {
            const formdata = new FormData()
            formdata.append('newsTitle', toolName)
            if(file != null){
                formdata.append('image', file)
            }
            formdata.append('imageId', imageId)
            formdata.append('newsBody', description)
            formdata.append('date', date())
            formdata.append('newsId', newsData._id)
            console.log(formdata);
            fetch("http://localhost:3000/editnews", {
                method: "PUT",
                headers: {
                },
                body: formdata,
            })
            .then((res) => res.json())
            .then(data => {
                if (data.acknowledged && data.modifiedCount > 0) {
                    setNewsName('')
                    setImage(null)
                    setFile(null)
                    setEditorDesState(EditorState.createEmpty())
                    alert('News edited')
                    navigate('/dashboard/manageNews')
                } else {
                    alert(data)
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
                    News Management
                </span>

                <svg className="w-4 h-4" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 9L5 5L1 1" stroke="#D0D5DD" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <span className='font-medium text-sm px-2 py-1 rounded-md hover:bg-[#F9FAFB]'>
                    Add News
                </span>
            </div>

            {/* Page Name section */}
            <div className='w-full flex items-center justify-between mb-5'>
                <span className='text-[30px] font-semibold'>
                    Edit News
                </span>
                {/* <button className='py-[10px] px-[14px] border rounded-lg bg-[#7F56D9] hover:bg-[#6d4ab8] shadow-sm duration-300 text-white text-sm font-semibold'>
                    Add Category
                </button> */}
            </div>

            <form onSubmit={handleSubmit}>

                {/* Tool Info section */}
                <div className='w-full flex justify-between pb-5 mb-5 border-b border-[#EAECF0]'>
                    <div>
                        <div className='text-lg leading-6 font-semibold text-[#101828]'>News Posts</div>
                        <div className='text-sm leading-5 text-[#101828]'>---</div>
                    </div>
                    <div className=''>
                        <button onClick={handleClick} className='py-[10px] px-[14px] mr-3 border border-[#D0D5DD] rounded-lg bg-white hover:bg-gray-50 shadow-sm duration-300 text-[#344054] text-sm font-semibold'>
                            Cancel
                        </button>
                        <input type='submit' value="Update" className='py-[10px] px-[14px] border rounded-lg bg-[#7F56D9] hover:bg-[#6d4ab8] shadow-sm duration-300 text-white text-sm font-semibold'>

                        </input>
                    </div>
                </div>



                {/* News Name */}
                <div className='w-full flex pb-5 mb-5 border-b border-[#EAECF0]'>
                    <div className=' w-4/12 text-sm font-semibold text-[#344054]'>News Title</div>
                    <div className='py-[10px] px-[14px] border rounded-lg h-[44px] w-[512px]'>
                        <input onChange={handleNameChange} value={newsName} name='toolName' placeholder="Chapple" className=' h-full my-auto w-full focus:outline-0 text-base text-[#101828]' type="text" />
                    </div>
                </div>

                {/* News image */}
                <div className='w-full flex pb-5 mb-5 border-b border-[#EAECF0]'>
                    <div className=' w-4/12 text-sm font-semibold text-[#344054]'>
                        <span>Featured Image</span>
                        <div className='text-sm font-normal text[#475467]'>This will be displayed as cover</div>
                    </div>
                    <div className=' px-[14px] h-fit flex items-center gap-5'>

                        <div className={`${image === null ? 'hidden' : 'block'} w-[200px] h-[126px] rounded-xl`}>
                            <img className='w-[200px] h-[126px] rounded-xl' src={image ? image : 'https://imgv3.fotor.com/images/videoImage/wonderland-girl-generated-by-Fotor-ai-art-generator_2023-05-15-104543_ibow.jpg'} alt="Upload a image to see preview" />
                        </div>
                        {/* https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png */}
                        {/* https://www.springboard.com/blog/wp-content/uploads/2022/02/is-ai-hard-to-learn-scaled.jpg */}


                        <FileUploader handleChange={handleFileChange} name="file" types={fileTypes} chilldren="hello world" onTypeError={() => alert('Only image can be uploaded')}>
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
                            wrapperClassName="full-wrap-news"
                            editorClassName="editor-wrap-news"
                            toolbarClassName="toolbar-wrap"> </Editor>

                        <div className='text-[#475467] text-sm ml-5 -mt-5'>
                            {finalDesChars} characters left
                        </div>

                    </div>
                </div>

                {/* News Info section */}
                <div className='w-full flex justify-end pb-5 mb-5'>

                    <div className=''>
                        <button onClick={handleClick} className='py-[10px] px-[14px] mr-3 border border-[#D0D5DD] rounded-lg bg-white hover:bg-gray-50 shadow-sm duration-300 text-[#344054] text-sm font-semibold'>
                            Cancel
                        </button>
                        <input type='submit' value="Update" className='py-[10px] px-[14px] border rounded-lg bg-[#7F56D9] hover:bg-[#6d4ab8] shadow-sm duration-300 text-white text-sm font-semibold'>

                        </input>
                    </div>
                </div>

            </form>

        </div>
    );
};

export default EditNews;