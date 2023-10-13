
import { Rating } from "@smastrom/react-rating";
import './Review.css'
import "@smastrom/react-rating/style.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";

const Review = () => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
let x=true
  const modalRef = useRef(null);
  const StarDrawing = (
    <svg
      width="36"
      height="31"
      viewBox="0 0 36 31"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.802 0.923722C17.1986 -0.209655 18.8014 -0.209655 19.198 0.923721L22.4174 10.1241C22.5955 10.6333 23.076 10.9742 23.6154 10.9742H33.8214C35.0736 10.9742 35.5693 12.5953 34.5313 13.2956L26.4402 18.7542C25.962 19.0768 25.7615 19.6812 25.952 20.2256L29.08 29.1649C29.4834 30.3179 28.1848 31.3195 27.1721 30.6363L18.7098 24.9272C18.2809 24.6378 17.7191 24.6378 17.2902 24.9272L8.82787 30.6363C7.81522 31.3195 6.51657 30.3179 6.92002 29.1649L10.048 20.2256C10.2385 19.6812 10.038 19.0768 9.55985 18.7542L1.46873 13.2956C0.430693 12.5953 0.926396 10.9742 2.17858 10.9742H12.3846C12.924 10.9742 13.4045 10.6333 13.5826 10.1241L16.802 0.923722Z" />
    </svg>
  );

  const customStyles = {
    itemShapes: StarDrawing,
    activeFillColor: "#FAAF00",
    inactiveFillColor: "#E5E7EB",
  };
  const { toggle, setTrue, setFalse } = useContext(AuthContext);
  const [rating, setRating] = useState(4);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    closeModal(); // Close the modal and reset state when submitted
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
    setMessage(""); // Reset the message state
    setFalse()
  };

  return (
    <div className="">
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Send
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-2xl mb-4">What is Your Rating?</h3>
          <div>
            <Rating
              style={{ maxWidth: "234px", maxHeight: "39px", gap: "8px" }}
              value={rating}
              onChange={setRating}
              itemStyles={customStyles}
            />
          </div>

          <div className="modal-action">
            <form method="dialog" className="w-full" onSubmit={handleSubmit}>
              <div>
                <label className="label">
                  <span className="text-xl font-medium">
                    What is your review of the tool?
                  </span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="textarea input-bordered w-full focus:outline-none"
                ></textarea>
              </div>

              <button
                className="btn-circle btn-ghost absolute right-2 top-2"
                type="button"
                onClick={closeModal}
              >
                ✕
              </button>
              <div className="flex justify-end">
                <div>
                  {" "}
                  <button
                    className="btn my-6 mb-44"
                    type="button"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
                <div>
                  <button
                    className="btn btn-primary text-white btn-active my-6 mb-44"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Review;
