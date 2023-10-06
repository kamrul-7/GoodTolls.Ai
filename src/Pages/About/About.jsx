import React from "react";
import Footer from "../../Component/Footer/Footer";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>About Us</li>
        </ul>
      </div>
      <div>
      <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
