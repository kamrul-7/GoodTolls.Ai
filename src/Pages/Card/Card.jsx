
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlock } from "@fortawesome/free-solid-svg-icons"; // Import the unlock icon

const Card = () => {
  return (
    <div>
      <div className="card size bg-base-100 shadow-xl mb-24 md:mx-0 mx-auto">
        <figure>
          <img
            src="https://images.ctfassets.net/7bkqs8vgq34y/42mnpPRa0kPvgZ4tMynP9O/85562d29f3bc54d6c20c3ee4d211c2ca/Website_Insight_Adobe_An-AI-for-design.jpg?w=1200&h=800&fit=fill&f=faces"
            alt="Image"
            className="rounded-xl"
            style={{ width: "344px", height: "240px" }}
          />
        </figure>
        <div className="h-[243] mt-8">
          <div className="flex justify-between">
            <div className="Title">
              <h2>Tools</h2>
            </div>
            <div className="flex justify-between  subscription items-center">
              <div className="">
                <FontAwesomeIcon icon={faUnlock} />
              </div>
              <div className="pr-4">
                <button className="">Free Trial</button>
              </div>
            </div>
          </div>
          <div className="mt-4 mb-4">
          In contrast, formatted text, like a Microsoft Word document or an HTML webpage, includes instructions.
          </div>
         
        <div className="flex justify-between grid-cols-4 gap-1">
            <div className="card-category-item"> <p className="card-category-text px-3 py-2">Photos</p></div>
            <div className="card-category-item"><p className="card-category-text px-3 py-2">Transcriber</p></div>
            <div className="card-category-item "><p className="card-category-text px-3 py-2">Audioedeting</p></div>
            <div className="card-category-item"><p className="card-category-text px-3 py-2">See more</p></div>
        </div>
        <button className="button flex justify-center items-center mt-6">
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
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Card;
