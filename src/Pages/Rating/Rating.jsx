import { Link } from "react-router-dom";

const Rating = () => {
  return (
    <div>
      <div className="breadcrumbs text-sm font-normal mb-8 md:mb-14 pl-6">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Card</Link>
          </li>
          <li>Chapple</li>
        </ul>
      </div>

      <div className="className='md:px-10 px-6">
        <div>
          <p className="text-base font-normal">Product Information</p>
          <h1 className="md:text-5xl text-3xl font-bold mt-4">Chapple</h1>
        </div>
        <div className="md:grid grid-cols-2 w-[1090px] h-[244px] md:mt-14 gap-56">
          <div>
            <img
              src="https://images.ctfassets.net/7bkqs8vgq34y/42mnpPRa0kPvgZ4tMynP9O/85562d29f3bc54d6c20c3ee4d211c2ca/Website_Insight_Adobe_An-AI-for-design.jpg?w=1200&h=800&fit=fill&f=faces"
              alt="img"
              className=" md:w-[517px] w-[343px] h-[319px] bg-black text-white border-4 rounded-3xl"
            />
          </div>
          <div className="">
            <h2 className="text-5xl font-bold">
              $19.9{" "}
              <span className="text-base font-normal text-[#4D5761]">
                /month
              </span>{" "}
            </h2>
            <div className="w-[477px] border-b-1 mt-8">
              <hr />
             
            </div>
           <div className="flex justify-start mt-3">
           <div className="pr-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.42001 11.9999 8.42001C13.9799 8.42001 15.5799 10.02 15.5799 12Z"
                    stroke="#081120"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.0001 20.27C15.5301 20.27 18.8201 18.19 21.1101 14.59C22.0101 13.18 22.0101 10.81 21.1101 9.4C18.8201 5.8 15.5301 3.72 12.0001 3.72C8.47009 3.72 5.18009 5.8 2.89009 9.4C1.99009 10.81 1.99009 13.18 2.89009 14.59C5.18009 18.19 8.47009 20.27 12.0001 20.27Z"
                    stroke="#081120"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            <div>
              <h1 className="text-xl font-medium">284231 Users</h1>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
