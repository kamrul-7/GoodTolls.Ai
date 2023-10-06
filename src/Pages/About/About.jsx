import React from "react";
import Footer from "../../Component/Footer/Footer";
const About = () => {
  return (
    <div>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a>Home</a>
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
    </div>
  </div>
</div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
