
import Footer from "../../Component/Footer/Footer";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="mx-6">
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
    <h2 className="card-title text-3xl md:text-5xl font-bold mb-8 md:mb-10">About us</h2>
    <h2 className="text-xl font-medium mb-4">About us:</h2>
    <p className="text-base font-normal mb-7">ToolsFinder is a collective of entrepreneurs with global perspectives who believe in AI for good. We believe in a future where AI enhances every professional's toolkit. Our team delves deep into tools, plugins and apps to deliver high quality content with transformative potential right to your screens. Tailored for the proactive modern professional, we provide comprehensive resources that illuminate the path to AI integration in the workplace. Create a free account and elevate your professional journey with ToolsFinder.</p>
    <h2 className="text-xl font-medium mb-4">Our mission:</h2>
    <p className="text-base font-normal mb-7">We strive to become the best resource for proactive professionals who want to discover, understand and adopt AI for work.</p>
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
