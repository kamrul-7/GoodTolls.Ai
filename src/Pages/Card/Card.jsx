import React, { useState, useEffect, useContext } from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { faUnlock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import slugify from "slugify";

const Card = ({ getToolsCount, selectedSub, sortOption, searchData }) => {
  const { storeToolId } = useContext(AuthContext)
  const [tools, setTools] = useState([]);
  const [lastElem, setLastElem] = useState(0);
  const [searchStat, setSearchState] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  const initialButtonStates = {};

  if (searchData.length > 0 && searchStat === false) {
    setSearchState(true);
  }
  if (searchData.length === 0 && searchStat === true) {
    setSearchState(false);
  }
  

  const fetchTools = () => {

    fetch("http://localhost:3000/tool")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false)
        setTools(data);
        setLastElem(data.length - 1);
        getToolsCount(data.length);
        data.forEach((tool) => {
          const storageKey = `myHeartClicked-${tool._id}`;
          const isClicked = loadStateFromLocalStorage(storageKey);
          initialButtonStates[tool._id] = isClicked;
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchTools();
  }, []);

  let toolsCount = 0;
  const component = (tool, indx) => {

    toolsCount++;
    if (tool == null) {
      toolsCount--;
    }
    if (indx === lastElem) {
      getToolsCount(toolsCount)
    }

    if (tool) {
      const storageKey = `myHeartClicked-${tool._id}`;
      const isClicked = loadStateFromLocalStorage(storageKey);

// Define the truncateHtml function
function truncateHtml(html, length) {
  // Remove HTML tags and split the text into words
  const text = html.replace(/<[^>]+>/g, ' ').split(' ');

  // Take the first 'length' words and join them back together
  const truncatedText = text.slice(0, length).join(' ');

  // If the original HTML content has more words, add an ellipsis
  if (text.length > length) {
    return truncatedText + '...';
  }

  return truncatedText;
}





      return (
        <div key={indx} className="border p-5 rounded-2xl card-shadow  md:mx-0 mx-auto font-paragraph md:w-full w-[95%]">
          <Link onClick={() => storeToolId(tool._id)} to={`/tool/${slugify(tool.toolName)}`} >
            <figure className="relative w-full mb-6">
            <img
                src={`https://api.goodtools.ai/uploads/${tool?.image}`}
                alt="Image not found"
                className="rounded-xl"
                style={{ width: '100%', height: "240px" }}
              />

              <div
                onClick={(event) => handleClick(event, storageKey)}
                className={`md:w-[46px] md:h-[46px] p-[10px] rounded-full flex items-center justify-center absolute top-[16px] right-0 mr-[5%] bg-white`}
              >
                <div className="">
                  {isClicked ? <BsBookmarkFill className="w-5 h-5"  /> : <BsBookmark className="w-5 h-5" />}
                </div>
              </div>

            </figure>

            <div className="h-[243]">
              <div className="flex justify-between">
                <div className="Title">
                  <h2 className="font-title font-bold text-[24px]">{tool?.toolName}</h2>
                </div>
                <div className="flex justify-between subscription items-center py-4">
                  <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <g clipPath="url(#clip0_1454_1454)">
                        <path d="M9.91675 4.66718H4.08341V4.08384C4.08324 3.43716 4.29798 2.80876 4.69388 2.29743C5.08979 1.7861 5.6444 1.42084 6.27052 1.25908C6.89665 1.09733 7.55878 1.14824 8.15281 1.40382C8.74684 1.65941 9.23909 2.10516 9.55216 2.67101C9.58936 2.738 9.63938 2.79701 9.69937 2.84467C9.75937 2.89233 9.82817 2.9277 9.90184 2.94877C9.9755 2.96984 10.0526 2.9762 10.1287 2.96747C10.2048 2.95875 10.2785 2.93512 10.3455 2.89793C10.4125 2.86073 10.4715 2.81071 10.5192 2.75072C10.5668 2.69072 10.6022 2.62192 10.6233 2.54826C10.6443 2.47459 10.6507 2.39749 10.642 2.32137C10.6332 2.24524 10.6096 2.17158 10.5724 2.10459C10.1339 1.31261 9.44467 0.688795 8.61302 0.331208C7.78136 -0.0263783 6.85446 -0.097462 5.97801 0.129131C5.10155 0.355724 4.32524 0.867146 3.77111 1.58301C3.21698 2.29887 2.91645 3.17857 2.91675 4.08384V4.91451C2.39721 5.14125 1.955 5.51448 1.64421 5.98855C1.33341 6.46262 1.16749 7.01698 1.16675 7.58384V11.0838C1.16767 11.8571 1.47526 12.5984 2.02204 13.1452C2.56882 13.692 3.31015 13.9996 4.08341 14.0005H9.91675C10.69 13.9996 11.4313 13.692 11.9781 13.1452C12.5249 12.5984 12.8325 11.8571 12.8334 11.0838V7.58384C12.8325 6.81058 12.5249 6.06925 11.9781 5.52247C11.4313 4.97569 10.69 4.6681 9.91675 4.66718ZM11.6667 11.0838C11.6667 11.548 11.4824 11.9931 11.1542 12.3213C10.826 12.6495 10.3809 12.8338 9.91675 12.8338H4.08341C3.61929 12.8338 3.17417 12.6495 2.84598 12.3213C2.51779 11.9931 2.33341 11.548 2.33341 11.0838V7.58384C2.33341 7.11971 2.51779 6.67459 2.84598 6.34641C3.17417 6.01822 3.61929 5.83384 4.08341 5.83384H9.91675C10.3809 5.83384 10.826 6.01822 11.1542 6.34641C11.4824 6.67459 11.6667 7.11971 11.6667 7.58384V11.0838Z" fill="#081120" />
                        <path d="M7.00008 8.16699C6.84537 8.16699 6.697 8.22845 6.5876 8.33785C6.47821 8.44724 6.41675 8.59562 6.41675 8.75032V9.91699C6.41675 10.0717 6.47821 10.2201 6.5876 10.3295C6.697 10.4389 6.84537 10.5003 7.00008 10.5003C7.1548 10.5003 7.30317 10.4389 7.41257 10.3295C7.52196 10.2201 7.58342 10.0717 7.58342 9.91699V8.75032C7.58342 8.59562 7.52196 8.44724 7.41257 8.33785C7.30317 8.22845 7.1548 8.16699 7.00008 8.16699Z" fill="#081120" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1454_1454">
                          <rect width="14" height="14" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="pr-4 font-normal text-xs">
                    <button className="">{tool?.priceType}</button>
                  </div>
                </div>
              </div>



              <div


  className="h-[65px] font-normal text-base font-paragraph"

  dangerouslySetInnerHTML={{
    __html: truncateHtml(tool?.description, 15),
  }}
></div>


              <div className="flex gap-3">
                {tool?.SubCategory.slice(0, 3).map((item, index) => (
                  <div key={index} className="flex justify-between grid-cols-4 gap-1">
                    <div className="card-category-item">
                      <p className="card-category-text px-3 py-2 font-normal text-xs">{item}</p>
                    </div>
                  </div>
                ))}
                {tool?.SubCategory.length > 3 && (
                  <div className="card-category-item">
                    <p className="card-category-text px-3 py-2">More</p>
                  </div>
                )}
              </div>
              <div className="button flex justify-center items-center mt-6">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.326264 1.44821L0.293197 1.35842C0.149147 0.967665 0.171282 0.632891 0.359162 0.363644C0.517834 0.135893 0.780414 0 1.06141 0C1.28966 0 1.51244 0.084108 1.74134 0.256758L15.2421 8.89944L15.3054 8.94469C15.62 9.19366 15.801 9.55545 15.8023 9.9372C15.8035 10.319 15.6246 10.6818 15.3118 10.9329L15.2813 10.9574L1.74273 19.7389C1.51302 19.9145 1.28899 20 1.05887 20C0.778992 20 0.517191 19.8646 0.358418 19.6381C0.170639 19.3699 0.147352 19.036 0.289439 18.6453L0.321763 18.5563L5.94803 10.1871C5.9772 10.0466 5.97683 9.83535 5.94711 9.69472L0.326264 1.44821ZM3.34024 16.8509L13.9905 9.94278L13.9181 9.89638H7.52103C7.52601 10.2117 7.48292 10.5297 7.3893 10.7873L7.35688 10.8763L3.34024 16.8509Z"
                    fill="#4D5761"
                  />
                </svg>
              </div>
            </div>

          </Link>
        </div>
      );
    }
    return null;
  };

  const handleClick = (event, storageKey) => {
    event.preventDefault()
    const isClicked = loadStateFromLocalStorage(storageKey);
    localStorage.setItem(storageKey, String(!isClicked));
    forceUpdate(); // Add this to force a re-render
  };

  const loadStateFromLocalStorage = (storageKey) => {
    const isClicked = localStorage.getItem(storageKey) === "true";
    return isClicked;
  };

  const [updateState, setUpdateState] = useState(0);
  const forceUpdate = () => setUpdateState(updateState + 1);
  return (
    <div id='cards' className=" grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:gap-6 gap-4">
      {
        isLoading ?
          <span className="loading loading-ring md:w-40 md:h-40 w-20 h-20 md:ml-[140%] ml-[40%] md:my-40 my-20"></span>
          : tools.map((tool, indx) => {
            if (searchStat) {
              if (tool?.toolName) {
                if (tool?.toolName.toLowerCase().includes(searchData.toLowerCase())) {
                  return component(tool, indx);
                } else return component(null, indx);
              }
            } else {
              if (selectedSub.length !== 0 && sortOption !== 'All') {
                if (tool?.priceType && tool?.SubCategory.includes(selectedSub) && tool?.priceType.includes(sortOption)) {
                  return component(tool, indx);
                } else return component(null, indx);
              } else if (selectedSub.length !== 0 && sortOption === 'All') {
                if (tool?.SubCategory && tool?.SubCategory.includes(selectedSub)) {
                  return component(tool, indx);
                } else return component(null, indx);
              } else if (selectedSub.length === 0 && sortOption !== 'All') {
                if (tool?.priceType && tool?.priceType.includes(sortOption)) {
                  return component(tool, indx);
                } else return component(null, indx);
              } else {
                return component(tool, indx);
              }
            }
          })}
    </div>
  );
};

export default Card;
