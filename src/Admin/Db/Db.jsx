import React, { useContext, useEffect, useState } from "react";
import { RiHome3Line } from "react-icons/ri";
import "./Db.css";
import { Link } from "react-router-dom";

const Db = () => {
  const [count, setCount] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const fetchCount = () => {
    fetch("https://api.goodtools.ai//counts")
      .then((res) => res.json())
      .then((data) => {
        setCount(data);
        setIsLoading(false)
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while fetching categories.");
      });
  };

  useEffect(() => {
    fetchCount();
  }, []);
  return (

    <div className="db-section w-full h-[1160px] mt-8 mx-3">
      <div className="title-section">
        <div className="mini-title flex items-center ">
          <RiHome3Line style={{ height: "24px", width: "24px" }}></RiHome3Line>
          <svg
            className="mx-2"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#D0D5DD"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>Dashboard</p>
        </div>
        <div className="title">Dashboard</div>

        {
          
            // <div className="px-auto py-10 flex justify-center w-full">
            //   <span className="loading loading-ring w-20 h-20 -ml-40"></span>
            // </div>
             <div className="card-section">
              <div className="flex">
                <div className="single-card">
                  <div className="card-title">Categories</div>
                  {
                    isLoading ?
                    <span className="loading loading-dots loading-lg"></span>
                    : <div className="number">{count.totalCategories}</div>
                  }
                </div>
                <div className="single-card ">
                  <div className="card-title">Sub Categories</div>
                  {
                    isLoading ?
                    <span className="loading loading-dots loading-lg"></span>
                    : <div className="number">{count.totalCategories}</div>
                  }
                </div>
                <div className="single-card">
                  <div className="card-title">Tools</div>
                  {
                    isLoading ?
                    <span className="loading loading-dots loading-lg"></span>
                    : <div className="number">{count.totalTools}</div>
                  }
                </div>
                <div className="single-card">
                  <div className="card-title">News</div>
                  {
                    isLoading ?
                    <span className="loading loading-dots loading-lg"></span>
                    : <div className="number">{count.totalNews}</div>
                  }
                </div>
              </div>
            </div>


        }
        <div>
          <div className="quick">
            <div>
              <p className="quick-action">Quick Action</p>
              <p>Quick take action</p>
            </div>
            <div className="quick-grid">
              <Link to={'/dashboard/addtool'} className="quick-single item-center">
                <div>
                  <svg
                    className="w-12 h-12"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20.5 7.27777L12 12M12 12L3.49997 7.27777M12 12L12 21.5M14 20.8889L12.777 21.5683C12.4934 21.7259 12.3516 21.8047 12.2015 21.8356C12.0685 21.8629 11.9315 21.8629 11.7986 21.8356C11.6484 21.8047 11.5066 21.7259 11.223 21.5683L3.82297 17.4572C3.52346 17.2908 3.37368 17.2076 3.26463 17.0893C3.16816 16.9846 3.09515 16.8605 3.05048 16.7253C3 16.5725 3 16.4012 3 16.0586V7.94147C3 7.59883 3 7.42751 3.05048 7.27471C3.09515 7.13953 3.16816 7.01545 3.26463 6.91076C3.37368 6.79242 3.52345 6.70922 3.82297 6.54282L11.223 2.43171C11.5066 2.27415 11.6484 2.19537 11.7986 2.16448C11.9315 2.13715 12.0685 2.13715 12.2015 2.16448C12.3516 2.19537 12.4934 2.27415 12.777 2.43171L20.177 6.54282C20.4766 6.70922 20.6263 6.79242 20.7354 6.91076C20.8318 7.01545 20.9049 7.13953 20.9495 7.27471C21 7.4275 21 7.59883 21 7.94147L21 12.5M7.5 4.50002L16.5 9.50002M19 21V15M16 18H22"
                      stroke="#344054"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-bold">Add New Tool</div>
                  <div className="w-[250px] quick-text">
                    Add yourself or import from CSV
                  </div>
                </div>
              </Link>

              <Link to={'/dashboard/addnews'} className="quick-single item-center">
                <div>
                  <svg
                    className="w-12 h-12"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M21.3333 18L20.3332 19.094C19.8028 19.6741 19.0835 20 18.3335 20C17.5835 20 16.8642 19.6741 16.3338 19.094C15.8026 18.5151 15.0834 18.1901 14.3336 18.1901C13.5838 18.1901 12.8645 18.5151 12.3333 19.094M3.33337 20H5.00792C5.4971 20 5.74169 20 5.97186 19.9447C6.17594 19.8957 6.37103 19.8149 6.54997 19.7053C6.7518 19.5816 6.92476 19.4086 7.27066 19.0627L19.8334 6.49998C20.6618 5.67156 20.6618 4.32841 19.8334 3.49998C19.005 2.67156 17.6618 2.67156 16.8334 3.49998L4.27063 16.0627C3.92473 16.4086 3.75178 16.5816 3.62809 16.7834C3.51844 16.9624 3.43763 17.1574 3.38863 17.3615C3.33337 17.5917 3.33337 17.8363 3.33337 18.3255V20Z"
                      stroke="#344054"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-bold">Create a new news</div>
                  <div className="w-[250px] quick-text">
                    Dive into the editor and start creating
                  </div>
                </div>
              </Link>

              <Link to={'/dashboard/category'} className="quick-single item-center">
                <div>
                  <svg
                    className="w-12 h-12"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M12.6666 5V19M5.66663 12H19.6666"
                      stroke="#344054"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="quick-text">Add a New Category</div>
                  <div className="w-[250px] quick-text ">
                    Add yourself or import from CSV
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Db;
