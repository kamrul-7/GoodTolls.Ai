
import Footer from "../../Component/Footer/Footer";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>About Us</li>
        </ul>
      </div>
      <div>
      <div className="card" style={{border:"1px solid #E5E7EB"}}>
  <div className="card-body">
    <h2 className="card-title text-5xl font-bold">About us</h2>
    <h2 className="text-xl font-medium">About us:</h2>
    <p className="text-base font-normal">ToolsFinder is a collective of entrepreneurs with global perspectives who believe in AI for good. We believe in a future where AI enhances every professionals toolkit. Our team delves deep into tools, plugins and apps to deliver high quality content with transformative potential right to your screens. Tailored for the proactive modern professional, we provide comprehensive resources that illuminate the path to AI integration in the workplace. Create a free account and elevate your professional journey with ToolsFinder.</p>
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
