import React, { useState, useEffect } from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { faUnlock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Card = ({ getToolsCount, selectedSub, sortOption, searchData }) => {
  const [tools, setTools] = useState([]);
  const [lastElem, setLastElem] = useState(0);
  const [searchStat, setSearchState] = useState(false);

  if (searchData.length > 0 && searchStat === false) {
    setSearchState(true);
  }
  if (searchData.length === 0 && searchStat === true) {
    setSearchState(false);
  }

  const fetchTools = () => {
    fetch("http://localhost:3000/tools")
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
        setLastElem(data.length - 1);
        getToolsCount(data.length);
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while fetching categories.");
      });
  };

  useEffect(() => {
    fetchTools();
  }, []);

  const component = (tool, indx) => {
    if (tool) {
      const storageKey = `myHeartClicked-${tool._id}`;
      const isClicked = loadStateFromLocalStorage(storageKey);

      return (
        <div className="card size bg-base-100 shadow-xl mb-24 md:mx-0 mx-auto">
          <figure className="relative">
            <img
              src={`http://localhost:3000/uploads/${tool?.image}`}
              alt="Image not found"
              className="rounded-xl"
              style={{ width: "344px", height: "240px" }}
            />

<div
  onClick={() => handleClick(storageKey)}
  className={`md:w-[46px] md:h-[46px] p-[10px] rounded-full flex items-center justify-center absolute top-[16px] left-[268px] bg-white`}
>
  <div className="">
    {isClicked ? <AiOutlineHeart className="w-5 h-5" /> : <AiFillHeart className="w-5 h-5" color="red" />}
  </div>
</div>

          </figure>
          <div className="h-[243] mt-8">
            <div className="flex justify-between">
              <div className="Title">
                <h2>{tool?.toolName}</h2>
              </div>
              <div className="flex justify-between subscription items-center py-4">
                <div className="">
                  <FontAwesomeIcon icon={faUnlock} />
                </div>
                <div className="pr-4">
                  <button className="">{tool?.priceType}</button>
                </div>
              </div>
            </div>

            <div
              className="h-[65px] mt-4 mb-4"
              dangerouslySetInnerHTML={{
                __html: (tool?.description?.slice(0, 139).replace(/["\n]/g, '') || ''),
              }}
            ></div>

            <div className="flex gap-3 mt-8">
              {tool?.SubCategory.slice(0, 3).map((item) => (
                <div className="flex justify-between grid-cols-4 gap-1">
                  <div className="card-category-item">
                    <p className="card-category-text px-3 py-2">{item}</p>
                  </div>
                </div>
              ))}
              {tool?.SubCategory.length > 3 && (
 <div className="card-category-item">
 <p className="card-category-text px-3 py-2">More</p>
</div>
)}
            </div>
            <Link to={`/tool/${tool._id}`} className="button flex justify-center items-center mt-6">
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
            </Link>
          </div>
        </div>
      );
    }
    return null;
  };

  const handleClick = (storageKey) => {
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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
      {tools.map((tool, indx) => {
        if (searchStat) {
          if (tool?.toolName === searchData) {
            return component(tool, indx);
          } else return component(null, indx);
        } else {
          if (selectedSub.length !== 0 && sortOption !== 'All') {
            if (tool?.SubCategory.includes(selectedSub) && tool?.priceType.includes(sortOption)) {
              return component(tool, indx);
            } else return component(null, indx);
          } else if (selectedSub.length !== 0 && sortOption === 'All') {
            if (tool?.SubCategory.includes(selectedSub)) {
              return component(tool, indx);
            } else return component(null, indx);
          } else if (selectedSub.length === 0 && sortOption !== 'All') {
            if (tool?.priceType.includes(sortOption)) {
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
