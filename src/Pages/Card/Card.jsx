import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlock } from "@fortawesome/free-solid-svg-icons"; // Import the unlock icon

const Card = () => {
  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure className="p-5">
          <img
            src="https://images.ctfassets.net/7bkqs8vgq34y/42mnpPRa0kPvgZ4tMynP9O/85562d29f3bc54d6c20c3ee4d211c2ca/Website_Insight_Adobe_An-AI-for-design.jpg?w=1200&h=800&fit=fill&f=faces"
            alt="Image"
            className="rounded-xl"
            style={{ width: "303px", height: "240px" }}
          />
        </figure>
        <div className="card-body -mt-6">
          <div className="flex justify-between">
            <div>
              <h2>Tools</h2>
            </div>
            <div className="flex justify-betwen">
              <div>
                <FontAwesomeIcon icon={faUnlock} />
              </div>
              <div className="ml-3">
                <button className="">Free Trial</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
